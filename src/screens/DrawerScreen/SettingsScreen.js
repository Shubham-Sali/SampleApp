import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card, Switch } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default class SettingsScreen extends React.Component {
  state = {
    isSwitchOn: false,
  };

  onToggleSwitch = () => this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));

  render() {
    var { width, height } = Dimensions.get('window')
    const { isSwitchOn } = this.state;
    return (
      <View>
        <ScrollView>
          <Card style={styles.cardContainer}>
            <Text style={styles.text}>Settings</Text>
          </Card>
          <Card style={styles.accountCard}>
            <Text style={styles.HeadingText}>MY ACCOUNT</Text>
          </Card>
          <Card style={styles.contentCard}>
            <View style={styles.contentView}>
              <Text style={{fontWeight:'bold'}}>Username</Text>
              <Text style={{ color: 'grey' }}>{'Shubham'}</Text>
            </View>
          </Card>
          <Card style={styles.contentCard}>
            <View style={styles.contentView}>
              <Text style={{fontWeight:'bold'}}>First Name</Text>
              <Text style={{ color: 'grey' }}>{'Shubham'}</Text>
            </View>
          </Card>
          <Card style={styles.contentCard}>
            <View style={styles.contentView}>
              <Text style={{fontWeight:'bold'}}>Last Name</Text>
              <Text style={{ color: 'grey' }}>{'Shubham'}</Text>
            </View>
          </Card>
          <Card style={{ padding: 20, elevation: 0.5 }}>
            <View style={styles.contentView}>
              <Text style={{fontWeight:'bold'}}>Gender</Text>
              <Text style={{ color: 'grey' }}>{'Shubham'}</Text>
            </View>
          </Card>
          <Card style={styles.accountCard}>
            <Text style={styles.HeadingText}>NOTIFICATION</Text>
          </Card>
          <Card style={{ padding: 20, elevation: 0.5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="ios-notifications" size={30} color="red" />
              <Text style={{ marginTop: 2, marginHorizontal: 8, fontSize: 15, fontWeight: '700' }}>Allow Push Notificcation</Text>
              <View style={{ marginHorizontal: 120 }}>
                <Switch
                  value={isSwitchOn}
                  onValueChange={this.onToggleSwitch}
                  color='red'
                />
              </View>
            </View>
          </Card>
          <Card style={styles.accountCard}>
            <Text style={styles.HeadingText}>THEMES</Text>
          </Card>
          <Card style={{ padding: 20, elevation: 0.5 }}>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="theme-light-dark" size={30} color="red" />
              <Text style={{ marginTop: 2, marginHorizontal: 8, fontSize: 15, fontWeight: '700' }}>Choose Theme</Text>
            </View>
          </Card>
          <Card style={styles.accountCard}>
            <Text style={styles.HeadingText}>Learn & Get Help</Text>
          </Card>
          <Card style={{ padding: 15, elevation: 0.5 }}>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5 name="hands-helping" size={30} color="red" />
              <Text style={{ marginTop: 2, marginHorizontal: 8, fontSize: 15, fontWeight: '700' }}>Help Center</Text>
            </View>
          </Card>
          <View style={{ flex: 1 }}>
            <View style={{ width: width, alignItems: 'center', marginTop: 50 }}><Text style={{ color: 'grey' }}>Version 1.0.0</Text></View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    padding: 10,
    height: 55,
    backgroundColor: 'red'
  },
  text: {
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  accountCard: {
    padding: 5,
    height: 40,
    backgroundColor: 'lightgrey',
    elevation: 0
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentCard: {
    padding: 20,
    marginBottom: 8,
    elevation: 0.5,
  },
  HeadingText: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'grey'
  }
});