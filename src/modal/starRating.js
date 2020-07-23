import  React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const starRating = (props) => {
    let stars = [];
    for (var i=1; i<=5; i++) {
        let name = 'ios-star'
        if (i > props.rating ) {
            name = 'ios-star-outline'
        }
        stars.push((<Ionicons name ={name} size={15} style={styles.star} key={i} />))
    }

    return(
        <View style={styles.container}>
            { stars }
            <Text style={styles.text}>({props.reviews})</Text>
        </View>
    )
}

export default starRating;

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    star: {
        color:'#FCCF03',
        fontSize: 20
    },
    text: {
        paddingLeft: 5,
        fontSize: 15,
        fontWeight: 'bold'
    }
})