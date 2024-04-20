import { SelectField, Text } from './styles/SelectStyles';

const Select = ({ options, value, label, onChange }) => {
  return (
    <>
      <Text htmlFor={label}>{label}</Text>
      <SelectField name={label} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </SelectField>
    </>
  );
};

export default Select;
