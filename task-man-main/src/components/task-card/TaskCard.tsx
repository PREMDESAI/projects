import { TrashIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Text } from '@radix-ui/themes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Task, useTasks } from '@/hooks/use-tasks';

interface TaskCardProps {
  task: Task;
}

interface TaskCardContentProps extends TaskCardProps {}

const TaskCardContent: React.FC<TaskCardContentProps> = ({ task }) => (
  <Flex
    direction='column'
    gap='1'
    style={{
      background: '#fff',
      padding: '16px',
      borderRadius: '4px',
      boxShadow: '0 1px 2px #ccc',
      cursor: 'move',
    }}
  >
    <Text style={{ fontSize: '12px', color: '#3E63DD', fontWeight: 'bold' }}>
      {task.id}
    </Text>
    <Text style={{ fontSize: '14px', color: '#555' }}>{task.title}</Text>
  </Flex>
);

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const navigate = useNavigate();
  const { deleteTask } = useTasks();
  const [isDragging, setIsDragging] = React.useState(false);

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    taskId: Task['id']
  ) => {
    event.dataTransfer.setData('taskId', taskId);
    setIsDragging(true);
  };

  return (
    <Box
      style={{
        position: 'relative',
        opacity: isDragging ? 0.2 : 1,
      }}
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      onDragEnd={() => setIsDragging(false)}
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <TaskCardContent task={task} />
      <IconButton
        variant='ghost'
        style={{ position: 'absolute', top: 16, right: 16, cursor: 'pointer' }}
        onClick={(event) => {
          event.stopPropagation();
          deleteTask(task.id);
        }}
      >
        <TrashIcon width='18' height='18' />
      </IconButton>
    </Box>
  );
};
