interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'basic' = 'primary';
  plain?: boolean;
  fullWidth?: boolean;
}
