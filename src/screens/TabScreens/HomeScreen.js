import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Alert, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ShowTime from '../Home/ShowTime';
const HomeScreen = ({ navigation, route }) => {

  const [data, setData] = useState([])
  const { colors } = useTheme();

  const theme = useTheme();

  const fetchData = () => {
    fetch('http://192.168.43.160:3000/')
      .then(res => res.json())
      .then(results => {
        setData(results)
        setLoading(false)
      }).catch(err => {
        Alert.alert('something went wrong')
      })
  }
  const useEffect = () => {
    fetchData();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      {/* <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} /> */}
      <View style={{ flex: 1, padding: 20 }}>
        <ShowTime />
      </View>
      <View>
        <View style={{ padding: 8 }}>
          <Image
            style={styles.image}
            source={require('../../assets/bloodBank.gif')}
          />
          <View
          style={{
            borderBottomWidth: 4,
            borderBottomColor: 'red',
            width: 350,
            padding:2,
          }}
        />
        </View>
      </View>
      <View style={{ marginBottom: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
          <TouchableOpacity onPress={() => navigation.navigate('AddUser')}>
            <View style={styles.viewContainer}>
              <Ionicons name="ios-person-add" size={100} color="#EC050C" />
              <Card style={styles.cardStyle}><Text style={styles.textStyle}>Add New User</Text>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileList')}>
            <View style={styles.viewContainer}>
              <Ionicons name="ios-list" size={100} color="#EC050C" />
              <Card style={styles.cardStyle} ><Text style={styles.textStyle}>Donar List</Text>
              </Card>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
          <TouchableOpacity onPress={() => navigation.navigate('StockList')}>
            <View style={styles.viewContainer}>
              <Fontisto name="blood-drop" size={100} color="#EC050C" />
              <Card style={styles.cardStyle}><Text style={styles.textStyle}>Stock</Text>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <View style={styles.viewContainer}>
            <AntDesign name="edit" size={100} color="#EC050C" />              
            <Card style={styles.cardStyle} ><Text style={styles.textStyle}>Doctors</Text>
              </Card>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
            <View style={styles.viewContainer}>
              <MaterialIcons name="feedback" size={100} color="#EC050C" />
              <Card style={styles.cardStyle}><Text style={styles.textStyle}>Feedback</Text>
              </Card>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <View style={styles.viewContainer}>
              <Entypo name="old-phone" size={100} color='#EC050C' />
              <Card style={styles.cardStyle} ><Text style={styles.textStyle}>Contact Us</Text>
              </Card>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  //  justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  cardStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
    elevation: 0,
    justifyContent:'space-between'
  },
  viewContainer: {
    padding: 10,
    height: 150,
    width: 150,
    margin: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    // justifyContent:'space-between'
  },
  image: {
    width: 350,
    height: 105
  },
  imageBottomBorder: {
    borderBottomColor: 'red',
    borderBottomWidth: 4,
    width: width - 100,
  }
});