import Head from 'next/head';

import Navbar from './navbar';

function Layout({ children }) {
  return (
    <div>
      <Head></Head>
      <Navbar />

      <main>{children}</main>

      {/* Footer to come here */}
      <div>Makazo 2021-2022</div>
    </div>
  );
}

export default Layout;
