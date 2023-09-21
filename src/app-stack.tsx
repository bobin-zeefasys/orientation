import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Orientation from 'react-native-orientation-locker';

import App from '../App';
import {VideoPlayer} from '../src/video-player';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

function AppStack() {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={options} />
        <Stack.Screen name="Player" component={VideoPlayer} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {AppStack};
