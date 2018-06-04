import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyB1lQv-E1uZwi8L4Q5QZNExtRlgxDq5x_Y',
      authDomain: 'manager-a4763.firebaseapp.com',
      databaseURL: 'https://manager-a4763.firebaseio.com',
      projectId: 'manager-a4763',
      storageBucket: 'manager-a4763.appspot.com',
      messagingSenderId: '566362081710'
    };
    firebase.initializeApp(config);
  };

  render() {
    const store = createStore(reducers, applyMiddleware(thunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;