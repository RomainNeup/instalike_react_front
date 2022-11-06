interface InputProps {
  className?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'password' | 'email' | 'number' | 'textarea' | 'file';
  value?: string;
  placeholder?: string;
  label?: string;
  noBorder?: boolean;
  rows?: number;
  autocomplete?: string;
}
