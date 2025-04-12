import { useTasks } from '@/hooks/use-tasks';
import { GearIcon } from '@radix-ui/react-icons';
import { Flex, Heading } from '@radix-ui/themes';
import { keyframes, styled } from '@stitches/react';

const spinner = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(45deg)' },
});

const LoadingIcon = styled(GearIcon, {
  animation: `${spinner} 1s infinite`,
});

export const Header = () => {
  const { isLoading } = useTasks();
  return (
    <Flex
      align='center'
      style={{
        width: '100vw',
        height: '64px',
        padding: '16px 32px',
        background: '#3E63DD',
        color: '#f5f5fa',
        position: 'sticky',
        top: 0,
      }}
    >
      <Heading>TASKMAN</Heading>
      {isLoading && (
        <LoadingIcon width='24' height='24' style={{ marginLeft: '8px' }} />
      )}
    </Flex>
  );
};
