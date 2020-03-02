import React, { Component } from 'react';
import AppNavbar from './component/AppNavbar';
import ShoppingList from './component/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar></AppNavbar>
        <ShoppingList></ShoppingList>
      </div>
    );
  }
}

export default App;
