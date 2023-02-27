import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../api/MutationAPI';
function LoginGG() {
  const navigate = useNavigate();
  const onSuccess = async (response) => {
    try {
      const payload = {
        token: response.acessToken,
        profile: response.profileObj,
      };
      const data = await registerAPI(payload);
      if (data.status) {
        navigate('/chat');
      }
    } catch (error) {
      console.log(`Error_LoginGG:${error.message}`);
    }
  };
  const onError = (error) => {
    console.log(`Error_LoginGG:${error.message}`);
  };
  return (
    <div className='social-login'>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
}
export default LoginGG;
