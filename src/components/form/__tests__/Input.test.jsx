import { render, screen } from '@testing-library/react';
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
});
