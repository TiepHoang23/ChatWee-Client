function InputForm(label_name, register, errors, type) {
  return (
    <div>
      <label htmlFor='email'>
        <b>{}</b>
      </label>
      <input
        placeholder='Enter Email'
        className='email'
        {...register('email', { required: 'Email is required' })}
      ></input>

      {errors.type && <div className='text-danger'>{errors.type.message}</div>}
    </div>
  );
}
export default InputForm;
