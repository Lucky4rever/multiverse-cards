import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import CardsStore from './utils/CardsStore';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={CardsStore}>
      <RouterProvider router={AppRoutes} />
    </Provider>
  </StrictMode> 
);

reportWebVitals();
