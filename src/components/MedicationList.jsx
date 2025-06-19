import React from 'react';


import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"; 


const MedicationList = ({ userId }) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(['medications', userId], () =>
    getMedications(userId).then(res => res.data)
  );

  const mutation = useMutation(markAsTaken, {
    onSuccess: () => queryClient.invalidateQueries(['medications', userId])
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading medications</p>;

  return (
    <div>
      <h3>Your Medications</h3>
      <ul>
        {data.map(med => (
          <li key={med.id}>
            <b>{med.name}</b> - {med.dosage} - {med.frequency} -
            {med.date_taken ? (
              <span> ✅ Taken on {med.date_taken}</span>
            ) : (
              <button onClick={() => mutation.mutate(med.id)}>Mark as Taken</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
