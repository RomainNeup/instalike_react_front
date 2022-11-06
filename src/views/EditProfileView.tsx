import React, { ReactElement } from 'react';
import Image from '../components/base/Images/Image';
import Input from '../components/base/Inputs/Input';
import Button from '../components/base/Buttons/Button';

export default function EditProfileView(): ReactElement {
  return (
    <div className="w-2/3 max-w-md">
      <form className="mb-4">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24">
            <Image src="" alt="" round />
          </div>
        </div>
        <div className="space-y-4 mb-8">
          <Input v-model="image" type="file" />
          <Input
            label="Nom d'utilisateur"
            placeholder="Votre nouveau nom d'utilisateur"
            type="text"
          />
          <Input
            label="Description"
            placeholder="Décrivez vous en quelques mots..."
            type="textarea"
          />
        </div>
        <Button plain fullWidth>Je modifie mon profil</Button>
      </form>
      <Button fullWidth onClick={() => console.log('ta mère la pute')}>Je supprime mon compte</Button>
    </div>
  );
}
