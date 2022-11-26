import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import H3 from '../base/Titles/H3';
import Image from '../base/Images/Image';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import logo from '../../assets/images/logo-light.svg';
import Button from '../base/Buttons/Button';
import Icon from '../base/Icons/Icon';
import Dropdown from '../base/Dropdowns/Dropdown';
import { logoutUser } from '../../store/reducers/user/reducer';
import frFlag from '../../assets/images/flags/fr.png';
import ukFlag from '../../assets/images/flags/uk.png';

export default function Header({ className }: LayoutProps): ReactElement {
  const { t, i18n } = useTranslation(['post', 'user', 'auth']);
  const { informations, isLogged } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
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
        isLogged ? (
          <div className="flex space-x-4">
            <Button size="small" className="self-center" to="/publish">
              <Icon name="add" className="mr-2" />
              {t('post:publish.button')}
            </Button>
            <div className="w-12 h-12">
              <Dropdown items={[
                {
                  id: 'user',
                  type: 'text',
                  text: informations?.username || '',
                  icon: 'account_circle',
                },
                {
                  id: 'divider',
                  type: 'divider',
                },
                {
                  id: 'lang',
                  text: t('user:action.lang'),
                  type: 'button',
                  onClick: () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr'),
                  image: i18n.language === 'fr' ? frFlag : ukFlag,
                },
                {
                  id: 'profile',
                  text: t('user:profile'),
                  type: 'link',
                  to: '/profile',
                  icon: 'person',
                },
                {
                  id: 'logout',
                  text: t('auth:logout.title'),
                  type: 'button',
                  onClick: () => dispatch(logoutUser()),
                  icon: 'logout',
                  className: 'rounded-b-md',
                },
              ]}
              >
                <Image
                  round
                  border="secondary"
                  alt="PP"
                  src={informations?.media?.url}
                />
              </Dropdown>
            </div>
          </div>
        )
          : (
            <Button className="border-0" color="secondary" onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}>
              <Image src={i18n.language === 'en' ? frFlag : ukFlag} alt="Lang" background="none" />
            </Button>
          )
      }
    </div>
  );
}
