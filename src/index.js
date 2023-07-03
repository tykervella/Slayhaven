import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/index.css';
// imports css and allows the App.css style I used to be referenced within all children documents 
import './components/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
