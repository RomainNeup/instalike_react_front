import React from 'react';
import { Link } from 'react-router-dom';
import H3 from '../base/Titles/H3';
import Image from '../base/Images/Image';
import { useAppSelector } from '../../store/hooks';

export default function Header({ className }: LayoutProps): JSX.Element {
  const { informations } = useAppSelector((state) => state.user);

  return (
    <div className={`${className} p-8 flex justify-between`}>
      <Link to="/">
        <H3>InstaLike</H3>
      </Link>
      <Link to="/" className={`${className} w-12 h-12`}>
        <Image
          round
          border="secondary"
          alt="PP"
          src={informations?.media?.url}
        />
      </Link>
    </div>
  );
}
