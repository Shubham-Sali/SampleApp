import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import HomeScreen from '../TabScreens/HomeScreen';
import DetailsScreen from '../TabScreens/DetailsScreen';
import ExploreScreen from '../TabScreens/ExploerScreen';
import ProfileScreen from '../TabScreens/ProfileScreen';
import ProfileList from '../Home/ProfileList';
import AddUser from '../Home/AddUser';
import Contact from '../Home/Contact';
import EditProfile from '../Home/EditProfile';
import Feedback from '../Home/Feedback';
import ShowProfile from '../Home/ShowProfile';
import StockList from '../Home/StockList';
import Doctor from '../Home/Doctor';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#EC050C',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Hospital',
        tabBarColor: '#FF6347',
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="map-marker-alt" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Appoinment',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="calendar" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;



const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#EC050C',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Overview',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#EC050C" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
     <HomeStack.Screen name='AddUser' component={AddUser} options={{headerTitleAlign:'center',
      title: 'Add New User',
    }} />
    <HomeStack.Screen name='ProfileList' component={ProfileList} options={{headerTitleAlign:'center',
      title: 'Blood Donar List'
    }} />
     <HomeStack.Screen name='EditProfile' component={EditProfile} options={{headerTitleAlign:'center',
      title: 'Doctor List'
    }} />
     <HomeStack.Screen name='ShowProfile' component={ShowProfile} options={{headerTitleAlign:'center',
      title: 'Show Profile'
    }} />
     <HomeStack.Screen name='Contact' component={Contact} options={{headerTitleAlign:'center',
      title: 'Contact'
    }} />
     <HomeStack.Screen name='Feedback' component={Feedback} options={{headerTitleAlign:'center',
      title: 'Feedback'
    }} />
     <HomeStack.Screen name='StockList' component={StockList} options={{headerTitleAlign:'center',
      title: 'Stock List'
    }} />
     <HomeStack.Screen name='Doctor' component={Doctor} options={{headerTitleAlign:'center',
      title: 'Doctor Details'
    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Appoinment" component={DetailsScreen} options={{ headerTitleAlign: 'center',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#694fad',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#694fad" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </ProfileStack.Navigator>
);
