import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Body({ children, className }: BodyProps): JSX.Element {
  return (
    <div>
      <Header />
      {/* <div className={`${props.className} px-8 md:px-16 justify-center flex`}>
      <div className={`${props.className} max-w-md w-2/3`}>
        <Error
          v-for="(error, key) in errors"
          :key="key"
          :message="error"
          :id="key"
          className="my-2"
        />
      </div>
    </div> */}
      <div className={`${className} p-8 md:px-16 flex justify-center`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
