import { Flex } from '@radix-ui/themes';
import { Outlet } from 'react-router-dom';

import { Header } from './components/header';
import { KanbanBoard } from './components/kanban-board';
import { Filter } from './components/filter';

export const App = () => {
  return (
    <Flex direction='column' align='center' style={{ padding: '0 28px' }}>
      <Header />
      <Filter />
      <KanbanBoard>
        <KanbanBoard.Panels />
      </KanbanBoard>
      <Outlet />
    </Flex>
  );
};
