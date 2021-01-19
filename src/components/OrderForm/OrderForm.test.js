import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import OrderForm from './OrderForm';

describe('OrderForm Component', () => {
  beforeEach(() => {
    render(<OrderForm addNewOrder={jest.fn()} />);
  });

  it('should render correctly', () => {
    expect(screen.getAllByRole('button')).toHaveLength(13);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('beans')).toBeInTheDocument();
    expect(screen.getByText('steak')).toBeInTheDocument();
    expect(screen.getByText('carnitas')).toBeInTheDocument();
    expect(screen.getByText('sofritas')).toBeInTheDocument();
    expect(screen.getByText('lettuce')).toBeInTheDocument();
    expect(screen.getByText('queso fresco')).toBeInTheDocument();
    expect(screen.getByText('pico de gallo')).toBeInTheDocument();
    expect(screen.getByText('hot sauce')).toBeInTheDocument();
    expect(screen.getByText('guacamole')).toBeInTheDocument();
    expect(screen.getByText('jalapenos')).toBeInTheDocument();
    expect(screen.getByText('cilantro')).toBeInTheDocument();
    expect(screen.getByText('sour cream')).toBeInTheDocument();
    expect(screen.getByText('Submit Order')).toBeInTheDocument();
    expect(screen.getByText('Order: Nothing selected')).toBeInTheDocument();
  });

  it('should change name upon inputting', () => {
    const nameInput = screen.getByRole('textbox');

    userEvent.type(nameInput, 'Elle');

    expect(nameInput).toHaveValue('Elle');
  });

  it('should reflect ingredients names upon selecting', () => {
    const beanButton = screen.getByText('beans');
    const steakButton = screen.getByText('steak');

    userEvent.click(beanButton);
    expect(screen.getByTestId('order-details')).toHaveTextContent(
      'Order: beans'
    );

    userEvent.click(steakButton);
    expect(screen.getByTestId('order-details')).toHaveTextContent(
      'Order: beans,steak'
    );
  });
});
