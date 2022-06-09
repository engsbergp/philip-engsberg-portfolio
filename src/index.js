import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ImageModalProvider from "./context/imageModalContext"

ReactDOM.render(
  <React.StrictMode>
    <ImageModalProvider>
      <App />
    </ImageModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

