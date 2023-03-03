import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../../api/MutationAPI';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../LoadingSpinner';
import LoginGG from './LoginGG';
import './LoginForm.css';
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [error, setError] = useState({
  //   status: false,
  //   message: null,
  // });
  const [ShowPassword, setShow] = useState(false);

  const togglePassword = () => {
    setShow(!ShowPassword);
  };

  // console.log(error);

  const mutation = useMutation(loginAPI, {
    onSuccess: (response) => {
      console.log(response.data);
      const { status } = response.data;

      if (status) {
        navigate('/chat');
      }
    },
    onError: (e) => {
      console.log(e.message);
    },
  });
  const handleOnSubmit = async ({ email, password }) => {
    console.log({ email, password });
    await mutation.mutate({ email, password });
  };

  return mutation.isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className='container'>
      <div className='content'>
        <div className='name-app'>CHATWEE</div>
        <p className='content-app'> Chat with we !</p>
        <button className='btn-join'>Join Now</button>
      </div>
      <form
        method='post'
        onSubmit={handleSubmit(handleOnSubmit)}
        className='form-login'
      >
        <div className='title-login'>LOGIN</div>
        <div className='element-form'>
          <label htmlFor='uname'>
            <b>Email</b>
          </label>
          <input
            type='text'
            {...register('email', { required: 'Email is required' })}
            placeholder='Enter Email'
            className='uname'
          ></input>
          {errors.email && (
            <div className='text-danger'>{errors.email.message}</div>
          )}
          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type={ShowPassword ? 'text' : 'password'}
            placeholder='Enter Password'
            className='psw'
            {...register('password', { required: 'Password is required' })}
          ></input>
          <div className='btn-eye'>
            {ShowPassword ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                onClick={togglePassword}
                className='btn-show btn-disable'
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                onClick={togglePassword}
                className='btn-show btn-showPass'
              />
            )}
          </div>

          {errors.password && (
            <div className='text-danger'>{errors.password.message}</div>
          )}

          <button className='btn-login' type='submit'>
            LOGIN
          </button>
          <div className='signup'>
            Don't have an account?{' '}
            <a href='/registration'>
              <b>Signup</b>
            </a>
          </div>
          <div className='or-login'></div>
          <div className='text-login'>Or Login With</div>
          <LoginGG />
        </div>
      </form>
    </div>
  );
}

export default Login;
