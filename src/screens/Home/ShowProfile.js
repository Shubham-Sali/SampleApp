import React, { useState } from 'react';
import {
    StyleSheet, Image, Text, View, Linking, Platform,
    ScrollView, TouchableOpacity, RefreshControl
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button, TextInput, FAB } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements'
import { Fontisto } from '@expo/vector-icons';

const ShowScreen = (props) => {

    const { _id, name, email, phone, position, followers, following, status,
        coverPicture, profilePicture, bloodGroup, gender, donationDate } = props.route.params.items;

    const [refreshing, setRefreshing] = useState(false);
    const [TextInputDisableStatus, setTextInputDisableStatus] = useState(false)

    function wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, [refreshing]);

    const openDail = () => {
        if (Platform.OS === 'android') {
            Linking.openURL(`tel:${phone}`)
        } else {
            Linking.openURL(`telprompt:${email}`)
        }
    }

    const onPressButton = () => {
        setTextInputDisableStatus(!TextInputDisableStatus);
    }

    return (
        <View style={styles.root}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <LinearGradient
                    colors={['#5c4393', '#653193']}
                    style={{ height: '20%' }}>
                    <Image
                        style={{ height: 170, width: 392, borderColor: '#EC050C', borderWidth: 3 }}
                        source={{ uri: coverPicture }}
                    />
                </LinearGradient>
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: profilePicture }}
                        />
                    </View>
                    <Title style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Title>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>{position}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Title style={{ fontSize: 15, fontWeight: 'bold', margin: 10 }}>Gender</Title>
                        <Title style={{ fontSize: 15, fontWeight: 'bold', margin: 10 }}>Followers</Title>
                        <Title style={{ fontSize: 15, fontWeight: 'bold', margin: 10 }}>Following</Title>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 5, paddingHorizontal: 5 }}>{gender}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 5, paddingHorizontal: 30 }}>{followers}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 5, paddingHorizontal: 15 }}>{following}</Text>
                    </View>
                </View>
                <ScrollView>
                    <Card style={styles.myCard}>
                        <View style={styles.cardContainer} >
                            <TouchableOpacity onPress={onPressButton}>
                                <Entypo name="edit" size={28} color="#EC050C" />
                            </TouchableOpacity>
                            <TextInput
                                placeholder="Enter Your Status"
                                underlineColorAndroid='transparent'
                                value={status}
                                style={[styles.TextInputStyle, { backgroundColor: TextInputDisableStatus ? '#C0C0C0' : '#FFF' }]}
                                editable={TextInputDisableStatus}
                            />
                        </View>
                    </Card>
                    <Card style={styles.myCard} onPress={() => {
                        Linking.openURL(`mailto:${email}`)
                    }}>
                        <View style={styles.cardContainer} >
                            <MaterialCommunityIcons name="email" size={30} color="#EC050C" />
                            <Text style={styles.mytext}>{email}</Text>
                        </View>
                    </Card>
                    <Card style={styles.myCard} onPress={() => openDail()}>
                        <View style={styles.cardContainer}>
                            <MaterialCommunityIcons name="phone" size={30} color="#EC050C" />
                            <Text style={styles.mytext}>{phone}</Text>
                        </View>
                    </Card>
                    <Card style={styles.myCard}>
                        <View style={styles.cardContainer} >
                            <MaterialCommunityIcons name="water" size={30} color="#EC050C" />
                            <Text style={styles.mytext}>{bloodGroup}</Text>
                        </View>
                    </Card>
                    <Card style={styles.myCard}>
                        <View style={styles.cardContainer}>
                            <Fontisto name="date" size={24} color="#EC050C" />
                            <Text style={styles.mytext}>{donationDate}</Text>
                        </View>
                    </Card>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <SocialIcon
                            type='twitter'
                            onPress={() => {
                                alert('twitter');
                            }}
                        />
                        <SocialIcon
                            type='facebook'
                            onPress={() => {
                                alert('facebook');
                            }}
                        />
                        <SocialIcon
                            type='linkedin'
                            onPress={() => {
                                alert('linkedin');
                            }}
                        />
                    </View>
                </ScrollView>
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
    button: {
        backgroundColor: "#EC050C",
        padding: 10,
        marginLeft: -80,
        marginTop: 40
    },
    signIn: {
        width: '30%',
        padding: 5,
        borderRadius: 3,
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    fab: {
        position: 'absolute',
        margin: 12,
        left: 75,
        bottom: 5
    },
    scrollView: {
        flex: 1,
    },
    myCard: {
        margin: 5,
    },
    TextInputStyle: {
        textAlign: 'center',
        height: 40,
        marginHorizontal: 10,
        bottom: 0,
        width: '90%',
    },
    cardContainer: {
        flexDirection: 'row',
        padding: 10
    },
    cardContainerText: {
        flexDirection: 'row'
    },
    mytext: {
        fontSize: 18,
        marginTop: 3,
        marginLeft: 12
    },
    modalView: {
        position: 'absolute',
        bottom: 2,
        width: '100%',
        backgroundColor: 'white'
    },
    modalButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 200 / 2,
        marginTop: -15,
        borderColor: '#EC050C',
        borderWidth: 5,
        // marginRight: 240
    }
})
export default ShowScreen;
