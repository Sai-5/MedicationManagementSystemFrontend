import { describe, it, expect } from 'vitest';
import * as api from '../services/api';

describe('API functions', () => {
  it('should expose a login function', () => {
    expect(typeof api.login).toBe('function');
  });

  it('should expose a getMedications function', () => {
    expect(typeof api.getMedications).toBe('function');
  });
});
