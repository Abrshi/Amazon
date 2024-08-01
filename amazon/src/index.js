import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataProvider } from './Components/DataProvider/DataProvider';
import { reducer, initialState } from './utility/reducer'; // Corrected import

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
