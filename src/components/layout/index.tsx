'use client';
import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
