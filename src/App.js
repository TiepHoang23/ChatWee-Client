import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import NotFound from './components/NotFound';
import ChatApp from './components/ChatApp';

const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/registration' element={<Register />} />
          <Route path='/chat' element={<ChatApp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
