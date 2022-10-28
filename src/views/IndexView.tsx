import React from 'react';
import Post from '../components/elements/Post/Post';

export default function IndexView(): JSX.Element {
  return (
    <div className="w-full max-w-lg content-center">
      <Post
        post={{
          id: '1',
          image:
                        'https://media.istockphoto.com/photos/winding-coast-road-in-corsica-picture-id1350993173?b=1&k=20&m=1350993173&s=170667a&w=0&h=vvgGktYjPV3IWLYTvWLsQnSsDsCChR_FO3d8e7touwk=',
          caption: 'Mes super vacances au soleil avec mes amis',
          likes: 0,
        }}
        user={{
          username: 'Romain123',
          avatar:
                        'https://media.istockphoto.com/photos/winding-coast-road-in-corsica-picture-id1350993173?b=1&k=20&m=1350993173&s=170667a&w=0&h=vvgGktYjPV3IWLYTvWLsQnSsDsCChR_FO3d8e7touwk=',
        }}
      />
    </div>
  );
}
