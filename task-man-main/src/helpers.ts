import { TaskStatus } from './hooks/use-tasks';

export const getStatusText = (status: TaskStatus) => {
  switch (status) {
    case 'todo':
      return 'TO DO';
    case 'in_progress':
      return 'IN PROGRESS';
    case 'in_review':
      return 'IN REVIEW';
    case 'done':
      return 'DONE';

    default:
      return;
  }
};
