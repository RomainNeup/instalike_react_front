import React, { FormEvent, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/base/Icons/Icon';
import Button from '../components/base/Buttons/Button';
import Image from '../components/base/Images/Image';
import Input from '../components/base/Inputs/Input';
import H1 from '../components/base/Titles/H1';
import Body from '../components/layout/Body';
import { usePost } from '../store/reducers/post/hooks';

interface UploadedImage {
  value: string,
  file?: File | null,
  preview?: string,
}

export default function PublishView(): ReactElement {
  const { t } = useTranslation(['post', 'common']);
  const [uploadedImage, setUploadedImage] = useState<UploadedImage>({ value: '' });
  const [description, setDescription] = useState<string>('');
  const navigate = useNavigate();
  const { createPost } = usePost();

  const handlePublish = (event: FormEvent) => {
    event.preventDefault();
    if (uploadedImage.file) {
      createPost(uploadedImage.file, description)
        .then(() => {
          setUploadedImage({ value: '' });
          setDescription('');
          navigate('/');
        });
    }
  };

  const handleImageUpload = (elem: HTMLInputElement) => {
    if (elem.files && elem.files.length > 0) {
      const fileReader = new FileReader();
      setUploadedImage({
        value: elem.value,
        file: elem.files?.item(0) || null,
      });

      fileReader.onload = () => {
        setUploadedImage({
          value: elem.value,
          file: elem.files?.item(0) || null,
          preview: fileReader.result as string,
        });
      };
      fileReader.readAsDataURL(elem.files[0]);
    }
  };

  return (
    <Body size="medium">
      <H1 className="pb-12">{t('post:publish.title')}</H1>
      <form className="space-y-4" onSubmit={handlePublish}>
        {uploadedImage.preview && <Image src={uploadedImage.preview} alt={t('post:publish.preview')} className="w-full max-h-96" />}
        <Input
          type="file"
          accept="image/*"
          value={uploadedImage.value}
          onChange={(e) => handleImageUpload(e.target as HTMLInputElement)}
        />
        <Input
          type="textarea"
          label={t('post:publish.fields.description')}
          placeholder={t('post:publish.placeholders.description')}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <Button className="mt-8" fullWidth plain>
            <Icon name="publish" className="mr-2" />
            {t('post:publish.submit')}
          </Button>
          <Button className="mt-4" fullWidth to="/">
            <Icon name="cancel" className="mr-2" />
            {t('common:cancel')}
          </Button>
        </div>
      </form>
    </Body>
  );
}
