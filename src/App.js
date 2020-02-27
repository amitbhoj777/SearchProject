import React from 'react';
import logo from './logo.svg';
import Routes from './routes.jsx';
import './App.css';
import { BrowserRouter, Switch, Route ,Link} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
