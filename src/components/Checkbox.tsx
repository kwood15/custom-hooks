import { ReactElement, ChangeEvent } from 'react';

interface CheckboxProps {
  label?: string;
  name?: string;
  id: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
}

export function Checkbox({
  label,
  name,
  id,
  checked,
  required,
  disabled,
  value,
  onChange,
  indeterminate
}: CheckboxProps): ReactElement {
  return (
    <label className="checkbox" htmlFor={id}>
      <input
        id={id}
        className="checkbox__input"
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        ref={(el) => el && (el.indeterminate = indeterminate as boolean)}
      />
      <span className="checkbox__indicator"></span>
      <span className="checkbox__label">{label}</span>
    </label>
  );
}
