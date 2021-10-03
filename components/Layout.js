import Head from 'next/head';
import NextLink from 'next/link';

import Navbar from './navbar';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div>
      <Head></Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
