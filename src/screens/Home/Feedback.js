import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Feedback extends Component {
    constructor() {
        super();
        this.state = {
            checkedBad: false,
            checkedAverage: false,
            checkedGood: false,
            checkedVeryGood: false,
            checkedAwesome: false,
            text: ''
        }
    }

    badChecked = () => {
        if (this.state.checkedBad === false) {
            this.setState({ checkedBad: !this.state.checkedBad })
        } else {
            this.setState({ checkedBad: !this.state.checkedBad })
        }
    }
    averageChecked = () => {
        if (this.state.checkedAverage === false) {
            this.setState({ checkedAverage: !this.state.checkedAverage })
        } else {
            this.setState({ checkedAverage: !this.state.checkedAverage })
        }
    }
    goodChecked = () => {
        if (this.state.checkedGood === false) {
            this.setState({ checkedGood: !this.state.checkedGood })
        } else {
            this.setState({ checkedGood: !this.state.checkedGood })
        }
    }
    veryGoodChecked = () => {
        if (this.state.checkedVeryGood === false) {
            this.setState({ checkedVeryGood: !this.state.checkedVeryGood })
        } else {
            this.setState({ checkedVeryGood: !this.state.checkedVeryGood })
        }
    }
    awesomeChecked = () => {
        if (this.state.checkedAwesome === false) {
            this.setState({ checkedAwesome: !this.state.checkedAwesome })
        } else {
            this.setState({ checkedAwesome: !this.state.checkedAwesome })
        }
    }

    onSubmit = () => {
        if (this.state.text == '') {
            Alert.alert('Please write you are valuable feedback!!!')
        } else {
            Alert.alert('Thank you for you are valuable feedback!!!')
            this.state.text.clear();
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={4}
                    label='Write Your Feedback'
                    mode='outlined'
                    theme={themes}
                    ref={input => { this.state.text = input }}
                    onChangeText={(text) => { this.setState({ text: text }) }}
                />
                <Text style={{ marginTop: 25, fontSize: 20, fontWeight: 'bold' }}>Rate Us Your Experience!</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <TouchableOpacity onPress={this.badChecked}>
                        <Entypo name="emoji-sad" size={80} color="#EC050C" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.averageChecked}>
                        <MaterialIcons name="mood-bad" size={80} color="#EC050C" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goodChecked}>
                        <Entypo name="emoji-neutral" size={80} color="#EC050C" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {this.state.checkedBad === true ?
                        <Entypo name="check" size={30} color="green" style={{ paddingLeft: 40 }} />
                        :
                        <Text style={{ paddingLeft: 40 }}>Bad</Text>
                    }
                    {this.state.checkedAverage === true ?
                        <Entypo name="check" size={30} color="green" style={{ paddingLeft: 10 }} />
                        :
                        <Text style={{ paddingLeft: 5 }}>Average</Text>
                    }
                    {this.state.checkedGood === true ?
                        <Entypo name="check" size={30} color="green" style={{ paddingRight: 35 }} />
                        :
                        <Text style={{ paddingRight: 40 }}>Good</Text>
                    }
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 15 }}>
                    <TouchableOpacity onPress={this.veryGoodChecked}>
                        <Entypo name="emoji-happy" size={80} color="#EC050C" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.awesomeChecked}>
                        <Entypo name="emoji-flirt" size={80} color="#EC050C" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    {this.state.checkedVeryGood === true ?
                        <Entypo name="check" size={30} color="green" style={{ paddingLeft: 20 }} />
                        :
                        <Text style={{ paddingLeft: 20 }}>Very Good</Text>
                    }
                    {this.state.checkedAwesome === true ?
                        <Entypo name="check" size={30} color="green" style={{ paddingRight: 28 }} />
                        :
                        <Text style={{ paddingRight: 20 }}>Awesome</Text>
                    }
                </View>
                <View style={{ marginTop: 25 }}>
                    <Button
                        style={{ backgroundColor: '#EC050C', padding: 5 }}
                        mode='contained'
                        color='black'
                        onPress={this.onSubmit}>
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const themes = {
    colors: {
        primary: '#EC050C'
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50
    },
    textInput: {
        height: 120,

    }
})