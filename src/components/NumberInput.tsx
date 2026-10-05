interface NumberInputProps {
  value: string;
  placeholder: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

function NumberInput({
  value,
  placeholder,
  readOnly = false,
  onChange,
}: NumberInputProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}

export default NumberInput;
