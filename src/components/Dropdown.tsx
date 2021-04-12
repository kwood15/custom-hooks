import { ReactElement, ReactNode, ChangeEvent, FocusEvent } from 'react';

interface DropdownProps {
  id: string;
  label?: string;
  name?: string;
  required?: boolean;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
  autofocus?: boolean;
  className?: string;
  labelClass?: string;
  fieldClass?: string;
  value?: string | number;
  children: ReactNode;
}

export function Dropdown({
  id,
  label,
  name,
  required,
  error,
  onChange,
  onBlur,
  autofocus,
  className = '',
  labelClass = '',
  fieldClass = '',
  value,
  children,
  ...props
}: DropdownProps): ReactElement {
  return (
    <div className={`dropdown ${className}`}>
      <label className={`dropdown__label ${labelClass}`}>{label}</label>
      <select
        {...props}
        id={id}
        className={`dropdown__field ${fieldClass}`}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
}
