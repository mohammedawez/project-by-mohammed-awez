import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Route from './components/Route';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Route />
  </React.StrictMode>
);


reportWebVitals();







// The lines which have been comited were importing data before now we changed ,read below line :- 

// inside that Index.js ,the lines which have comited that have been changed,because we have create some folder in SRC folder :-(name) compoenents folder,inside that we have created :-(name) Route.js file.  this file connected to index.js (this file only) ,so for that purpose lines which have commited have changed.
