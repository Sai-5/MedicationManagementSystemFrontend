import React, { useState } from 'react';
import { signup } from '../services/api';

const SignupForm = () => {
  const [form, setForm] = useState({ email: '', password: '', role: 'patient' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signup(form);
      alert('Signup successful. You can login now.');
    } catch {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option value="patient">Patient</option>
        <option value="caretaker">Caretaker</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
