import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About'
// import {Route, Routes } from 'react-router-dom';


function App() { 
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null) }, 3000);

  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode enabled', 'success')
      document.title = "TextUtils - Dark mode enabled"
      setInterval(() => {
        document.title = "Welcome";
      }, 2000);
      setInterval(() => {
        document.title = 'TextUtils';
      }, 1500);
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'pink'
      showAlert('Light mode enabled', 'success')
      document.title = "TextUtils - light mode enabled"
    }
  }
  return (
    <div className="App">
      <Navbar title='flipkart' mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Textform />
     
     
      
    </div>
  );
}

export default App;
