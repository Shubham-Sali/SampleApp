import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Button, Text
} from "react-native";
import BackgroundTimer from 'react-native-background-timer';


export default class ProfileScreen extends React.Component {
  static defaultProps;
  constructor(props) {
    super(props);
    this.state = {
      interval : '',
      seconds : 0
    }
  }

onStart = () => {
  if(Platform.OS === "android") {
    BackgroundTimer.start();
  }
  this.state.interval = BackgroundTimer.setInterval(() => {
    this.setState({
      seconds: this.state.seconds + 1
    })
  }, 1000); 
}

onPause = () => {
  BackgroundTimer.clearInterval(this.state.interval)
}

onReset = () => {
  this.setState({
    seconds : 0
  })
  BackgroundTimer.clearInterval(this.state.interval)
}



render() {
    return(
      <View style={styles.container}>
        <Text style={styles.secondText}>{this.state.seconds}</Text>
        <View style={styles.buttonWrapper}>
          <Button
            title='Start'
            onPress={this.onStart}
          />
          <Button
            title='Pause'
            onPress={this.onPause}
          />
          <Button
            title='Reset'
            onPress={this.onReset}
          />
        </View>
      </View>
    )
  }
 }

 const styles = StyleSheet.create({
   container: {
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  secondText: {
    fontSize: 25,
  }
 })