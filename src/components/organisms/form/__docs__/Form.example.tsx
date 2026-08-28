import '@__docs__/styles/Container.css';
import {
  Checkbox,
  MultiSelect,
  NumericInput,
  Select,
  Switch,
  TextInput,
} from '@components/molecules';
import { Form } from '@components/organisms';
import type { FormProps, FormValues, SelectValue } from '@types';
import { type FC, useState } from 'react';

const SELECT_LANGUAGES: SelectValue[] = [
  { id: 'lang-1', label: 'English' },
  { id: 'lang-2', label: 'Russian' },
  { id: 'lang-3', label: 'German' },
];

const MULTI_SELECT_VALUES: SelectValue[] = [
  { id: 'pr-lang-1', label: 'JavaScript' },
  { id: 'pr-lang-2', label: 'Python' },
  { id: 'pr-lang-3', label: 'Java' },
  { id: 'pr-lang-4', label: 'C#' },
];

/**
 * Controlled flow example using onSubmit with FormValues.
 */
export const FormExample: FC<FormProps> = (props) => {
  const [data, setData] = useState<FormValues>();

  const initialValues = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
    isSubscribed: true,
  };

  const handleSubmit = async (values: FormValues) => {
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setData(values);
  };

  return (
    <div>
      <Form
        {...props}
        initialValues={initialValues}
        onReset={() => setData(undefined)}
        onSubmit={handleSubmit}
      >
        <TextInput
          name="firstName"
          label="First Name"
          errorMessage="Only latin letters are allowed"
          validator={{ regexp: '^[A-Za-z ]+$' }}
        />
        <TextInput
          name="lastName"
          label="Last Name"
          errorMessage="Only latin letters are allowed"
          validator={{ regexp: '^[A-Za-z ]+$' }}
        />
        <TextInput
          placeholder="Enter your email"
          label="Email"
          name="email"
          type="email"
          required
          clearable
          errorMessage="This is not a valid email"
          validator={{ regexp: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$' }}
        />
        <NumericInput
          name="age"
          label="Age"
          validator={(age) => !!age && age >= 1 && age < 100}
          errorMessage={'Enter a number between 1 and 99'}
        />
        <Select name="language" label="Language" options={SELECT_LANGUAGES} />
        <MultiSelect
          name="programmingLanguages"
          label="Programming Languages"
          options={MULTI_SELECT_VALUES}
        />
        <Checkbox name="isTermsAccepted" label="Accept Terms and Conditions" required />
        <Switch name="isSubscribed" label="Subscribe to Newsletter" />
        <Switch name="isAgreedToCollectAnalytics" label="Send Analytics" />
      </Form>
      {data && (
        <div
          className="container"
          style={{ marginTop: '2rem', color: 'var(--cl-base-font-color)' }}
        >
          <table style={{ textAlign: 'left' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map((item) => {
                return (
                  <tr key={item[0]}>
                    <td>{item[0]}</td>
                    <td>{item[1]?.toString()}</td>
                    <td>{typeof item[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

/**
 * Action flow example using React 19 form action with FormData.
 * Demonstrates pending state during async submission.
 */
export const FormWithActionExample: FC = () => {
  const [result, setResult] = useState<string>();

  // biome-ignore lint/suspicious/noConfusingVoidType: matches FormProps<void> default generic
  const formAction = async (_prevState: void, formData: FormData) => {
    // Simulate a 2-second async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    setResult(`Submitted: ${name} (${email})`);
  };

  return (
    <div>
      <Form action={formAction}>
        <TextInput name="name" label="Name" />
        <TextInput
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
          errorMessage="This is not a valid email"
          validator={{ regexp: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$' }}
        />
      </Form>
      {result && (
        <div
          className="container"
          style={{ marginTop: '2rem', color: 'var(--cl-base-font-color)' }}
        >
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

/**
 * Loading state example demonstrating automatic propagation to child components.
 * When the form is pending (during async submission), all nested interactive
 * components automatically receive isLoading=true via FormContext.
 *
 * This example showcases:
 * - TextInput with shimmer animation during loading
 * - NumericInput with shimmer animation during loading
 * - Select with shimmer animation during loading
 * - MultiSelect with shimmer animation during loading
 * - Checkbox with disabled-like appearance during loading
 * - Switch with disabled-like appearance during loading
 * - Submit button with spinning loader icon during loading
 */
export const FormLoadingStateExample: FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // biome-ignore lint/suspicious/noConfusingVoidType: matches FormProps<void> default generic
  const formAction = async (_prevState: void, formData: FormData) => {
    setStatus('submitting');
    // Simulate a 4-second async operation to clearly show loading states
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const name = formData.get('fullName') as string;
    console.log('Submitted:', name);
    setStatus('success');
    // Reset status after showing success
    setTimeout(() => setStatus('idle'), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem', color: 'var(--cl-base-font-color)' }}>
        <strong>Status:</strong> {status === 'idle' && 'Ready to submit'}
        {status === 'submitting' && 'Submitting... (watch all components show loading state)'}
        {status === 'success' && 'Success!'}
      </div>
      <Form action={formAction}>
        <TextInput name="fullName" label="Full Name" placeholder="Enter your full name" />
        <TextInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          required
          errorMessage="Please enter a valid email"
          validator={{ regexp: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$' }}
        />
        <NumericInput
          name="age"
          label="Age"
          validator={(age) => !!age && age >= 18 && age <= 120}
          errorMessage="Age must be between 18 and 120"
        />
        <Select name="country" label="Country" options={SELECT_LANGUAGES} />
        <MultiSelect name="interests" label="Interests" options={MULTI_SELECT_VALUES} />
        <Checkbox name="termsAccepted" label="I accept the Terms and Conditions" required />
        <Switch name="newsletter" label="Subscribe to newsletter" />
      </Form>
    </div>
  );
};
