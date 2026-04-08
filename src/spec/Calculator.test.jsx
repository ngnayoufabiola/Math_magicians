import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Calculator from '../Components/Calculator';

describe('Calculator Component', () => {
  test('renders calculator with default display 0', () => {
    render(<Calculator />);
    expect(screen.getByTestId('display')).toHaveTextContent('0');
  });
  test('renders calculator on the screen', () => {
    render(<Calculator />);

    expect(screen.getByTestId('display')).toBeInTheDocument();
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
  });

  test('updates display when number buttons are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('8'));

    expect(screen.getByTestId('display')).toHaveTextContent('78');
  });

  test('clears input when AC button is clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('AC'));

    expect(screen.getByTestId('display')).toHaveTextContent('0');
  });

  test('deletes last character when DEL button is clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('DEL'));

    expect(screen.getByTestId('display')).toHaveTextContent('1');
  });

  test('adds numbers correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByTestId('display')).toHaveTextContent('5');
  });

  test('subtracts numbers correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('−'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByTestId('display')).toHaveTextContent('5');
  });

  test('multiplies numbers correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('×'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByTestId('display')).toHaveTextContent('12');
  });

  test('divides numbers correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByTestId('display')).toHaveTextContent('4');
  });

  test('calculates modulo correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByTestId('display')).toHaveTextContent('1');
  });
  test('multiplies 4 and 5 correctly', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('×'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByTestId('display')).toHaveTextContent('20');
  });
});
