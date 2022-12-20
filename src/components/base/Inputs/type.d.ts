interface InputProps {
  className?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'password' | 'email' | 'number' | 'textarea' | 'file';
  accept?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  border?: boolean;
  rows?: number;
  autocomplete?: string;
  color?: 'primary' | 'secondary' | 'basic';
  inputRef?: React.RefObject<HTMLInputElement>;
}

interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label?: string;
}
