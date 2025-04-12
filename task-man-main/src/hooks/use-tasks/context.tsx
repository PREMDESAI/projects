import React from 'react';

import { Task, TaskContextValues, TaskStatus } from './types';
import { TaskRepository } from '@/models/task';
import { STATUSES } from '@/constants';

export const TasksContext = React.createContext<TaskContextValues>({
  isLoading: false,
  tasksData: [],
  tasksView: [],
  statuses: [],

  addTask: () => Promise.resolve(),
  updateTask: () => Promise.resolve(),
  deleteTask: () => Promise.resolve(),
  filterTasks: () => null,
});

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasksData, setTasksData] = React.useState<Task[]>([]);
  const [tasksView, setTasksView] = React.useState<Task[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    TaskRepository.read()
      .then(setTasksData)
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    setTasksView([...tasksData]);
  }, [tasksData]);

  const addTask = React.useCallback(
    async (task: Omit<Task, 'id'>) => {
      setIsLoading(true);
      setTasksData([
        ...tasksData,
        {
          ...task,
          id: `TM-${tasksData.length + 1}`,
        },
      ]);

      const updatedTasks = await TaskRepository.create(task);
      setTasksData(updatedTasks);
      setIsLoading(false);
    },
    [tasksData]
  );

  const updateTask = React.useCallback(
    async (id: string, updatedTask: Omit<Task, 'id'>) => {
      setIsLoading(true);
      const indexToUpdate = tasksData.findIndex((task) => task.id === id);

      const clonedTasks = [...tasksData];
      clonedTasks.splice(indexToUpdate, 1);

      setTasksData([
        ...clonedTasks.slice(0, indexToUpdate),
        {
          id,
          ...updatedTask,
        },
        ...clonedTasks.slice(indexToUpdate),
      ]);

      const updatedTasks = await TaskRepository.update({ id, ...updatedTask });
      setTasksData(updatedTasks);
      setIsLoading(false);
    },
    [tasksData]
  );

  const deleteTask = React.useCallback(
    async (id: Task['id']) => {
      setIsLoading(true);

      const clonedTasks = [...tasksData];
      const indexToUpdate = tasksData.findIndex((task) => task.id === id);
      clonedTasks.splice(indexToUpdate, 1);
      setTasksData(clonedTasks);

      const updatedTasks = await TaskRepository.remove(id);
      setTasksData(updatedTasks);
      setIsLoading(false);
    },
    [tasksData]
  );

  const filterTasks = React.useCallback(
    ({ taskStatus, text }: { text?: string; taskStatus?: TaskStatus }) => {
      if (!taskStatus && !text) {
        setTasksView([...tasksData]);
        return;
      }
      const sanitizedText = text?.trim().toLowerCase();
      setTasksView([
        ...tasksData.filter(({ id, title, status }) => {
          let textMatch: boolean = false;
          let statusMatch: boolean = false;

          if (sanitizedText) {
            textMatch =
              id.toLowerCase().includes(sanitizedText) ||
              title.toLowerCase().includes(sanitizedText);
          }

          if (taskStatus) {
            statusMatch = taskStatus === status;
          }

          if (taskStatus && sanitizedText) return textMatch && statusMatch;

          if (taskStatus) return statusMatch;

          if (sanitizedText) return textMatch;
        }),
      ]);
    },
    [tasksData]
  );

  console.log(tasksData, tasksView);

  const value = React.useMemo<TaskContextValues>(
    () => ({
      tasksData,
      tasksView,
      statuses: STATUSES,
      isLoading,

      addTask,
      updateTask,
      deleteTask,
      filterTasks,
    }),
    [
      tasksData,
      tasksView,
      addTask,
      updateTask,
      deleteTask,
      filterTasks,
      isLoading,
    ]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
