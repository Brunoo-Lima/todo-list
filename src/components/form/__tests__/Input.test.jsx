import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Input from './../Input';

describe('<Input />', () => {
  it('should have a value of searchValue', () => {
    const onChangeMock = jest.fn();

    render(
      <Input
        value={'Nova entrada'}
        placeholder="Digite a tarefa"
        onChange={onChangeMock}
      />,
    );

    const input = screen.getByPlaceholderText(/Digite a tarefa/i);

    expect(input.value).toBe('Nova entrada');
  });

  it('should onChange value of input', () => {
    const fn = jest.fn();

    render(
      <Input
        value={'Nova entrada'}
        placeholder="Digite a tarefa"
        onChange={fn}
      />,
    );

    const input = screen.getByTestId('testId');

    fireEvent.change(input, { target: { value: 'Javascripto' } });

    expect(fn).toHaveBeenCalled();
  });
});
