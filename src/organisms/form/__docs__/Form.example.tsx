import { ChopLogicFormData, ChopLogicFormProps, SelectValue } from '@models';
import { ChopLogicCheckbox, ChopLogicTextInput, MultiSelect, NumericInput, Select } from '@molecules';
import { ChopLogicForm } from '@organisms';
import styles from '@styles/storybook/Container.module.scss';
import { CSSProperties, FC, useState } from 'react';

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

const inputStyles: CSSProperties = {
  width: '300px',
};

export const FormExample: FC<ChopLogicFormProps> = ({ columns, hasReset }) => {
  const [data, setData] = useState<ChopLogicFormData>();

  const initialValues = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
  };

  return (
    <div>
      <ChopLogicForm
        columns={columns}
        hasReset={hasReset}
        initialValues={initialValues}
        onReset={() => setData(undefined)}
        onClickSubmit={(data) => setData(data)}
      >
        <ChopLogicTextInput
          name='firstName'
          label='First Name'
          errorMessage='Only latin letters are allowed'
          validator={{ regexp: '^[A-Za-z ]+$' }}
          style={inputStyles}
        />
        <ChopLogicTextInput
          name='lastName'
          label='Last Name'
          errorMessage='Only latin letters are allowed'
          validator={{ regexp: '^[A-Za-z ]+$' }}
          style={inputStyles}
        />
        <NumericInput
          name='age'
          label='Age'
          validator={(age) => !!age && age >= 1 && age < 100}
          errorMessage={'Enter a number between 1 and 99'}
          style={inputStyles}
        />
        <Select name='language' label='Language' options={SELECT_LANGUAGES} style={inputStyles} />
        <MultiSelect name='programmingLanguages' label='Programming Languages' options={MULTI_SELECT_VALUES} style={inputStyles} />
        <ChopLogicCheckbox name='isTermsAccepted' label='Accept Terms and Conditions' required style={inputStyles} />
      </ChopLogicForm>
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
