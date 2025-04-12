import { Flex } from '@radix-ui/themes';

import { useTasks } from '@/hooks/use-tasks';
import { KanbanBoardPanels } from './KanbanBoardPanels';
import { styled } from '@stitches/react';

const StyledContainer = styled(Flex, {
  marginBottom: '32px',
  width: '100%',
  overflowX: 'auto',
  transition: '1s',
  variants: {
    isLoading: {
      true: {
        opacity: '0.5',
        pointerEvents: 'none',
      },
    },
  },
});

export const KanbanBoard: React.FC<React.PropsWithChildren> & {
  Panels: typeof KanbanBoardPanels;
} = ({ children }) => {
  const { isLoading } = useTasks();

  return (
    <StyledContainer direction='row' gap='5' isLoading={isLoading}>
      {children}
    </StyledContainer>
  );
};

KanbanBoard.Panels = KanbanBoardPanels;
