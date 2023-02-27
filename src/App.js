import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import NotFound from './components/NotFound';
import TopBar from './components/TopBar';

const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/registration' element={<Register />} />
          <Route path='/chat' element={<TopBar />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
