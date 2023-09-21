/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {AppStack} from './src/app-stack';

AppRegistry.registerComponent(appName, () => AppStack);
