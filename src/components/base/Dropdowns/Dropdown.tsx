import clsx from 'clsx';
import React, {
  ReactElement, useEffect, useRef, useState,
} from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Icon from '../Icons/Icon';

function DropdownItem({
  text, type, icon, disabled, className, onClick, to,
}: DropdownItemProps): ReactElement {
  const itemClass = clsx(
    className,
    type === 'divider'
      ? 'border-t border-basic'
      : [
        'block',
        'w-full',
        'px-4',
        'py-2',
        'text-left',
      ],
  );
  const buttonClass = clsx(
    itemClass,
    [
      'hover:bg-basic',
      'hover:text-secondary',
    ],
  );

  switch (type) {
    case 'link':
      if (to) {
        return (
          <ReactLink
            to={disabled ? '#' : to}
            className={buttonClass}
            onClick={onClick}
          >
            {icon && <Icon name={icon} className="mr-2" />}
            {text}
          </ReactLink>
        );
      }
      break;
    case 'button':
      if (onClick) {
        return (
          <button
            type="button"
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
          >
            {icon && <Icon name={icon} className="mr-2" />}
            {text}
          </button>
        );
      }
      break;
    case 'divider':
      return (
        <hr className={itemClass} />
      );
    default:
      break;
  }
  return (
    <span className={itemClass}>
      {icon && <Icon name={icon} className="mr-2" />}
      {text}
    </span>
  );
}

export default function Dropdown({ children, items }: DropdownProps): ReactElement {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside, true);
    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);

  return (
    <div className="relative inline-block h-full w-full" ref={ref}>
      <button className="contents" onClick={() => setOpen(!open)} type="button">
        {children}
      </button>
      {
        open && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-secondary border border-secondary text-basic shadow-lg focus:outline-none"
          >
            {items.map(({
              id, text, type, className, disabled, icon, onClick, to,
            }) => (
              <DropdownItem
                key={id}
                id={id}
                text={text}
                type={type}
                className={className}
                disabled={disabled}
                icon={icon}
                onClick={(e) => {
                  setOpen(false);
                  if (onClick) {
                    onClick(e);
                  }
                }}
                to={to}
              />
            ))}
          </div>
        )
      }
    </div>
  );
}
