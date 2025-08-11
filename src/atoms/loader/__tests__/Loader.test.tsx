import { LoaderView } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ChopLogicLoader from '../Loader.tsx';

describe('ChopLogicLoader', () => {
  const testProps = {
    id: 'loader-id',
    className: 'loader-class',
    style: { color: 'red' },
    tabIndex: 0,
    title: 'Test loader',
  };

  it('should have the correct aria role', () => {
    render(<ChopLogicLoader view={LoaderView.Arrow} {...testProps} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('Arrow should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Arrow} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dots should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Dots} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Circle should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Circle} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Brackets should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Brackets} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Linear should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Linear} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Pulse should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Pulse} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Square should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Square} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Rotation should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Rotation} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Filler should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={LoaderView.Filler} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
