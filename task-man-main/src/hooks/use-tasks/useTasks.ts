import React from 'react';

import { TasksContext } from './context';
import { TaskStatus } from './types';
import { debounce } from 'throttle-debounce';

export const useTasks = (status?: TaskStatus) => {
  const context = React.useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks should be wrapped inside TasksProvider');
  }

  const { tasksView, filterTasks } = context;

  return {
    ...context,
    tasksView: status
      ? tasksView.filter((task) => task.status === status)
      : tasksView,
    filterTasks: debounce(500, filterTasks),
  };
};
