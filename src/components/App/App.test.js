import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { getOrders, addOrder } from '../../apiCalls';
jest.mock('../../apiCalls');

describe('App Component', () => {
  beforeEach(() => {});

  it('should render correctly', () => {});

  it('should be able to add new order', () => {});

  it('should only be able to add new order when name and at least one ingredient is selected', () => {});
});
