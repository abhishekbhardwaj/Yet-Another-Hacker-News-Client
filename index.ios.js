import { AppRegistry } from 'react-native';
import App from './src/App';
import firebase from './src/config/firebase.js'; // Initializes it

AppRegistry.registerComponent('HackerNews', () => App);
