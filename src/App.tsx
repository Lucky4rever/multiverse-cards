import './index.css';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Fragment } from 'react';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;