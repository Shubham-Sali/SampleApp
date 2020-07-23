import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class ShowTime extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: ''
        };
    }

    componentDidMount() {
        this.Clock = setInterval(() => this.GetTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.Clock);
    }

    GetTime() {
        var time, TimeType, hour, minutes, seconds, fullTime;
        time = new Date();
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        hour = time.getHours();
        if (hour <= 11) {
            TimeType = 'AM';
        }
        else {
            TimeType = 'PM';
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (hour == 0) {
            hour = 12;
        }
        minutes = time.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }
        seconds = time.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        fullTime = date + '/' + month + '/' + year + ' ' + hour.toString() + ':' + minutes.toString() + ':' + seconds.toString() + ' ' + TimeType.toString();
        this.setState({
            time: fullTime
        });
    }


    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.TextStyle}>User Login At: {this.state.time} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            justifyContent: 'center',
            alignItems: 'center',

        },
        TextStyle:
        {
            fontSize: 15,
            textAlign: 'center',
            color: 'black',
            marginBottom: 10,
            fontWeight:'bold'
        }

    });