import React, { FormEvent, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Icon from '../../base/Icons/Icon';
import P from '../../base/Texts/P';
import Input from '../../base/Inputs/Input';

export default function UserText({
  className, text, handleDelete, handleEdit, isEditable, username,
}: UserTextProps): ReactElement {
  const { t } = useTranslation('post');
  const [editedText, setEditedText] = useState<string>('');

  const handleEditUserText = (event: FormEvent) => {
    event.preventDefault();
    handleEdit(editedText);
    setEditedText('');
  };

  const classes = clsx(
    className,
    [
      'self-center',
      'w-100',
      'grow',
    ],
  );

  if (editedText) {
    return (
      <div className={classes}>
        <form onSubmit={handleEditUserText} className="flex">
          <Input
            placeholder={t('comment.add')}
            noBorder
            onChange={(e) => setEditedText(e.target.value)}
            value={editedText}
            className="grow"
          />
          <Icon
            name="delete"
            onClick={handleDelete}
            color="secondary"
            className="text-sm mx-2"
          />
          <Icon
            name="close"
            color="secondary"
            onClick={() => setEditedText('')}
          />
        </form>
      </div>
    );
  }

  return (
    <div className={classes}>
      <span className="font-light mb-4">
        {
          isEditable && (
            <div className="float-right">
              <Icon
                onClick={() => setEditedText(text)}
                name="edit"
                color="secondary"
                className="mr-2 text-sm"
              />
            </div>
          )
        }
        <P>
          <b className="font-bold">
            {`${username} `}
          </b>
          {text}
        </P>
      </span>
    </div>
  );
}
