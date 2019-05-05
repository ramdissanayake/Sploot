import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-bootstrap';
import './css/bootsnav.css';
import './css/animate.css';
import './css/style.css';


// import 'bootstrap/dist/js/bootstrap';

// import 'bootstrap';
import 'tachyons';
// import 'reactstrap';
// import '@material-ui/core';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
