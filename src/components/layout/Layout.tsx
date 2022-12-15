import React, { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <div className="flex flex-col items-center p-8 space-y-16">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
