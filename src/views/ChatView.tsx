import React, { ReactElement } from 'react';
import Input from '../components/base/Inputs/Input';
import Image from '../components/base/Images/Image';
import ChatList from '../components/elements/Chat/ChatList';
import Message from '../components/elements/Chat/Message';
import Icon from '../components/base/Icons/Icon';
import Button from '../components/base/Buttons/Button';
import P from '../components/base/Texts/P';

export default function ChatView(): ReactElement {
  return (
    <div className="flex max-h-144 max-w-4xl overflow-hidden flex-row space-x-8">
      <div className="flex flex-col w-1/3">
        <div className="pb-4 flex justify-between border-b border-secondary items-center">
          <div className="h-12" />
          <P className="text-xl">romain_nonym</P>
          <Button color="primary" onClick={() => 'TODO'}>
            <Icon name="edit" />
          </Button>
        </div>
        <ChatList className="pt-4" />
      </div>
      <div className="w-2/3 h-full flex flex-col justify-between">
        <div className="flex border-b border-secondary text-primary pb-4 items-center">
          <div className="h-12 w-12 mr-2">
            <Image alt="" round />
          </div>
          <p className="font-bold">thomas_bg13</p>
        </div>
        <div className="overflow-y-scroll py-4 align-bottom h-4/5">
          <Message
            text="Salut toi"
            id="1"
            user={{
              _id: '1',
              currentUser: false,
              username: 'test',
              media: null,
            }}
          />
          <Message
            text="Salut, j'ai rien à te dire mais faut que j'ecrive un grand texte pour voir comment ca se passe sur plusieurs lignes et voir si ca casse pas le design"
            id="1"
            user={{
              _id: '1',
              currentUser: true,
              username: 'test',
              media: null,
            }}
          />
          <Message
            text="Pour voir comment ca se passe sur plusieurs lignes et voir si ca casse pas le design"
            id="1"
            user={{
              _id: '1',
              currentUser: true,
              username: 'test',
              media: null,
            }}
          />
          <Message
            text="Salut, j'ai rien à te dire mais ca se passe sur plusieurs lignes et voir si ca casse pas le design"
            id="1"
            user={{
              _id: '1',
              currentUser: false,
              username: 'test',
              media: null,
            }}
          />
          <Message
            text="Salut, j'ai rien à te dire mais faut que j'ecrive un grand texte pour voir comment ca se passe sur plusieurs lignes et voir si ca casse pas le design"
            id="1"
            user={{
              _id: '1',
              currentUser: true,
              username: 'test',
              media: null,
            }}
          />
          <Message
            text="Salut, j'ai rien à te dire mais faut que j'ecrive un grand texte pour voir comment ca se passe sur plusieurs lignes et voir si ca casse pas le design"
            id="1"
            user={{
              _id: '1',
              currentUser: true,
              username: 'test',
              media: null,
            }}
          />
          <Message
            text="Salut, j'ai rien à te dire mais faut que j'ecrive un grand texte pour voir comment ca se passe sur plusieurs lignes et voir si ca casse pas le design"
            id="1"
            user={{
              _id: '1',
              currentUser: true,
              username: 'test',
              media: null,
            }}
          />
          <Message
            text="Salut, j'ai rien à te dire mais faut que j'ecrive un grand texte pour voir comment ca se passe sur plusieurs lignes et voir si ca casse pas le design"
            id="1"
            user={{
              _id: '1',
              currentUser: true,
              username: 'test',
              media: null,
            }}
            className="mb-0"
          />
        </div>
        <div className="flex items-end w-100 text-primary">
          <Input type="text" placeholder="Ecrivez un message" className="grow" />
        </div>
      </div>
    </div>
  );
}
