import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import global_ar from './translations/ar/global.json';
import global_yi from './translations/yi/global.json';
import global_be from './translations/be/global.json';
import global_ru from './translations/ru/global.json';
import global_ch from './translations/ch/global.json';
import global_fr from './translations/fr/global.json';
import global_ha from './translations/ha/global.json';
import global_it from './translations/it/global.json';
import global_co from './translations/co/global.json';
import global_po from './translations/po/global.json';
import global_ur from './translations/ur/global.json';









i18next.init({
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    },
    ar: {
      global: global_ar
    },
    yi: {
      global: global_yi
    },
    be: {
      global: global_be
    },
    ru: {
      global: global_ru
    },
    ch: {
      global: global_ch
    },
    fr: {
      global: global_fr
    },
    ha: {
      global: global_ha
    },
    it: {
      global: global_it
    },
    co: {
      global: global_co
    },
    po: {
      global: global_po
    },
    ur: {
      global: global_ur
    },
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>

    </Provider>

  </React.StrictMode>
);


