import { SelectField } from './styles/SelectStyles';

const Select = ({ options, value, onChange }) => {
  return (
    <SelectField value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.label}>
          {option.label}
        </option>
      ))}
    </SelectField>
  );
};

export default Select;
