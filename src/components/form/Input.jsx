import { InputField } from './styles/InputStyles';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <InputField
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      data-testId={'testId'}
    />
  );
};

export default Input;
