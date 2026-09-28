import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { RadioGroupOption } from '@types';
import { describe, expect, it, vi } from 'vitest';

import RadioGroup from '../RadioGroup';

const testProps = {
  id: 'test-radio-group-id',
  name: 'radio-group',
  label: 'Test label',
};

const singleOption: RadioGroupOption[] = [{ value: 'a', label: 'Option A' }];

const multipleOptions: RadioGroupOption[] = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
];

describe('RadioGroup rendering', () => {
  describe('options array', () => {
    it('should render an empty radiogroup when options is an empty array', () => {
      render(<RadioGroup {...testProps} options={[]} />);
      const group = screen.getByRole('radiogroup');
      expect(group).toBeInTheDocument();
      expect(screen.queryAllByRole('radio')).toHaveLength(0);
    });

    it('should render a single option', () => {
      render(<RadioGroup {...testProps} options={singleOption} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getAllByRole('radio')).toHaveLength(1);
      expect(screen.getByText('Option A')).toBeInTheDocument();
    });

    it('should render multiple options with their labels', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      expect(screen.getAllByRole('radio')).toHaveLength(3);
      expect(screen.getByText('Option A')).toBeInTheDocument();
      expect(screen.getByText('Option B')).toBeInTheDocument();
      expect(screen.getByText('Option C')).toBeInTheDocument();
    });
  });

  describe('mode switching', () => {
    it('should render options when stateless is true', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} stateless value="a" />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });

    it('should reflect the value prop as the selected option when stateless is true', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} stateless value="b" />);
      expect(screen.getByRole('radio', { name: 'Option B' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option A' })).not.toBeChecked();
    });

    it('should render options when stateless is false', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} stateless={false} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });

    it('should reflect the defaultValue as the selected option when stateless is false', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="c" />);
      expect(screen.getByRole('radio', { name: 'Option C' })).toBeChecked();
    });

    it('should render options when stateless is undefined (defaults to stateful)', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });
  });

  describe('default values', () => {
    it('should select the option matching defaultValue', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="b" />);
      expect(screen.getByRole('radio', { name: 'Option B' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option A' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option C' })).not.toBeChecked();
    });

    it('should select no option when defaultValue does not match any option', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="does-not-exist" />);
      for (const radio of screen.getAllByRole('radio')) {
        expect(radio).not.toBeChecked();
      }
    });

    it('should select no option when defaultValue is undefined', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      for (const radio of screen.getAllByRole('radio')) {
        expect(radio).not.toBeChecked();
      }
    });
  });

  describe('orientation', () => {
    it('should render vertically by default without the horizontal modifier', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      const group = screen.getByRole('radiogroup');
      expect(group).not.toHaveClass('cl-radio-group_horizontal');
      expect(group).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('should apply the horizontal modifier and aria-orientation when orientation is horizontal', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} orientation="horizontal" />);
      const group = screen.getByRole('radiogroup');
      expect(group).toHaveClass('cl-radio-group_horizontal');
      expect(group).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('should set aria-orientation to vertical when orientation is vertical', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} orientation="vertical" />);
      const group = screen.getByRole('radiogroup');
      expect(group).toHaveAttribute('aria-orientation', 'vertical');
      expect(group).not.toHaveClass('cl-radio-group_horizontal');
    });
  });
});

describe('RadioGroup state management', () => {
  describe('stateful mode', () => {
    it('should maintain internal selection state after a click', async () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);

      const optionB = screen.getByRole('radio', { name: 'Option B' });
      expect(optionB).not.toBeChecked();

      await userEvent.click(optionB);

      expect(optionB).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option A' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option C' })).not.toBeChecked();
    });

    it('should update the selection when a different option is clicked', async () => {
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="a" />);

      const optionA = screen.getByRole('radio', { name: 'Option A' });
      const optionC = screen.getByRole('radio', { name: 'Option C' });
      expect(optionA).toBeChecked();

      await userEvent.click(optionC);

      expect(optionC).toBeChecked();
      expect(optionA).not.toBeChecked();
    });
  });

  describe('stateless mode', () => {
    it('should reflect the provided value prop as the selected option', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} stateless value="b" />);

      expect(screen.getByRole('radio', { name: 'Option B' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option A' })).not.toBeChecked();
    });

    it('should not update internal state on click in stateless mode', async () => {
      render(
        <RadioGroup
          {...testProps}
          options={multipleOptions}
          stateless
          value="a"
          onChange={vi.fn()}
        />,
      );

      const optionB = screen.getByRole('radio', { name: 'Option B' });
      await userEvent.click(optionB);

      // Selection is driven by the value prop, not internal state.
      expect(optionB).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option A' })).toBeChecked();
    });

    it('should update the displayed selection when the value prop changes via re-render', () => {
      const { rerender } = render(
        <RadioGroup
          {...testProps}
          options={multipleOptions}
          stateless
          value="a"
          onChange={vi.fn()}
        />,
      );

      expect(screen.getByRole('radio', { name: 'Option A' })).toBeChecked();

      rerender(
        <RadioGroup
          {...testProps}
          options={multipleOptions}
          stateless
          value="c"
          onChange={vi.fn()}
        />,
      );

      expect(screen.getByRole('radio', { name: 'Option C' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option A' })).not.toBeChecked();
    });
  });

  describe('onChange callback', () => {
    it('should invoke onChange with the selected value on click in stateful mode', async () => {
      const handleChange = vi.fn();
      render(<RadioGroup {...testProps} options={multipleOptions} onChange={handleChange} />);

      await userEvent.click(screen.getByRole('radio', { name: 'Option B' }));

      expect(handleChange).toHaveBeenCalledOnce();
      expect(handleChange).toHaveBeenCalledWith('b');
    });

    it('should invoke onChange with the selected value on click in stateless mode', async () => {
      const handleChange = vi.fn();
      render(
        <RadioGroup
          {...testProps}
          options={multipleOptions}
          stateless
          value="a"
          onChange={handleChange}
        />,
      );

      await userEvent.click(screen.getByRole('radio', { name: 'Option C' }));

      expect(handleChange).toHaveBeenCalledOnce();
      expect(handleChange).toHaveBeenCalledWith('c');
    });
  });
});

describe('RadioGroup disabled and loading states', () => {
  describe('disabled group', () => {
    it('should mark every option input as disabled when the group is disabled', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} disabled />);

      for (const radio of screen.getAllByRole('radio')) {
        expect(radio).toBeDisabled();
      }
    });

    it('should apply the disabled modifier class to the group', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} disabled />);

      expect(screen.getByRole('radiogroup')).toHaveClass('cl-radio-group_disabled');
    });

    it('should not select an option when a disabled group is clicked', async () => {
      render(<RadioGroup {...testProps} options={multipleOptions} disabled />);

      const optionB = screen.getByRole('radio', { name: 'Option B' });
      await userEvent.click(optionB);

      expect(optionB).not.toBeChecked();
    });

    it('should not invoke onChange when a disabled group is clicked', async () => {
      const handleChange = vi.fn();
      render(
        <RadioGroup {...testProps} options={multipleOptions} disabled onChange={handleChange} />,
      );

      await userEvent.click(screen.getByRole('radio', { name: 'Option B' }));

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('individual disabled options', () => {
    const optionsWithDisabled: RadioGroupOption[] = [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B', disabled: true },
      { value: 'c', label: 'Option C' },
    ];

    it('should disable only the individually disabled option', () => {
      render(<RadioGroup {...testProps} options={optionsWithDisabled} />);

      expect(screen.getByRole('radio', { name: 'Option B' })).toBeDisabled();
      expect(screen.getByRole('radio', { name: 'Option A' })).toBeEnabled();
      expect(screen.getByRole('radio', { name: 'Option C' })).toBeEnabled();
    });

    it('should not select a disabled option and not invoke onChange when it is clicked', async () => {
      const handleChange = vi.fn();
      render(<RadioGroup {...testProps} options={optionsWithDisabled} onChange={handleChange} />);

      const optionB = screen.getByRole('radio', { name: 'Option B' });
      await userEvent.click(optionB);

      expect(optionB).not.toBeChecked();
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('should still allow enabled options to be selected when another option is disabled', async () => {
      const handleChange = vi.fn();
      render(<RadioGroup {...testProps} options={optionsWithDisabled} onChange={handleChange} />);

      const optionC = screen.getByRole('radio', { name: 'Option C' });
      await userEvent.click(optionC);

      expect(optionC).toBeChecked();
      expect(handleChange).toHaveBeenCalledOnce();
      expect(handleChange).toHaveBeenCalledWith('c');
    });
  });

  describe('keyboard navigation skips disabled options', () => {
    const optionsWithMiddleDisabled: RadioGroupOption[] = [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B', disabled: true },
      { value: 'c', label: 'Option C' },
    ];

    it('should skip a disabled option when navigating forward with ArrowDown', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={optionsWithMiddleDisabled} defaultValue="a" />);

      const optionA = screen.getByRole('radio', { name: 'Option A' });
      const optionC = screen.getByRole('radio', { name: 'Option C' });

      optionA.focus();
      expect(optionA).toHaveFocus();

      await user.keyboard('{ArrowDown}');

      // Option B is disabled, so focus should land on Option C.
      expect(optionC).toHaveFocus();
    });

    it('should skip a disabled option when navigating backward with ArrowUp', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={optionsWithMiddleDisabled} defaultValue="c" />);

      const optionA = screen.getByRole('radio', { name: 'Option A' });
      const optionC = screen.getByRole('radio', { name: 'Option C' });

      optionC.focus();
      expect(optionC).toHaveFocus();

      await user.keyboard('{ArrowUp}');

      // Option B is disabled, so focus should wrap/skip to Option A.
      expect(optionA).toHaveFocus();
    });
  });

  describe('loading state', () => {
    it('should set aria-busy on the group when loading', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} isLoading />);

      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-busy', 'true');
    });

    it('should apply the loading modifier class to the group', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} isLoading />);

      expect(screen.getByRole('radiogroup')).toHaveClass('cl-radio-group_loading');
    });

    it('should remove every option from the tab order while loading', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} isLoading />);

      for (const radio of screen.getAllByRole('radio')) {
        expect(radio).toHaveAttribute('tabindex', '-1');
      }
    });

    it('should disable every option input while loading', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} isLoading />);

      for (const radio of screen.getAllByRole('radio')) {
        expect(radio).toBeDisabled();
      }
    });

    it('should not select an option and not invoke onChange when clicked while loading', async () => {
      const handleChange = vi.fn();
      render(
        <RadioGroup {...testProps} options={multipleOptions} isLoading onChange={handleChange} />,
      );

      const optionB = screen.getByRole('radio', { name: 'Option B' });
      await userEvent.click(optionB);

      expect(optionB).not.toBeChecked();
      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});
describe('RadioGroup keyboard navigation', () => {
  describe('arrow key focus movement', () => {
    it('should move focus to the next option with ArrowDown', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="a" />);

      const optionA = screen.getByRole('radio', { name: 'Option A' });
      const optionB = screen.getByRole('radio', { name: 'Option B' });

      optionA.focus();
      expect(optionA).toHaveFocus();

      await user.keyboard('{ArrowDown}');

      expect(optionB).toHaveFocus();
    });

    it('should move focus to the next option with ArrowRight', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="a" />);

      const optionA = screen.getByRole('radio', { name: 'Option A' });
      const optionB = screen.getByRole('radio', { name: 'Option B' });

      optionA.focus();
      await user.keyboard('{ArrowRight}');

      expect(optionB).toHaveFocus();
    });

    it('should move focus to the previous option with ArrowUp', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="b" />);

      const optionB = screen.getByRole('radio', { name: 'Option B' });
      const optionA = screen.getByRole('radio', { name: 'Option A' });

      optionB.focus();
      expect(optionB).toHaveFocus();

      await user.keyboard('{ArrowUp}');

      expect(optionA).toHaveFocus();
    });

    it('should move focus to the previous option with ArrowLeft', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="b" />);

      const optionB = screen.getByRole('radio', { name: 'Option B' });
      const optionA = screen.getByRole('radio', { name: 'Option A' });

      optionB.focus();
      await user.keyboard('{ArrowLeft}');

      expect(optionA).toHaveFocus();
    });

    it('should wrap to the first option when ArrowDown is pressed on the last option', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="c" />);

      const optionC = screen.getByRole('radio', { name: 'Option C' });
      const optionA = screen.getByRole('radio', { name: 'Option A' });

      optionC.focus();
      expect(optionC).toHaveFocus();

      await user.keyboard('{ArrowDown}');

      expect(optionA).toHaveFocus();
    });

    it('should wrap to the last option when ArrowUp is pressed on the first option', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="a" />);

      const optionA = screen.getByRole('radio', { name: 'Option A' });
      const optionC = screen.getByRole('radio', { name: 'Option C' });

      optionA.focus();
      expect(optionA).toHaveFocus();

      await user.keyboard('{ArrowUp}');

      expect(optionC).toHaveFocus();
    });

    it('should keep focus on the single option when navigating a single-option group', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={singleOption} defaultValue="a" />);

      const optionA = screen.getByRole('radio', { name: 'Option A' });

      optionA.focus();
      await user.keyboard('{ArrowDown}');

      expect(optionA).toHaveFocus();
    });
  });

  describe('Space key selection', () => {
    it('should select the focused option and invoke onChange when Space is pressed', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={multipleOptions} onChange={handleChange} />);

      const optionB = screen.getByRole('radio', { name: 'Option B' });

      optionB.focus();
      await user.keyboard(' ');

      expect(handleChange).toHaveBeenCalledOnce();
      expect(handleChange).toHaveBeenCalledWith('b');
      expect(optionB).toBeChecked();
    });

    it('should select the focused option in stateless mode and invoke onChange with its value', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(
        <RadioGroup
          {...testProps}
          options={multipleOptions}
          stateless
          value="a"
          onChange={handleChange}
        />,
      );

      const optionC = screen.getByRole('radio', { name: 'Option C' });

      optionC.focus();
      await user.keyboard(' ');

      expect(handleChange).toHaveBeenCalledOnce();
      expect(handleChange).toHaveBeenCalledWith('c');
    });

    it('should not invoke onChange when Space is pressed on the already selected option', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(
        <RadioGroup
          {...testProps}
          options={multipleOptions}
          defaultValue="b"
          onChange={handleChange}
        />,
      );

      const optionB = screen.getByRole('radio', { name: 'Option B' });

      optionB.focus();
      await user.keyboard(' ');

      expect(handleChange).not.toHaveBeenCalled();
      expect(optionB).toBeChecked();
    });

    it('should navigate with an arrow key and then select the newly focused option with Space', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      render(
        <RadioGroup
          {...testProps}
          options={multipleOptions}
          defaultValue="a"
          onChange={handleChange}
        />,
      );

      const optionA = screen.getByRole('radio', { name: 'Option A' });
      const optionB = screen.getByRole('radio', { name: 'Option B' });

      optionA.focus();
      await user.keyboard('{ArrowDown}');
      expect(optionB).toHaveFocus();

      await user.keyboard(' ');

      expect(handleChange).toHaveBeenCalledOnce();
      expect(handleChange).toHaveBeenCalledWith('b');
      expect(optionB).toBeChecked();
    });
  });

  describe('roving tabindex / Tab behavior', () => {
    it('should make only the selected option tabbable when an option is selected', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="b" />);

      expect(screen.getByRole('radio', { name: 'Option A' })).toHaveAttribute('tabindex', '-1');
      expect(screen.getByRole('radio', { name: 'Option B' })).toHaveAttribute('tabindex', '0');
      expect(screen.getByRole('radio', { name: 'Option C' })).toHaveAttribute('tabindex', '-1');
    });

    it('should make only the first enabled option tabbable when no option is selected', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);

      expect(screen.getByRole('radio', { name: 'Option A' })).toHaveAttribute('tabindex', '0');
      expect(screen.getByRole('radio', { name: 'Option B' })).toHaveAttribute('tabindex', '-1');
      expect(screen.getByRole('radio', { name: 'Option C' })).toHaveAttribute('tabindex', '-1');
    });

    it('should make the first enabled option tabbable when the first option is disabled and nothing is selected', () => {
      const optionsWithFirstDisabled: RadioGroupOption[] = [
        { value: 'a', label: 'Option A', disabled: true },
        { value: 'b', label: 'Option B' },
        { value: 'c', label: 'Option C' },
      ];
      render(<RadioGroup {...testProps} options={optionsWithFirstDisabled} />);

      expect(screen.getByRole('radio', { name: 'Option A' })).toHaveAttribute('tabindex', '-1');
      expect(screen.getByRole('radio', { name: 'Option B' })).toHaveAttribute('tabindex', '0');
      expect(screen.getByRole('radio', { name: 'Option C' })).toHaveAttribute('tabindex', '-1');
    });

    it('should keep exactly one option tabbable so Tab enters and exits the group as a single stop', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="c" />);

      const tabbable = screen
        .getAllByRole('radio')
        .filter((radio) => radio.getAttribute('tabindex') === '0');

      expect(tabbable).toHaveLength(1);
      expect(tabbable[0]).toHaveAccessibleName('Option C');
    });

    it('should place focus on the tabbable option when Tab moves into the group', async () => {
      const user = userEvent.setup();
      render(<RadioGroup {...testProps} options={multipleOptions} defaultValue="b" />);

      const optionB = screen.getByRole('radio', { name: 'Option B' });

      await user.tab();

      expect(optionB).toHaveFocus();
    });
  });
});

describe('RadioGroup accessibility', () => {
  describe('radiogroup container role and labelling', () => {
    it('should expose role="radiogroup" on the container', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('should set aria-label on the radiogroup to match the label prop', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} label="Choose one" />);
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-label', 'Choose one');
      expect(screen.getByRole('radiogroup', { name: 'Choose one' })).toBeInTheDocument();
    });
  });

  describe('radio role and selection state', () => {
    it('should expose role="radio" on every option input', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      expect(screen.getAllByRole('radio')).toHaveLength(multipleOptions.length);
    });

    it('should reflect the selected option as checked and others as not checked', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} stateless value="b" />);

      expect(screen.getByRole('radio', { name: 'Option B' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option A' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option C' })).not.toBeChecked();
    });

    it('should convey checked selection state only on the selected radio', () => {
      // Native radio inputs expose their selection to assistive technology
      // through the checked property (toBeChecked reads the ARIA-equivalent
      // checked state), not a literal aria-checked attribute.
      render(<RadioGroup {...testProps} options={multipleOptions} stateless value="c" />);

      expect(screen.getByRole('radio', { name: 'Option C', checked: true })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option A' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'Option B' })).not.toBeChecked();
    });

    it('should convey no radio as checked when no option is selected', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);

      expect(screen.queryByRole('radio', { checked: true })).not.toBeInTheDocument();
      for (const radio of screen.getAllByRole('radio')) {
        expect(radio).not.toBeChecked();
      }
    });
  });

  describe('aria-orientation matches layout', () => {
    it('should set aria-orientation to vertical for vertical layout', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} orientation="vertical" />);
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('should set aria-orientation to horizontal for horizontal layout', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} orientation="horizontal" />);
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('should default aria-orientation to vertical when orientation is not provided', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'vertical');
    });
  });

  describe('aria-required and aria-busy', () => {
    it('should set aria-required on the radiogroup when required is true', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} required />);
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-required', 'true');
    });

    it('should not set aria-required to true when required is not provided', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      expect(screen.getByRole('radiogroup')).not.toHaveAttribute('aria-required', 'true');
    });

    it('should set aria-busy on the radiogroup when loading', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} isLoading />);
      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-busy', 'true');
    });

    it('should not set aria-busy to true when not loading', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);
      expect(screen.getByRole('radiogroup')).not.toHaveAttribute('aria-busy', 'true');
    });
  });

  describe('name grouping and label association', () => {
    it('should give every option input the same name attribute for grouping', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} name="my-radio-group" />);

      for (const radio of screen.getAllByRole('radio')) {
        expect(radio).toHaveAttribute('name', 'my-radio-group');
      }
    });

    it('should give each option input a unique id', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);

      const ids = screen.getAllByRole('radio').map((radio) => radio.getAttribute('id'));
      expect(ids.every((id) => typeof id === 'string' && id.length > 0)).toBe(true);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('should associate each option label with its input via matching htmlFor and id', () => {
      render(<RadioGroup {...testProps} options={multipleOptions} />);

      for (const option of multipleOptions) {
        const radio = screen.getByRole('radio', { name: option.label });
        const label = screen.getByText(option.label).closest('label');

        expect(label).not.toBeNull();
        expect(radio.getAttribute('id')).toBe(label?.getAttribute('for'));
      }
    });
  });
});
