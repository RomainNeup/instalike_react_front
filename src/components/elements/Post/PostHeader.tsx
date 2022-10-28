import React from 'react';
import Button from "../../base/Buttons/Button";
import Image from "../../base/Images/Image";
import P from "../../base/Texts/P";

export default function PostHeader({avatar, username}: PostHeaderProps) {
  return (
    <div className="flex flex-row space-x-4 mb-4">
      <div className="w-16 h-16">
        <Image src={avatar} alt={username} border="secondary" round />
      </div>
      <div>
        <P className="flex-none">{username}</P>
        <Button size="small">Follow</Button>
      </div>
    </div>
  );
}
