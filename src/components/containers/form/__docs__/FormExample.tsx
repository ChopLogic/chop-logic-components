import { ChopLogicNumericInput, ChopLogicTextInput } from 'components/index';

import ChopLogicForm from '../Form';

const FormExample = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    <ChopLogicForm>
      <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
      <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
      <ChopLogicNumericInput name='age' id='age' label='Age' />
    </ChopLogicForm>
  </div>
);

export default FormExample;
