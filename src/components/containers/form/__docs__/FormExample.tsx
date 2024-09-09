import { useState } from 'react';

import { ChopLogicCheckbox, ChopLogicNumericInput, ChopLogicTextInput } from 'components/index';
import ChopLogicMultiSelect from 'components/inputs/multi-select/MultiSelect';
import ChopLogicSelect, { SelectValue } from 'components/inputs/select/Select';

import { ChopLogicFormData } from '../elements/FormContext';
import ChopLogicForm, { ChopLogicFormProps } from '../Form';

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
    age: 33,
    language: SELECT_LANGUAGES[1].id,
    programmingLanguages: ['pr-lang-1', 'pr-lang-3'],
    isTermsAccepted: true,
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
        <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
        <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
        <ChopLogicNumericInput name='age' id='age' label='Age' />
        <ChopLogicSelect name='language' id='language' label='Language' options={SELECT_LANGUAGES} />
        <ChopLogicMultiSelect
          name='programmingLanguages'
          id='programming-languages'
          label='Programming Languages'
          options={MULTI_SELECT_VALUES}
        />
        <ChopLogicCheckbox name='isTermsAccepted' id='terms' label='Accept Terms and Conditions' />
        <input type='text' name='test2' placeholder='test2 value' />
        <input type='tel' name='test3' placeholder='test3 value' />
        <label>
          Check me <input type='checkbox' name='test4' />
        </label>
      </ChopLogicForm>
      {data && (
        <ul style={{ listStyle: 'none' }}>
          {Object.entries(data).map((item) => {
            return (
              <li key={item[0]}>
                <strong>{item[0]}: </strong>
                <span>{item[1]?.toString()}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FormExample;
