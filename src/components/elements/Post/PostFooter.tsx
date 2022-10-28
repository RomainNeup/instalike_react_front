import React from 'react';
import { Image, Input } from '../..';

export default function PostFooter(props: PostBodyProps): JSX.Element {
  return (
    <div className={props.className}>
      <div className="flex flex-row space-x-4 mb-4">
        <div className="w-8 h-8">
          <Image src={props.user.avatar} alt="User picture" border="secondary" round />
        </div>
        <div className="self-center w-100 grow">
          <Input placeholder="Ajouter un commentaire..." noBorder />
        </div>
      </div>
    </div>
  );
}
