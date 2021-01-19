import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { getOrders, addOrder } from '../../apiCalls';
import { _mockOrders, _mockNewOrder, _mockUpdatedOrders } from './_mockData';
jest.mock('../../apiCalls');

describe('App Component', () => {
  beforeEach(() => {
    getOrders.mockResolvedValue(_mockOrders);
    addOrder.mockResolvedValue(_mockNewOrder);
    getOrders.mockResolvedValue(_mockUpdatedOrders);
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

  it('should be able to add new order', async () => {
    render(<App />);

    userEvent.type(screen.getByRole('textbox'), 'Elle');
    userEvent.click(screen.getByText('cilantro'));
    userEvent.click(screen.getByText('guacamole'));
    userEvent.click(screen.getByText('Submit Order'));

    await waitFor(() => expect(screen.getByText('Elle')).toBeInTheDocument());
    await waitFor(() =>
      expect(screen.getAllByText('cilantro')).toHaveLength(2)
    );
    await waitFor(() =>
      expect(screen.getAllByText('guacamole')).toHaveLength(2)
    );
  });

  it('should only be able to add new order when name and at least one ingredient is selected', () => {});
});
