import { ReactElement, ChangeEvent, FocusEvent } from 'react';

interface TextFieldProps {
  id: string;
  label?: string;
  type?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
  className?: string;
  helpText?: string;
}

export function TextField({
  id,
  label,
  type = 'text',
  name,
  required,
  disabled,
  error,
  autoFocus,
  placeholder,
  value,
  onChange,
  onBlur,
  minLength,
  maxLength,
  className = '',
  helpText
}: TextFieldProps): ReactElement {
  return (
    <div className={`textfield ${className} ${error ? 'has-error' : ''}`}>
      <label className="textfield__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className={`textfield__input ${error ? 'has-error' : ''}`}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        minLength={minLength}
        maxLength={maxLength}
      />
      <small>{helpText}</small>
    </div>
  );
}
