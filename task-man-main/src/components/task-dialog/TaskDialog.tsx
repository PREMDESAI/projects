import {
  Button,
  Dialog,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getStatusText } from '@/helpers';
import { TaskStatus, useTasks } from '@/hooks/use-tasks';

export const TaskDialog = () => {
  const { tasksView, statuses, addTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const { status, id } = useParams<{ status?: TaskStatus; id?: string }>();
  const selectedTask = React.useMemo(
    () => tasksView.find((task) => task.id === id),
    [id, tasksView]
  );

  const isUpdateMode = Boolean(selectedTask);

  const [title, setTitle] = React.useState(selectedTask?.title);
  const [description, setDescription] = React.useState(
    selectedTask?.description || ''
  );
  const [taskStatus, setTaskStatus] = React.useState<TaskStatus | undefined>(
    status || selectedTask?.status
  );

  const [isOpen, setIsOpen] = React.useState(true);

  if (status) {
    setTimeout(() => navigate('/new', { replace: true }));
  }

  const isFormValid = Boolean(title);

  const onSubmit = async () => {
    if (isFormValid) {
      if (isUpdateMode) {
        await updateTask(selectedTask!.id, {
          title: title!,
          status: taskStatus!,
          description,
        });
      } else {
        await addTask({
          title: title!,
          status: taskStatus!,
          description,
        });
      }

      setIsOpen(false);
    }
  };

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => !open && navigate('/', { replace: true })}
    >
      <Dialog.Content maxWidth='450px'>
        <Dialog.Title>{isUpdateMode ? 'Update Task' : 'New Task'}</Dialog.Title>
        <Dialog.Description size='2' mb='4'>
          Add a new task to your list
        </Dialog.Description>

        <Flex direction='column' gap='3'>
          <label>
            <Text as='div' size='2' mb='1' weight='bold'>
              Title
            </Text>
            <TextField.Root
              placeholder='What would you like to achieve ?'
              required
              defaultValue={title}
              onChange={(event) => setTitle(event.target.value)}
              aria-label='Task Title'
            />
          </label>
          <label>
            <Text as='div' size='2' mb='1'>
              Description
            </Text>
            <TextArea
              placeholder='Elaborate a little...'
              onChange={(event) => setDescription(event.target.value)}
              defaultValue={description}
              aria-label='Task Description'
            />
          </label>
          <label>
            <Text as='div' size='2' mb='1'>
              Status
            </Text>
            <Select.Root
              defaultValue={taskStatus || statuses[0]}
              onValueChange={(value) => setTaskStatus(value as TaskStatus)}
            >
              <Select.Trigger />
              <Select.Content>
                {statuses.map((status) => (
                  <Select.Item
                    value={status}
                    key={`task-dialog-status-${status}`}
                  >
                    {getStatusText(status)}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </label>
        </Flex>

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            <Button variant='soft' color='gray'>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button disabled={!isFormValid} onClick={onSubmit}>
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
