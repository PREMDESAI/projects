import { render } from '@testing-library/react';
import { Theme } from '@radix-ui/themes';
import { describe, it } from 'vitest';

import { Filter } from './Filter';

describe('Filter', () => {
  it('renders', async () => {
    const { container } = render(
      <Theme>
        <Filter />
      </Theme>
    );
    expect(container).toMatchSnapshot();
  });
});
