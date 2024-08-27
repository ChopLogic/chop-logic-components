import { ChopLogicCheckbox, ChopLogicNumericInput, ChopLogicTextInput } from 'components/index';
import ChopLogicSelect, { SelectValue } from 'components/inputs/select/Select';

import ChopLogicForm, { ChopLogicFormProps } from '../Form';

const SELECT_LANGUAGES: SelectValue[] = [
  { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English' },
  { id: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7', label: 'Russian' },
  { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German' },
];

const FormExample: React.FC<ChopLogicFormProps> = ({ columns, hasReset }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      paddingTop: '2rem',
    }}
  >
    <ChopLogicForm columns={columns} hasReset={hasReset}>
      <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
      <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
      <ChopLogicNumericInput name='age' id='age' label='Age' />
      <ChopLogicSelect name='language' id='language' label='Language' values={SELECT_LANGUAGES} />
      <ChopLogicCheckbox name='terms' id='terms' label='Accept Terms and Conditions' />
    </ChopLogicForm>
  </div>
);

export default FormExample;
