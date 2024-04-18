import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from './UserContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/GlobalStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ToastContainer autoClose={1500} />
      <GlobalStyle />
      <App />
    </UserProvider>
  </React.StrictMode>,
);
