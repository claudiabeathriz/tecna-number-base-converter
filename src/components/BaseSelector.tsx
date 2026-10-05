interface BaseSelectorProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function BaseSelector({ label, value, onChange }: BaseSelectorProps) {
  return (
    <>
      {label && <label>{label}</label>}

      <select
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      >
        <option value="10">Decimal</option>
        <option value="2">Binary</option>
        <option value="8">Octal</option>
        <option value="16">Hexadecimal</option>
      </select>
    </>
  );
}

export default BaseSelector;
