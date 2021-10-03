import '../styles/globals.css';
import Layout from '../components/Layout';

import { CartProvider } from '../utils/CartContext';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </CartProvider>
  );
}

export default MyApp;
