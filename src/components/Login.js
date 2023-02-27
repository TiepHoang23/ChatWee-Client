import React, { useState } from 'react';
import './LoginForm.css';
import { loginAPI } from '../api';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [res, setRes] = useState({});
  console.log(res);

  const mutation = useMutation(loginAPI, {
    onSuccess: (data) => {
      setRes(data.data);
    },
  });
  const handleOnSubmit = async ({ username, password }) => {
    await mutation.mutate({ username, password });
  };

  return (
    <div className='container'>
      <form
        method='post'
        onSubmit={handleSubmit(handleOnSubmit)}
        className='form-login'
      >
        <div className='title-login'>LOGIN</div>
        <div className='element-form'>
          <label for='uname'>
            <b>Username</b>
          </label>
          <input
            type='text'
            {...register('username', { required: 'Username is required' })}
            placeholder='Enter Username'
            className='uname'
          ></input>

          <label for='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            className='psw'
            {...register('username', { required: 'Username is required' })}
          ></input>
          {errors.username && (
            <div className='text-danger'>{errors.username.message}</div>
          )}
          <button className='btn-login' type='submit'>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
