import React, { FormEvent, ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/base/Buttons/Button';
import Image from '../components/base/Images/Image';
import Input from '../components/base/Inputs/Input';
import H1 from '../components/base/Titles/H1';
import UploadService from '../api/upload/service';
import PostService from '../api/post/service';
import { useAppDispatch } from '../store/hooks';
import { addPost } from '../store/reducers/post/reducer';

interface UploadedImage {
  value: string,
  file?: File | null,
  preview?: string
}

export default function PublishView(): ReactElement {
  const [uploadedImage, setUploadedImage] = useState<UploadedImage>({ value: '' });
  const [description, setDescription] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlePublish = (event: FormEvent) => {
    event.preventDefault();
    if (uploadedImage.file) {
      UploadService.uploadMedia(uploadedImage.file)
        .then((media) => PostService.createPost(media, description))
        .then((post) => {
          dispatch(addPost(post));
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
    <div className="max-w-lg w-full">
      <H1 className="mb-16">Nouveau post</H1>
      <form className="space-y-4" onSubmit={handlePublish}>
        {uploadedImage.preview && <Image src={uploadedImage.preview} alt="Preview de l'image" className="w-full max-h-96" />}
        <Input
          type="file"
          value={uploadedImage.value}
          onChange={(e) => handleImageUpload(e.target as HTMLInputElement)}
        />
        <Input
          type="textarea"
          label="Description"
          placeholder="Dites en plus sur votre post"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <Button className="mt-8" fullWidth plain>Je partage ma photo</Button>
          <Button className="mt-4" fullWidth to="/">J&apos;abandonne</Button>
        </div>
      </form>
    </div>
  );
}
