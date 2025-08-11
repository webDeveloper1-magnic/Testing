
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './Store/CartContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
 
     <QueryClientProvider client={queryClient}>
        <CartProvider>
              <App />
        </CartProvider>
  </QueryClientProvider>
)

