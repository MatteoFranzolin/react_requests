import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FetchRequest from './fetch';
import AxiosRequest from './axiosRequest';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AxiosRequest />
  </React.StrictMode>
);