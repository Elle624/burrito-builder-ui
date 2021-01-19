import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { getOrders, addOrder } from '../../apiCalls';
import { _mockOrders, _mockNewOrder } from './_mockData';
jest.mock('../../apiCalls');

describe('App Component', () => {
  beforeEach(() => {
    addOrder.mockResolvedValueOnce(_mockNewOrder);
    getOrders.mockResolvedValue(_mockOrders);
  });

  it('should render correctly', async () => {
    render(<App />);

    expect(screen.getByTestId('order-form')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByText('No orders yet!')).toBeInTheDocument()
    );
    await waitFor(() => expect(screen.getByText('Pam')).toBeInTheDocument());
    await waitFor(() => expect(screen.getAllByText('beans')).toHaveLength(2));
    await waitFor(() => expect(screen.getAllByText('lettuce')).toHaveLength(2));
    await waitFor(() =>
      expect(screen.getAllByText('carnitas')).toHaveLength(2)
    );
    await waitFor(() => expect(screen.getByText('Leta')).toBeInTheDocument());
    await waitFor(() => expect(screen.getAllByText('steak')).toHaveLength(2));
    await waitFor(() =>
      expect(screen.getAllByText('pico de gallo')).toHaveLength(2)
    );
  });

  it('should be able to add new order', () => {});

  it('should only be able to add new order when name and at least one ingredient is selected', () => {});
});
