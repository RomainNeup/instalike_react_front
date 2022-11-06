import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import H3 from '../base/Titles/H3';
import Image from '../base/Images/Image';
import { useAppSelector } from '../../store/hooks';
import logo from '../../assets/images/logo-light.svg';
import Button from '../base/Buttons/Button';
import Icon from '../base/Icons/Icon';

export default function Header({ className }: LayoutProps): ReactElement {
  const { informations, isLogged } = useAppSelector((state) => state.user);
  const headerClass = clsx(
    className,
    [
      'flex',
      'justify-between',
      'p-8',
    ],
  );

  return (
    <div className={headerClass}>
      <Link to="/" className="flex">
        <div className="h-8 w-8 mr-4">
          <Image src={logo} alt="Logo" />
        </div>
        <H3>InstaLike</H3>
      </Link>
      {
        isLogged && (
          <div className="flex space-x-4">
            <Button size="small" className="self-center" to="/publish">
              <Icon name="add" className="mr-2" />
              Poster
            </Button>
            <Link to="/" className="w-12 h-12">
              <Image
                round
                border="secondary"
                alt="PP"
                src={informations?.media?.url}
              />
            </Link>
          </div>
        )
      }
    </div>
  );
}
