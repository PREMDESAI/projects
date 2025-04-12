import { Flex, IconButton, Text } from '@radix-ui/themes';

import { Task, TaskStatus, useTasks } from '@/hooks/use-tasks';
import { getStatusText } from '@/helpers';
import { TaskCard } from '../task-card';
import { PlusIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface TaskContainerProps {
  status: TaskStatus;
}

const TaskContainer: React.FC<TaskContainerProps> = ({ status }) => {
  const { tasksView } = useTasks(status);
  const navigate = useNavigate();

  return (
    <>
      <Flex justify='between'>
        <Text
          as='p'
          style={{ color: '#aaa', fontWeight: 'bold' }}
          role='status'
        >
          {getStatusText(status)}{' '}
          {tasksView.length > 0 && `(${tasksView.length})`}
        </Text>
        <IconButton
          variant='soft'
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(`/new/${status}`)}
        >
          <PlusIcon width='18' height='18' />
        </IconButton>
      </Flex>
      {tasksView.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </>
  );
};

export const KanbanBoardPanels = () => {
  const { statuses, tasksView, updateTask } = useTasks();
  const [isDragging, setIsDragging] = React.useState(false);

  const onDrop = async (
    event: React.DragEvent<HTMLDivElement>,
    status: TaskStatus
  ) => {
    setIsDragging(false);

    const taskId = event.dataTransfer.getData('taskId') as Task['id'];
    const task = tasksView.find(({ id }) => taskId === id);

    if (!task) return;
    // Do nothing if task is being moved to same status
    if (task.status === status) return;

    await updateTask(taskId, {
      ...task,
      status,
    });
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  return statuses.map((status) => (
    <Flex
      direction='column'
      gap='3'
      key={`kanban-panel-${status}`}
      style={{
        height: 'calc(100vh - 128px - 32px)',
        overflowY: 'auto',
        backgroundColor: '#f5f5fa',
        borderRadius: '4px',
        padding: '8px',
        flexGrow: 1,
        position: 'relative',
        maxWidth: '320px',
        minWidth: '320px',
        border: isDragging ? '1px dashed #aaa' : '',
      }}
      onDrop={(e) => onDrop(e, status)}
      onDragOver={onDragOver}
    >
      <TaskContainer status={status} />
    </Flex>
  ));
};
