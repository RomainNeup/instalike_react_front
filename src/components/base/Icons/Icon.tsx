import clsx from 'clsx';
import './style.css';

export function Icon(props: IconProps): JSX.Element {
  const iconClass = clsx(
    props.className,
    ['material-symbols-rounded'],
  );
  return (
    <span className={iconClass}>
      {props.name}
    </span>
  );
}
