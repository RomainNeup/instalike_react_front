import clsx from 'clsx';

export function H5(props: TitleProps): JSX.Element {
  const componentClass = clsx(
    props.className,
    [
      'text-primary',
      'text-xl',
      'font-medium',
      'tracking-tight',
    ],
  );
  return (
    <h5 className={componentClass}>
      {props.children}
    </h5>
  );
}
