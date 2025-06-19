// frontend/src/pages/LoginPage.jsx
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need an account? Signup' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default LoginPage;
