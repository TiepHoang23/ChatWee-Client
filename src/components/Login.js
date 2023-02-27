import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { loginAPI } from '../api/MutationAPI';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import LoadingSpinner from './LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LoginGG from './LoginGG';
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState({
    status: false,
    message: null,
  });
  const [ShowPassword, setShow] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setShow(!ShowPassword);
  };

  console.log(error);

  const mutation = useMutation(loginAPI, {
    onSuccess: (response) => {
      const { status } = response.data;

      if (status) {
        navigate('/chat');
      }
    },
    onError: (e) => {
      setError({
        status: false,
        message: e.message,
      });
    },
  });
  const handleOnSubmit = async ({ username, password }) => {
    await mutation.mutate({ username, password });
  };

  return mutation.isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className='container'>
      <form
        method='post'
        onSubmit={handleSubmit(handleOnSubmit)}
        className='form-login'
      >
        <div className='title-login'>LOGIN</div>
        <div className='element-form'>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input
            type='text'
            {...register('username', { required: 'Username is required' })}
            placeholder='Enter Username'
            className='uname'
          ></input>
          {errors.username && (
            <div className='text-danger'>{errors.username.message}</div>
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
          <LoginGG />
        </div>
      </form>
    </div>
  );
}

export default Login;
