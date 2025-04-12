import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { KanbanBoard } from './KanbanBoard';
import { TasksProvider } from '@/hooks/use-tasks';
import { MemoryRouter } from 'react-router-dom';

describe('KanbanBoard', () => {
  it('renders', async () => {
    const { container } = render(
      <MemoryRouter>
        <TasksProvider>
          <KanbanBoard>
            <KanbanBoard.Panels />
          </KanbanBoard>
        </TasksProvider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
