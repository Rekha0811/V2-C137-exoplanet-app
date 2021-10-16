import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import PlanetDetails from './screens/PlanetDetails';

export default function App() {
 
    return (
      <AppContainer />
    );
 
}

const AppStackNavigator = createSwitchNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  PlanetDetails: {
    screen: PlanetDetails,
  },
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppStackNavigator);