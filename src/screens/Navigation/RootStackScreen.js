import React from 'react';
import SplashScreen from '../AuthScreens/SplashScreen';
import SignInScreen from '../AuthScreens/SignInScreen';
import SignUpScreen from '../AuthScreens/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

 const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;