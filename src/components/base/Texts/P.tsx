import clsx from 'clsx';

export function P(props: PProps): JSX.Element {
  const componentClass = clsx(
    props.className,
    [
      'text-primary',
      'text-base',
      'font-normal',
      'tracking-normal',
      'leading-relaxed',
    ],
  );
  return (
    <p className={componentClass}>
      {props.children}
    </p>
  );
}
