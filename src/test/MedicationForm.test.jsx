import { render, screen, fireEvent } from '@testing-library/react';
import MedicationForm from '../components/MedicationForm';

describe('MedicationForm', () => {
  it('renders and allows input', () => {
    render(<MedicationForm userId={1} />);
    const nameInput = screen.getByPlaceholderText(/medication name/i);
    fireEvent.change(nameInput, { target: { value: 'Ibuprofen' } });
    expect(nameInput.value).toBe('Ibuprofen');
  });
});
