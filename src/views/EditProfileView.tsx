import React, {
  FormEvent, ReactElement, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../components/base/Images/Image';
import Input from '../components/base/Inputs/Input';
import Button from '../components/base/Buttons/Button';
import UploadService from '../api/upload/service';
import UserService from '../api/user/service';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { editUser } from '../store/reducers/user/reducer';
import { editUser as editUserInUsers } from '../store/reducers/users/reducer';

interface UploadedImage {
  value: string,
  file?: File | null,
  preview?: string
}

export default function EditProfileView(): ReactElement {
  const [media, setMedia] = useState<UploadedImage>({ value: '' });
  const [username, setUsername] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const { informations } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      setUsername(informations?.username || '');
      setDescription(informations?.description || '');
      setMedia({ ...media, preview: informations?.media?.url });
    }
  }, [informations, media, username]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (media.file) {
      UploadService.uploadMedia(media.file)
        .then((mediaId) => UserService.editUser({
          _id: '', username, description, media: { _id: mediaId, mimetype: '', url: '' },
        }))
        .then((user) => {
          if (informations) {
            dispatch(editUser(user));
            dispatch(editUserInUsers({ ...user, _id: informations._id }));
            navigate('/profile');
          }
        });
    } else {
      UserService.editUser({
        _id: '', username, description, media: null,
      })
        .then((user) => {
          if (informations) {
            dispatch(editUser(user));
            dispatch(editUserInUsers({ ...user, _id: informations._id }));
            navigate('/profile');
          }
        });
    }
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
    <div className="w-2/3 max-w-md">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24">
            <Image src={media.preview} alt={username} round />
          </div>
        </div>
        <div className="space-y-4 mb-8">
          <Input
            type="file"
            value={media.value}
            onChange={(e) => handleImageUpload(e.target as HTMLInputElement)}
          />
          <Input
            label="Nom d'utilisateur"
            placeholder="Votre nouveau nom d'utilisateur"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Description"
            placeholder="Décrivez vous en quelques mots..."
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button plain fullWidth>Je modifie mon profil</Button>
      </form>
      <Button fullWidth onClick={() => console.log('ta mère la pute')}>Je supprime mon compte</Button>
    </div>
  );
}
