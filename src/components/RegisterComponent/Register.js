import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../../api/MutationAPI';
import LoadingSpinner from '../LoadingSpinner';
import './Register.css';
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const mutation = useMutation(registerAPI, {
    onSuccess: (response) => {
      const { status } = response.data;

      if (status) {
        navigate('/chat');
      }
    },
    onError: (e) => {
      console.log(e.message);
    },
  });
  const handleOnSubmit = async ({ username, password }) => {
    await mutation.mutate({ username, password });
  };

  return mutation.isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className='container-signin'>
      <form
        method='post'
        className='form-login'
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className='title-login'>REGISTER</div>
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
          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input
            placeholder='Enter Email'
            className='email'
            {...register('email', { required: 'Email is required' })}
          ></input>

          {errors.email && (
            <div className='text-danger'>{errors.email.message}</div>
          )}
          <label htmlFor='f-name'>
            <b>First Name</b>
          </label>
          <input
            type='text'
            {...register('firstName', { required: 'FirstName is required' })}
            placeholder='Enter FirstName'
            className='f-name'
          ></input>
          {errors.firstName && (
            <div className='text-danger'>{errors.firstName.message}</div>
          )}
          <label htmlFor='l-name'>
            <b>Last Name</b>
          </label>
          <input
            type='text'
            {...register('lastName', { required: 'LastName is required' })}
            placeholder='Enter LastName'
            className='l-name'
          ></input>
          {errors.lastName && (
            <div className='text-danger'>{errors.lastName.message}</div>
          )}
          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            placeholder='Enter Password'
            className='psw'
            {...register('password', { required: 'Password is required' })}
          ></input>

          {errors.password && (
            <div className='text-danger'>{errors.password.message}</div>
          )}

          <button className='btn-login' type='submit'>
            SIGN UP
          </button>
        </div>
        <div className='account'>
          Already have an account?{' '}
          <a href='/'>
            <b>Log in</b>
          </a>
        </div>
      </form>
    </div>
  );
}
export default Register;
