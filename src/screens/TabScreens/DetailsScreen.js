import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from "react-native";
import Scroller from  '../../modal/scoller';
import { Agenda } from 'react-native-calendars';
import { FAB } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; 

const testIDs = require('../../modal/testID');

export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };
  handleOpen = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

  };
  handleClose = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  render() {
    const screenHeight = Dimensions.get("window").height;

    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <Agenda
          renderEmptyData={() => { return (<View />);
           }}
           theme={{
            selectedDayBackgroundColor: '#1f65ff',
          }}
        />
        <FAB
          style={styles.fab}
          small={false}
          icon="plus"
          color='white'
          theme={{ colors: { accent: '#1f65ff' } }}
          onPress={this.handleOpen}
        />
        <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              <TouchableOpacity onPress={this.handleClose} style={{paddingLeft:330}}>
                 <Ionicons name="ios-close" size={34} color="black" />
              </TouchableOpacity>
              <Scroller />
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  sheet: {
    position: "absolute",
    top: Dimensions.get("window").height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  popup: {
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 500,
  },
  fab: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 0
  }
});