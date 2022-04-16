import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <LightgalleryProvider lightgallerySettings={{addClass:'lightgallery'}} onAfterSlide={(event, lightgallery_object) => {
                    console.log(lightgallery_object);
                    console.log(
                        `Prev slide index: ${event.detail.prevIndex}; Current index: ${event.detail.index}`
                    );
                }}>
        <App />
        </LightgalleryProvider>

        {/* <AppFirestore/> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
