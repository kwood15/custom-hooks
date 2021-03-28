import { ReactElement } from 'react';

interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary';
}

export default function Button({
  label,
  type = 'primary',
  ...props
}: ButtonProps): ReactElement {
  return (
    <button
      type="button"
      className={type === 'primary' ? 'btn-primary' : 'btn-secondary'}
      {...props}
    >
      {label}
    </button>
  );
}
