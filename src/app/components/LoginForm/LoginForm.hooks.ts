import { useForm } from 'react-hook-form';

export interface LoginFormValues {
  email: string;
  password: string;
}

const UseLoginFormHooks = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log('Login Data:', data);
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
  };
};

export default UseLoginFormHooks;
