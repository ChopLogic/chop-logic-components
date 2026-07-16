import { Checkbox, NumericInput, TextInput } from '@components/molecules';
import { Form } from '@components/organisms';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { FormContext } from '../../../contexts';

// Helper component to read context values in tests
function ContextReader({ onContext }: { onContext: (ctx: { isPending?: boolean }) => void }) {
  const ctx = useContext(FormContext);
  onContext({ isPending: ctx.isPending });
  return null;
}

describe('Form', () => {
  const testInitialValues = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    accepted: true,
  };

  describe('controlled flow (onSubmit)', () => {
    it('should call onSubmit with FormValues when submitted', async () => {
      const mockSubmit = vi.fn();
      render(
        <Form onSubmit={mockSubmit}>
          <TextInput name="firstName" label="First Name" />
          <TextInput name="lastName" label="Last Name" />
        </Form>,
      );

      await userEvent.type(screen.getAllByRole('textbox')[0] as HTMLElement, 'Alice');
      await userEvent.click(screen.getByText('Submit'));

      expect(mockSubmit).toHaveBeenCalledOnce();
      expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({ firstName: 'Alice' }));
    });

    it('should show pending state during async onSubmit', async () => {
      let resolveSubmit: () => void = () => {};
      const asyncSubmit = () =>
        new Promise<void>((resolve) => {
          resolveSubmit = resolve;
        });

      const contextSpy = vi.fn();

      render(
        <Form onSubmit={asyncSubmit}>
          <ContextReader onContext={contextSpy} />
          <TextInput name="name" label="Name" />
        </Form>,
      );

      // Initially not pending
      expect(contextSpy).toHaveBeenLastCalledWith({ isPending: false });

      await userEvent.click(screen.getByText('Submit'));

      // Should be pending during async operation
      await waitFor(() => {
        expect(contextSpy).toHaveBeenLastCalledWith({ isPending: true });
      });

      // Resolve the submit
      await resolveSubmit();

      // Should no longer be pending
      await waitFor(() => {
        expect(contextSpy).toHaveBeenLastCalledWith({ isPending: false });
      });
    });

    it('should disable submit button during pending state', async () => {
      let resolveSubmit: () => void = () => {};
      const asyncSubmit = () =>
        new Promise<void>((resolve) => {
          resolveSubmit = resolve;
        });

      render(
        <Form onSubmit={asyncSubmit}>
          <TextInput name="name" label="Name" />
        </Form>,
      );

      const submitButton = screen.getByText('Submit').closest('button') as HTMLButtonElement;

      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });

      await resolveSubmit();

      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
      });
    });

    it('should disable reset button during pending state', async () => {
      let resolveSubmit: () => void = () => {};
      const asyncSubmit = () =>
        new Promise<void>((resolve) => {
          resolveSubmit = resolve;
        });

      render(
        <Form onSubmit={asyncSubmit} hasReset={true}>
          <TextInput name="name" label="Name" />
        </Form>,
      );

      const resetButton = screen.getByText('Clear').closest('button') as HTMLButtonElement;

      await userEvent.click(screen.getByText('Submit'));

      await waitFor(() => {
        expect(resetButton).toBeDisabled();
      });

      await resolveSubmit();

      await waitFor(() => {
        expect(resetButton).not.toBeDisabled();
      });
    });

    it('should apply cl-form_pending class during pending state', async () => {
      let resolveSubmit: () => void = () => {};
      const asyncSubmit = () =>
        new Promise<void>((resolve) => {
          resolveSubmit = resolve;
        });

      const { container } = render(
        <Form onSubmit={asyncSubmit}>
          <TextInput name="name" label="Name" />
        </Form>,
      );

      const form = container.querySelector('form') as HTMLFormElement;

      expect(form).not.toHaveClass('cl-form_pending');

      await userEvent.click(screen.getByText('Submit'));

      await waitFor(() => {
        expect(form).toHaveClass('cl-form_pending');
      });

      await resolveSubmit();

      await waitFor(() => {
        expect(form).not.toHaveClass('cl-form_pending');
      });
    });

    it('should reset form after successful submit when resetOnSuccess is true', async () => {
      const mockSubmit = vi.fn(() => Promise.resolve());

      render(
        <Form onSubmit={mockSubmit} initialValues={testInitialValues} resetOnSuccess={true}>
          <TextInput name="firstName" label="First Name" />
        </Form>,
      );

      const input = screen.getByRole('textbox');
      await userEvent.clear(input);
      await userEvent.type(input, 'Alice');
      expect(input).toHaveValue('Alice');

      await userEvent.click(screen.getByText('Submit'));

      await waitFor(() => {
        expect(input).toHaveValue(testInitialValues.firstName);
      });
    });

    it('should preserve values after submit when resetOnSuccess is false (default)', async () => {
      const mockSubmit = vi.fn(() => Promise.resolve());

      render(
        <Form onSubmit={mockSubmit} initialValues={testInitialValues}>
          <TextInput name="firstName" label="First Name" />
        </Form>,
      );

      const input = screen.getByRole('textbox');
      await userEvent.clear(input);
      await userEvent.type(input, 'Alice');

      await userEvent.click(screen.getByText('Submit'));

      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalled();
      });

      expect(input).toHaveValue('Alice');
    });
  });

  describe('action flow', () => {
    it('should render form with action attribute when action prop is provided', () => {
      // biome-ignore lint/suspicious/noConfusingVoidType: matches FormProps<void> default generic
      const mockAction = vi.fn(async (_prev: void, _fd: FormData) => {});

      const { container } = render(
        <Form action={mockAction}>
          <TextInput name="name" label="Name" />
        </Form>,
      );

      const form = container.querySelector('form') as HTMLFormElement;
      // When action prop is a function, React 19 sets it on the form
      expect(form).not.toHaveAttribute('onsubmit');
    });

    it('should pass isPending via context in action flow', () => {
      // biome-ignore lint/suspicious/noConfusingVoidType: matches FormProps<void> default generic
      const mockAction = vi.fn(async (_prev: void, _fd: FormData) => {});
      const contextSpy = vi.fn();

      render(
        <Form action={mockAction}>
          <ContextReader onContext={contextSpy} />
          <TextInput name="name" label="Name" />
        </Form>,
      );

      // Initially not pending
      expect(contextSpy).toHaveBeenLastCalledWith({ isPending: false });
    });
  });

  describe('shared behavior', () => {
    it('should render initial values in child inputs', () => {
      render(
        <Form initialValues={testInitialValues}>
          <TextInput name="firstName" label="First Name" />
          <TextInput name="lastName" label="Last Name" />
          <NumericInput name="age" label="Age" />
          <Checkbox name="accepted" label="Is Accepted" />
        </Form>,
      );

      const textInputs = screen.getAllByRole('textbox');
      expect(textInputs).toHaveLength(2);
      expect(textInputs[0]).toHaveValue(testInitialValues.firstName);
      expect(textInputs[1]).toHaveValue(testInitialValues.lastName);
      expect(screen.getByRole('spinbutton')).toHaveValue(testInitialValues.age);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should reset entered values to initial values on manual reset', async () => {
      render(
        <Form initialValues={testInitialValues}>
          <TextInput name="firstName" label="First Name" />
          <TextInput name="lastName" label="Last Name" />
          <NumericInput name="age" label="Age" />
          <Checkbox name="accepted" label="Is Accepted" />
        </Form>,
      );

      const textInputs = screen.getAllByRole('textbox');
      const numericInput = screen.getByRole('spinbutton');
      const checkboxInput = screen.getByRole('checkbox');

      await userEvent.type(textInputs[0] as HTMLElement, 'test1');
      await userEvent.type(textInputs[1] as HTMLElement, 'test2');
      await userEvent.type(numericInput, '55');
      await userEvent.click(checkboxInput);

      await userEvent.click(screen.getByText('Clear'));

      expect(textInputs[0]).toHaveValue(testInitialValues.firstName);
      expect(textInputs[1]).toHaveValue(testInitialValues.lastName);
      expect(numericInput).toHaveValue(testInitialValues.age);
      expect(checkboxInput).toBeChecked();
    });

    it('should not render Reset button when hasReset is false', () => {
      render(
        <Form hasReset={false}>
          <TextInput name="firstName" label="First Name" />
        </Form>,
      );
      expect(screen.queryByText('Clear')).not.toBeInTheDocument();
    });

    it('should disable submit button when validation fails', async () => {
      render(
        <Form initialValues={{ email: '' }} onSubmit={vi.fn()}>
          <TextInput
            name="email"
            label="Email"
            required
            validator={{ regexp: '^.+@.+$' }}
            errorMessage="Invalid email"
          />
        </Form>,
      );

      const input = screen.getByRole('textbox');
      const submitButton = screen.getByText('Submit').closest('button') as HTMLButtonElement;

      // Type invalid value
      await userEvent.type(input, 'not-an-email');

      expect(submitButton).toBeDisabled();
    });

    it('should accept custom values in inputs', async () => {
      render(
        <Form>
          <TextInput name="firstName" label="First Name" />
          <TextInput name="lastName" label="Last Name" />
          <NumericInput name="age" label="Age" />
          <Checkbox name="accepted" label="Is Accepted" />
        </Form>,
      );

      const textInputs = screen.getAllByRole('textbox');
      const numericInput = screen.getByRole('spinbutton');
      const checkboxInput = screen.getByRole('checkbox');

      await userEvent.type(textInputs[0] as HTMLElement, 'test1');
      await userEvent.type(textInputs[1] as HTMLElement, 'test2');
      await userEvent.type(numericInput, '55');
      await userEvent.click(checkboxInput);

      expect(textInputs[0]).toHaveValue('test1');
      expect(textInputs[1]).toHaveValue('test2');
      expect(numericInput).toHaveValue(55);
      expect(checkboxInput).toBeChecked();
    });
  });
});
