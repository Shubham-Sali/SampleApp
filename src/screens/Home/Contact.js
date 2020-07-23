import React from 'react'; 
import { View, Text, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-paper';


const Contact = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image 
             source={require('../../assets/blood.jpg')}
             style={styles.image}
            />
            <Text style={{fontSize:30,fontWeight:'bold'}}>Contact Us</Text>
            <Text style={styles.text}>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</Text>
            <Text style={{padding:10}}>Contact No:{'1234567890'}</Text>
            <Text>Email:{'abc@email.com'}</Text>
            <Button
                style={{ backgroundColor:'#D20309',width:'95%',marginTop:25 }}
                mode='contained'
                color='black'
                onPress={() => navigation.goBack()}>
                <Text style={{ color: 'white' }}>Go to Home</Text>
            </Button>
        </View>
    )
}

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center'
    },
    image: {
        width:300,
        height:300
    },
    text:{
        textAlign:'center', 
        paddingHorizontal:15, 
        paddingVertical:20,
        padding:15,
        fontWeight:'bold',
        fontSize:15,
        color:'gray',
        lineHeight:25
    }
})