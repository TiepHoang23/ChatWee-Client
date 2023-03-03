import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import NotFound from './components/NotFound';
import ChatApp from './components/chatapp-main/ChatApp';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoadingSpinner from './components/LoadingSpinner';
import { GoogleOAuthProvider } from '@react-oauth/google';
const queryClient = new QueryClient();

const Login = lazy(() => import('./components/LoginComponent/Login'));
const Register = lazy(() => import('./components/RegisterComponent/Register'));
function App() {
  return (
    <GoogleOAuthProvider clientId='734117136162-kl2c09emcpecvp5rm3ujo70g76rv2ufi.apps.googleusercontent.com'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense
            fallback={
              <div>
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>
              <Route index element={<Login />} />
              <Route path='/registration' element={<Register />} />
              <Route path='/chat' element={<ChatApp />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
