import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';

import { TaskDialog } from './TaskDialog';

describe('TaskDialog', () => {
  it('renders', async () => {
    render(
      <MemoryRouter>
        <TaskDialog />
      </MemoryRouter>
    );

    const dialog = screen.queryByRole('dialog');
    await waitFor(() => expect(dialog).toBeVisible());
    expect(dialog).toMatchSnapshot();
  });

  it('does not let user submit the form unless title is provided', async () => {
    render(
      <MemoryRouter>
        <TaskDialog />
      </MemoryRouter>
    );

    const dialog = screen.queryByRole('dialog');
    await waitFor(() => expect(dialog).toBeVisible());

    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();

    await userEvent.type(
      screen.getByRole('textbox', { name: 'Task Title' }),
      'New Task'
    );

    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled();
  });
});
