import React from 'react';
import Image from "../../base/Images/Image";
import Input from "../../base/Inputs/Input";

export default function PostFooter({ className, user }: PostFooterProps): JSX.Element {
  return (
    <div className={className}>
      <div className="flex flex-row space-x-4 mb-4">
        <div className="w-8 h-8">
          <Image src={user.avatar} alt="User picture" border="secondary" round />
        </div>
        <div className="self-center w-100 grow">
          <Input placeholder="Ajouter un commentaire..." noBorder />
        </div>
      </div>
    </div>
  );
}
