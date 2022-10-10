import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Phonebook } from 'components/App';
import { store } from 'redux/store';
import { theme } from 'Thema';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Phonebook />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
