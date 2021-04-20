import React from 'react';
import './App.css';
import AppBar from "./components/app-bar/AppBar"
import Menu from './components/menu/Menu';
import Content from "./components/content/Content";

function App() {
  return (
    <div className="App">
      <AppBar/>
      <div className="contentWrapper">
          <Menu/>
          <Content/>
      </div>
    </div>
  );
}

export default App;
