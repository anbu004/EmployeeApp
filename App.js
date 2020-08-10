/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppRoutes from './src/navigation/Routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
  export const store = createStore(applyMiddleware(thunk));
  
  export default class App extends Component {
   
    render() {
      return (
  
     <Provider store={store}>
          <AppRoutes />
        </Provider>
      
      )
   
}
  }
