import { ChopLogicCheckbox, ChopLogicNumericInput, ChopLogicTextInput } from 'components/index';
import ChopLogicMultiSelect from 'components/inputs/multi-select/MultiSelect';
import ChopLogicSelect, { SelectValue } from 'components/inputs/select/Select';

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
  const initialValues = {
    firstName: 'John',
    // lastName: 'Doe',
    age: 33,
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: '2rem',
      }}
    >
      <ChopLogicForm columns={columns} initialValues={initialValues}>
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
      </ChopLogicForm>
    </div>
  );
};

export default FormExample;
