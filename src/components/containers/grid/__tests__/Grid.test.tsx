import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ChopLogicGrid from '../Grid';

describe('ChopLogicGrid', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicGrid columns={[]} data={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
