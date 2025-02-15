'use client';
import styles from './LoginForm.module.scss';

import UseLoginFormHooks from './LoginForm.hooks';
import { Input, Button } from '../index';
import { Controller } from 'react-hook-form';

export function LoginForm() {
  const { control, handleSubmit, errors, onSubmit, isSubmitting } =
    UseLoginFormHooks();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
      <Controller
        name='email'
        control={control}
        defaultValue=''
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email format',
          },
        }}
        render={({ field }) => <Input label='Email' type='email' {...field} />}
      />
      {errors.email && (
        <p className={styles['error']}>{errors.email.message}</p>
      )}

      <Controller
        name='password'
        control={control}
        defaultValue=''
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        }}
        render={({ field }) => (
          <Input label='Password' type='password' {...field} />
        )}
      />
      {errors.password && (
        <p className={styles['error']}>{errors.password.message}</p>
      )}

      <Button
        text='Login'
        loading={isSubmitting}
        onClick={() => {}}
        disabled={false}
      />
    </form>
  );
}
