import React, {
  FormEvent, ReactElement, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Image from '../components/base/Images/Image';
import Input from '../components/base/Inputs/Input';
import Button from '../components/base/Buttons/Button';
import Body from '../components/layout/Body';
import useUser from '../store/reducers/user/hooks';
import Icon from '../components/base/Icons/Icon';

interface UploadedImage {
  value: string,
  file?: File | null,
  preview?: string
}

export default function EditProfileView(): ReactElement {
  const { t } = useTranslation(['user', 'common']);
  const [media, setMedia] = useState<UploadedImage>({ value: '' });
  const [username, setUsername] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { currentUser, editProfile } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username || '');
      setDescription(currentUser.description || '');
      setMedia((m) => ({ ...m, preview: currentUser.media?.url }));
    }
  }, [currentUser]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    editProfile(username, description, media.file)
      .then(() => {
        navigate('/profile');
      });
  };

  const handleImageUpload = (elem: HTMLInputElement) => {
    if (elem.files && elem.files.length > 0) {
      const fileReader = new FileReader();
      setMedia({
        value: elem.value,
        file: elem.files?.item(0) || null,
      });

      fileReader.onload = () => {
        setMedia({
          value: elem.value,
          file: elem.files?.item(0) || null,
          preview: fileReader.result as string,
        });
      };
      fileReader.readAsDataURL(elem.files[0]);
    }
  };

  return (
    <Body size="small">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24">
            <Image src={media.preview} alt={username} round />
          </div>
        </div>
        <div className="space-y-4 mb-8">
          <Input
            type="file"
            accept="image/*"
            value={media.value}
            onChange={(e) => handleImageUpload(e.target as HTMLInputElement)}
          />
          <Input
            label={t('user:fields.username')}
            placeholder={t('user:placeholders.username')}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label={t('user:fields.description')}
            placeholder={t('user:placeholders.description')}
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button plain fullWidth>
          <Icon name="edit" className="mr-2" />
          {t('user:action.submit')}
        </Button>
      </form>
      <Button fullWidth to="/">
        <Icon name="cancel" className="mr-2" />
        {t('common:cancel')}
      </Button>
    </Body>
  );
}
