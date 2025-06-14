import ChopLogicLoader from './Loader.tsx';
import { ChopLogicLoaderView } from '@enums';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ChopLogicLoader', () => {
  const testProps = {
    id: 'loader-id',
    className: 'loader-class',
    style: { color: 'red' },
    tabIndex: 0,
    title: 'Test loader',
  };

  it('Arrow should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Arrow} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Dots should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Dots} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Circle should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Circle} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Brackets should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Brackets} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Linear should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Linear} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Pulse should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Pulse} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Square should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Square} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Rotation should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Rotation} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Filler should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicLoader view={ChopLogicLoaderView.Filler} {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
