import { useState } from 'react';

type UseChopLogicFormParams = {
  initialState?: { [key in string]: unknown };
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const useChopLogicForm = ({ initialState }: UseChopLogicFormParams) => {
  const [formData, setFormData] = useState(initialState);

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, handleFormInputChange };
};
