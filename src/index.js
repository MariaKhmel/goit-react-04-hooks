import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { authContext } from 'components/authContext';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  // <React.StrictMode>
  <authContext.Provider value={{name:'Mango'}}>
    <App />
    </authContext.Provider>
  // </React.StrictMode>
);
