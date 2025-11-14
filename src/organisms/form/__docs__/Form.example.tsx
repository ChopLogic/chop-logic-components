import type { FormProps, FormValues, SelectValue } from '@models';
import { Checkbox, MultiSelect, NumericInput, Select, Switch, TextInput } from '@molecules';
import { Form } from '@organisms';
import styles from '@styles/storybook/Container.module.scss';
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

export const FormExample: FC<FormProps> = (props) => {
  const [data, setData] = useState<FormValues>();

  const initialValues = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
    isSubscribed: true,
  };

  return (
    <div>
      <Form
        {...props}
        initialValues={initialValues}
        onReset={() => setData(undefined)}
        onClickSubmit={(data) => setData(data)}
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
          validator={{ regexp: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$` }}
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
        <div className={styles.container} style={{ marginTop: '2rem' }}>
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
