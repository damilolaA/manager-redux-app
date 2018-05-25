import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

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
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;