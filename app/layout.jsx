'use client';

import React from 'react';
import './globals.css';
import Header from './Header';
import Navbar from './(navbar)/Navbar';
import Footer from './Footer';
import {ShopContextProvider} from './(Context)/shop';
import {SessionProvider} from 'next-auth/react';

export default function RootLayout({children, session}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='min-w-[1440px] max-w-[1440px] mx-auto flex flex-col bg-main-cream'>
          <SessionProvider session={session}>
            <ShopContextProvider session={session}>
              <Header />
              <Navbar />
              {children}
            </ShopContextProvider>
            <Footer />
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
