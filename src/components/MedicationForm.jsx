import React, { useState } from 'react';
import { addMedication } from '../services/api';

const MedicationForm = ({ userId }) => {
  const [form, setForm] = useState({ name: '', dosage: '', frequency: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await addMedication({ ...form, userId });
    alert('Medication added');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Medication Name" onChange={handleChange} required />
      <input name="dosage" placeholder="Dosage" onChange={handleChange} required />
      <input name="frequency" placeholder="Frequency" onChange={handleChange} required />
      <button type="submit">Add Medication</button>
    </form>
  );
};

export default MedicationForm;
