import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import { Task } from '@/hooks/use-tasks';
import { TaskCard } from './TaskCard';

const task: Task = {
  id: 'TM-1',
  status: 'todo',
  title: 'Test Task',
  description: 'A fresh task to achieve today',
};

describe('TaskCard', () => {
  it('renders', async () => {
    const { container } = render(
      <MemoryRouter>
        <TaskCard task={task} />
      </MemoryRouter>
    );
    expect(screen.getByText('TM-1')).toBeVisible();
    expect(screen.getByText('Test Task')).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
