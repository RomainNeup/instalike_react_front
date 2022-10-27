interface InputProps {
    className?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password' | 'email' | 'number';
    value?: string;
    placeholder?: string;
    label?: string;
    noBorder?: boolean;
}