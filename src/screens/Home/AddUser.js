import React, { useState } from 'react';
import { StyleSheet, View, Modal, Alert, TouchableOpacity, modal, Text, ScrollView } from 'react-native';
import { TextInput, Button, RadioButton  } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import { Fontisto } from '@expo/vector-icons'; 


const AddUser = ({ navigation, route }) => {

    const getDetails = (type) => {
        if (route.params) {
            switch (type) {
                case 'name':
                    return route.params.name
                case 'phone':
                    return route.params.phone
                case 'email':
                    return route.params.email
                case 'salary':
                    return route.params.salary
                case 'position':
                    return route.params.position
                case 'picture':
                    return route.params.picture
                case 'password':
                    return route.params.password
            }
        } return ''
    }

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')
    const [profilePicture, setPictureProfile] = useState('')
    const [coverPicture, setCoverProfile] = useState('')
    const [followers, setFollowers] = useState('')
    const [following, setFollowing] = useState('')
    const [status, setStatus] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [modal, setModal] = useState(false)
    const [enableshift, setenableShift] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [gender, setRadio] = useState('male');
    const [donationDate, setDonationDate] = useState('');
   

    const submitData = () => {
        if (name == '' || email == '' || phone == '' || profilePicture == '' || coverPicture == '' || 
            followers == '' || followers == '' || following == '' || status == '' || bloodGroup == '' ||
            gender == '' || donationDate == '') {
            Alert.alert('Please Enter all fileds');
        } else {
        fetch('http://192.168.43.160:3000/send-data', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                position,
                phone,
                email,
                following,
                followers,
                status,
                profilePicture,
                coverPicture,
                bloodGroup, 
                gender,
                donationDate
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is successfully save!`)
                navigation.navigate('Home')
            }).catch(err => {
                Alert.alert('something went wrong')
            })
        }
    }

    const updateDetails = () => {
        fetch('http://192.168.43.160:3000/update', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: route.params._id,
                name,
                position,
                phone,
                email,
                following,
                followers,
                status,
                profilePicture,
                coverPicture,
                bloodGroup, 
                gender,
                donationDate
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is successfully updated!`)
                navigation.navigate('Home')
            }).catch(err => {
                Alert.alert(`${data.name} is successfully updated!`)
            })
    }

    const picFromGallery = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            })
            if (!data.cancelled) {
                let newFile = {
                    uri: data.uri,
                    type: `test/${data.uri.split('.')[1]}`,
                    name: `test.${data.uri.split('.')[1]}`
                }
                handleUpload(newFile)
            }
        } else {
            Alert.alert('You need to give up permmission to work')
        }
    }

    const CameraLaunch = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA)
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            })
            if (!data.cancelled) {
                let newFile = {
                    uri: data.uri,
                    type: `test/${data.uri.split('.')[1]}`,
                    name: `test.${data.uri.split('.')[1]}`
                }
                handleUpload(newFile)
            }
        } else {
            Alert.alert('You need to give up permmission to work')
        }
    }

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'employeeApp')
        data.append('cloud_name', 'dc5scdp8p')

        fetch('https://api.cloudinary.com/v1_1/dc5scdp8p/image/upload', {
            method: 'post',
            body: data
        }).then(res => res.json()).
            then(data => {
                console.log(data);
                if (coverPicture) {
                    setPictureProfile(data.url)
                    setModal(false)
                } else {
                    setCoverProfile(data.url)
                    setModal(false)
                }
            }).catch(err => {
                Alert.alert('something went wrong')
            })
    }

    const checkMale = () =>{
        setRadio('male');
    }

    const checkFemale = () =>{
        setRadio('female');
    }


    return (
        <View style={styles.root}>
            <ScrollView>
                {/* <KeyboardAvoidingView behavior='position' enabled={enableshift}> */}
                <TextInput
                    style={styles.inputStyle}
                    label='Name'
                    value={name}
                    mode='outlined'
                    theme={themes}
                    onFocus={() => setenableShift(false)}
                    onChangeText={text => setName(text)}
                />
                <View style={{flexDirection:'row', padding:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{paddingTop:8}}>Male</Text>
                        <RadioButton
                            value="male"
                            status={gender === 'male' ? 'checked' : 'unchecked'}
                            onPress={checkMale}
                            color='#EC050C'
                        />
                    </View>
                    <View style={{flexDirection:'row',paddingHorizontal:20}}>
                        <Text style={{paddingTop:8}}>Female</Text>
                        <RadioButton
                            value="female"
                            status={gender === 'female' ? 'checked' : 'unchecked'}
                            onPress={checkFemale}
                            color='#EC050C'
                        />
                    </View>
                </View>
                <TextInput
                    style={styles.inputStyle}
                    label='Email'
                    value={email}
                    mode='outlined'
                    theme={themes}
                    keyboardType="email-address"
                    onFocus={() => setenableShift(true)}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.inputStyle}
                    label='Phone'
                    value={phone}
                    mode='outlined'
                    theme={themes}
                    onFocus={() => setenableShift(true)}
                    keyboardType='phone-pad'
                    maxLength={10}
                    onChangeText={text => setPhone(text)}
                />
                <TextInput
                    style={styles.inputStyle}
                    label='Occupation'
                    value={position}
                    mode='outlined'
                    onFocus={() => setenableShift(true)}
                    theme={themes}
                    onChangeText={text => setPosition(text)}
                />
                 <TextInput
                    style={styles.inputStyle}
                    label='Blood Group'
                    value={bloodGroup}
                    mode='outlined'
                    theme={themes}
                    onFocus={() => setenableShift(true)}
                    onChangeText={text => setBloodGroup(text)}
                />
                 {/* <TextInput style={{...styles.inputStyle}}
                    label='Last Donation Date'
                    value={date}
                    mode='outlined'
                    theme={themes}
                    onFocus={() => setenableShift(true)}
                    onChangeText={text => setDonationDate(text)}
                /> */}

                <DatePicker
                   style={styles.DatePicker}
                    date={donationDate} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="Last Donation Date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1960"
                    maxDate="01-01-2030"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          right: 0,
                        },
                      }}
                    onDateChange={date => setDonationDate(date)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        style={{ ...styles.inputStyle, width: 185 }}
                        label='Following'
                        value={following}
                        mode='outlined'
                        theme={themes}
                        onFocus={() => setenableShift(true)}
                        onChangeText={text => setFollowing(text)}
                    />
                    <TextInput
                        style={{ ...styles.inputStyle, width: 185 }}
                        label='Followers'
                        value={followers}
                        mode='outlined'
                        theme={themes}
                        onFocus={() => setenableShift(true)}
                        onChangeText={text => setFollowers(text)}
                    />
                </View> 
                <TextInput
                    style={styles.inputStyle}
                    label='Status'
                    value={status}
                    mode='outlined'
                    theme={themes}
                    onFocus={() => setenableShift(true)}
                    onChangeText={text => setStatus(text)}
                />
                <View style={styles.modalButtonView}>
                    <Button icon={profilePicture === '' ? 'upload' : 'check'}
                        style={{ backgroundColor: '#EC050C' }}
                        mode='contained'
                        color='black'
                        onPress={() => setModal(true)}>
                        <Text style={{ color: 'white' }}>Upload Profile</Text>
                    </Button>
                    <Button icon={coverPicture === '' ? 'upload' : 'check'}
                        style={{ backgroundColor: '#EC050C' }}
                        mode='contained'
                        color='black'
                        onPress={() => setModal(true)}>
                        <Text style={{ color: 'white' }}> Upload Cover</Text>
                    </Button>
                </View>
                <Button
                    icon='content-save'
                    style={{ margin: 5, backgroundColor: '#EC050C' }}
                    mode='contained'
                    onPress={() => submitData()}>
                    <Text style={{ color: 'white' }}>Save</Text>
                </Button>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        setModal(false)
                    }}>
                    <View style={styles.modalView}>
                        <View style={styles.modalButtonView}>
                            <Button icon='camera'
                                mode='contained'
                                style={{ backgroundColor: '#EC050C' }}
                                onPress={() => CameraLaunch()}>
                                <Text style={{ color: 'white' }}>Camera</Text>
                            </Button>
                            <Button icon='image-area'
                                mode='contained'
                                style={{ backgroundColor: '#EC050C' }}
                                onPress={() => picFromGallery()}>
                                <Text style={{ color: 'white' }}>Gallery</Text>
                            </Button>
                        </View>
                        <Button
                            theme={themes}
                            onPress={() => setModal(false)}>
                            <Text>Cancel</Text>
                        </Button>
                    </View>
                </Modal>
                {/* </KeyboardAvoidingView> */}
            </ScrollView>
        </View>
    )
}

const themes = {
    colors: {
        primary: '#EC050C'
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    inputStyle: {
        margin: 5,
        // backgroundColor:'#EC050C'
    },
    DatePicker: {
        margin:5,
        width:380,
    },
    modalButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    modalView: {
        position: 'absolute',
        bottom: 2,
        width: '100%',
        backgroundColor: 'white'

    },
    errorMsg: {
        color: 'red',
        fontSize: 14
    },
})

export default AddUser;