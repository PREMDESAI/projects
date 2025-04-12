export type TaskStatus = 'todo' | 'in_progress' | 'in_review' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
}

export interface TaskContextValues {
  isLoading: boolean;
  // Data Layer
  tasksData: Task[];
  // View Layer
  tasksView: Task[];
  statuses: TaskStatus[];

  addTask: (task: Omit<Task, 'id'>) => Promise<void>;
  updateTask: (id: Task['id'], updateTask: Omit<Task, 'id'>) => Promise<void>;
  deleteTask: (id: Task['id']) => Promise<void>;
  filterTasks: (parameters: { text?: string; taskStatus?: TaskStatus }) => void;
}
