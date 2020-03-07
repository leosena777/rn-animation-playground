import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import Opacity from '../Screens/BasicExempleAnimated/Opacity';
import Translate from '../Screens/BasicExempleAnimated/Translate';
import Scale from '../Screens/BasicExempleAnimated/Scale';
import Width_Height from '../Screens/BasicExempleAnimated/Width_Height';
import PositionAbsolute from '../Screens/BasicExempleAnimated/PositionAbsolute';

const Stack = createStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Opacity" component={Opacity} />
        <Stack.Screen name="Translate" component={Translate} />
        <Stack.Screen name="Scale" component={Scale} />
        <Stack.Screen name="Width_Height" component={Width_Height} />
        <Stack.Screen name="PositionAbsolute" component={PositionAbsolute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
