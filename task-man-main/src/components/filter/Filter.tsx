import { getStatusText } from '@/helpers';
import { TaskStatus, useTasks } from '@/hooks/use-tasks';
import { Flex, Select, TextField } from '@radix-ui/themes';
import React from 'react';

export const Filter: React.FC = () => {
  const { filterTasks, statuses } = useTasks();
  const [filterText, setFilterText] = React.useState<string>();
  const [filterStatus, setFilterStatus] = React.useState<string>();

  React.useEffect(() => {
    const status = (
      filterStatus
        ? filterStatus === 'all'
          ? undefined
          : filterStatus
        : undefined
    ) as TaskStatus | undefined;

    filterTasks({ text: filterText, taskStatus: status });
  }, [filterText, filterStatus]);

  return (
    <Flex direction='row' gap='1' style={{ padding: '12px 0', width: '100%' }}>
      <TextField.Root
        placeholder='Filter tasks...'
        onChange={(event) => setFilterText(event.target.value)}
        style={{ minWidth: '158px', maxWidth: '158px' }}
      />
      <Select.Root
        defaultValue='all'
        onValueChange={(value) => setFilterStatus(value as TaskStatus)}
      >
        <Select.Trigger style={{ width: '158px' }} />
        <Select.Content>
          <Select.Item value='all'>ALL</Select.Item>
          {statuses.map((status) => (
            <Select.Item value={status} key={`filter-status-${status}`}>
              {getStatusText(status)}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};
