import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
//import reportWebVitals from './reportWebVitals';

//import StorePicker from './components/StorePicker';
import Router from './components/Router';

import './css/style.css';

ReactDOM.render(
  <>
    {/*<StorePicker />
    <App />*/}
    <Router />
  </>,
  document.querySelector('#root'));
//const root = ReactDOM.createRoot(document.querySelector('#root'));
//root.render(<p>HEYYYYYYYYYY</p>);

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/