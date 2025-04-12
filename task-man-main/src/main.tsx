import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';

import { App } from './App';

import '@radix-ui/themes/styles.css';
import './index.css';
import { TasksProvider } from './hooks/use-tasks';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TaskDialog } from './components/task-dialog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/new/:status?',
        element: <TaskDialog />,
      },
      {
        path: '/tasks/:id',
        element: <TaskDialog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <TasksProvider>
        <RouterProvider router={router} />
      </TasksProvider>
    </Theme>
  </React.StrictMode>
);
