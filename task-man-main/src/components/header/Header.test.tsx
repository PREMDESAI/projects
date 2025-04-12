import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Header } from './Header';

describe('Header', () => {
  it('renders', async () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
