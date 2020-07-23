import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, FlatList, Alert, TouchableOpacity, Modal, TextInput,Platform } from 'react-native';
import { Card, FAB, Title, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ProfileList = ({ navigation, route, props }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false)

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

    useEffect(() => {
        fetchData()
    }, [])

    const renderList = ((items) => {
        console.log(items);
        return (
            <Card style={styles.myCard}
                onPress={() => navigation.navigate('ShowProfile', { items })}
            >
                <View style={{ flex: 1 }}>
                    <View style={styles.cardView}>
                        <Image
                            style={{ width: 70, height: 70, borderRadius: 50 }}
                            source={{ uri: items.profilePicture }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Title style={{ fontSize: 20, fontWeight: 'bold', marginBottom: -5 }}>{items.name}</Title>
                            <Text style={{ fontWeight: 'bold' }}>Gender: <Text style={{ color: "red" }}>{items.gender}</Text></Text>
                            <Text style={{ fontWeight: 'bold' }}>Blood Group: <Text style={{ color: "red" }}>{items.bloodGroup}</Text></Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row-reverse', marginTop: -70, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => { setModal(true) }}>
                            <Ionicons name="ios-water" size={50} color="red" style={{ paddingLeft: 5 }} />
                            <Text style={{ fontWeight: 'bold', marginRight: 8 }}>Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        setModal(false)
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Button
                                style={{
                                    alignSelf: 'flex-end',
                                    marginTop: -3,
                                    position: 'absolute'
                                }}
                                onPress={() => setModal(false)}>
                                <Entypo name="cross" size={24} color="black" />
                            </Button>
                            <Text style={styles.modalText}>User: <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{items.name}</Text></Text>
                            <Text style={styles.modalText}>How Many Times Donate: <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{'6'}</Text></Text>
                            <Text style={styles.modalText}>Last Donation Date: <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{items.donationDate}</Text></Text>
                            <Text style={styles.modalText}>Bank Name: <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{'Adarsh Blood Bank'}</Text></Text>
                            <Text style={styles.modalText}>City: <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{'Borivali, Mumbai'}</Text></Text>
                        </View>
                    </View>
                </Modal>
            </Card>
        )
    })
    return (
        <View style={styles.container}>
            <View style={styles.serachbox}>
                <TextInput
                    placeholder='Search Here'
                    placeholderTextColor='#000'
                    autoCapitalize='none'
                    style={{ flex: 1, padding: 0 }}
                />
                <Ionicons name='ios-search' size={20} />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item => `${item._id}`}
                onRefresh={() => fetchData()}
                refreshing={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    myCard: {
        margin: 5,
        flexDirection: 'row'
    },
    serachbox: {
     //   position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        marginTop:15,
        marginBottom:10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        backgroundColor: 'white'
      },
    container: { flex: 1 },
    cardView: {
        flexDirection: 'row',
        padding: 6
    },
    text: {
        fontSize: 18,
    },
    textFollowing: {
        fontSize: 15,
        padding: 5
    },
    modalButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        //  alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 40,
        height: 250,
        width: 300
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 15,
        margin: 5
    }
})

export default ProfileList;