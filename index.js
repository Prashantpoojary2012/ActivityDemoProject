/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppSetup from './src/Setup/Setup';

AppRegistry.registerComponent(appName, () => AppSetup);
