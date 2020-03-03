import React, { Component } from 'react';
import AppNavbar from './component/AppNavbar';
import ShoppingList from './component/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar></AppNavbar>
        <ShoppingList></ShoppingList>
      </div>
      </Provider>
    );
  }
}

export default App;