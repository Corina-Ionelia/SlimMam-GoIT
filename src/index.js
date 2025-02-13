import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App';
import './i18n'; // Importă configurația de localizare
import './fonts/VerdanaBold.woff2';
import './fonts/verdana.woff2';
import './fonts/GothamPro-Light.woff';
import './fonts/GothamPro-Bold.woff';
import './index.css';

ReactDOM.render( <
    BrowserRouter >
    <
    Provider store = { store } >
    <
    PersistGate loading = { null }
    persistor = { persistor } >
    <
    App / >
    <
    /PersistGate> <
    /Provider> <
    /BrowserRouter>,
    document.getElementById('root')
);