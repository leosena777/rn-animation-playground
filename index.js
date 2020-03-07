import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Router from './src/Router';

export default function App() {
  return <Router />;
}

AppRegistry.registerComponent(appName, () => App);
