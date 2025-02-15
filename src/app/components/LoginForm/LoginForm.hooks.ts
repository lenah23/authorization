import { useForm } from 'react-hook-form';
import { LoginFormValues, MutationTrigger } from '@/app/store/interfaces';

interface IProps {
  loginReq: MutationTrigger;
}

const UseLoginFormHooks = ({ loginReq }: IProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    const payload = {
      email: data?.email?.trim(),
      password: data?.password?.trim(),
    };
    loginReq(payload);
  };

  return {
    errors,
    control,
    isSubmitting,
    handleSubmit,
    onSubmit,
  };
};

export default UseLoginFormHooks;
