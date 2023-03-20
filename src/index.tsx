import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { createDriver, Neo4jProvider } from 'use-neo4j';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

// const driver = createDriver(
//   'neo4j+s', 
//   'localhost', 
//   process.env.NEO4J_PORT ?? 7687, 
//   process.env.NEO4J_USERNAME, 
//   process.env.NEO4J_PASSWORD, 
// );

root.render(
  <BrowserRouter>
    <StrictMode>
      {/* <Neo4jProvider driver={driver}> */}
      <App />
      {/* </Neo4jProvider> */}
    </StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
