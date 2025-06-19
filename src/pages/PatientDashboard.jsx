import React from 'react';
import MedicationForm from '../components/MedicationForm';
import MedicationList from '../components/MedicationList';

const PatientDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <MedicationForm userId={user.id} />
      <MedicationList userId={user.id} />
    </div>
  );
};

export default PatientDashboard;
