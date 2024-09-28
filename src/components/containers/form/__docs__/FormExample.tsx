import { useState } from 'react';

import { ChopLogicCheckbox, ChopLogicNumericInput, ChopLogicTextInput } from 'components/index';
import ChopLogicMultiSelect from 'components/inputs/multi-select/MultiSelect';
import ChopLogicSelect, { SelectValue } from 'components/inputs/select/Select';

import ChopLogicForm, { ChopLogicFormProps } from '../Form';
import { ChopLogicFormData } from '../FormContext';

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

const FormExample: React.FC<ChopLogicFormProps> = ({ columns }) => {
  const [data, setData] = useState<ChopLogicFormData>();

  const initialValues = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: '2rem',
      }}
    >
      <ChopLogicForm
        columns={columns}
        initialValues={initialValues}
        onReset={() => setData(undefined)}
        onClickSubmit={(data) => setData(data)}
      >
        <ChopLogicTextInput
          name='firstName'
          label='First Name'
          errorMessage='Only latin letters are allowed'
          validator={{ regexp: '^[A-Za-z ]+$' }}
        />
        <ChopLogicTextInput
          name='lastName'
          label='Last Name'
          errorMessage='Only latin letters are allowed'
          validator={{ regexp: '^[A-Za-z ]+$' }}
        />
        <ChopLogicNumericInput
          name='age'
          label='Age'
          validator={(age) => !!age && age >= 1 && age < 100}
          errorMessage={'Enter a number between 1 and 99'}
        />
        <ChopLogicSelect name='language' label='Language' options={SELECT_LANGUAGES} />
        <ChopLogicMultiSelect name='programmingLanguages' label='Programming Languages' options={MULTI_SELECT_VALUES} />
        <ChopLogicCheckbox name='isTermsAccepted' label='Accept Terms and Conditions' required />
      </ChopLogicForm>
      {data && (
        <table style={{ marginTop: '2rem', fontFamily: 'Arial', textAlign: 'left' }}>
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
      )}
    </div>
  );
};

export default FormExample;
