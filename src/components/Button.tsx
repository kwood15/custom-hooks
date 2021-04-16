import { ReactElement, MouseEvent } from 'react';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  text: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  type = 'button',
  text,
  color = 'primary',
  size = 'sm',
  onClick,
  disabled,
  fullWidth
}: ButtonProps): ReactElement {
  return (
    <button
      type={type}
      className={`btn btn--${color} btn--${size} ${
        fullWidth ? 'btn--full-width' : ''
      } ${disabled ? 'btn--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
