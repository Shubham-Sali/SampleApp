import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Card, Button } from 'react-native-paper';
import StarRating from 'react-native-star-rating';

const Scoller = (props) => {

  const [modalVisible, setModalVisible]= useState(false);
  const review = [
    {
      reviewerName: 'Sushant',
      reviewImage: require('../assets/person1.jpeg'),
      rating: 5,
       degree: 'MS surgeon'
    },
    {
      reviewerName: 'Rajdip',
      reviewImage: require('../assets/person2.jpeg'),
      rating: 4,
      degree: 'MD surgeon'
    },
    {
      reviewerName: 'Vaibhav',
      reviewImage: require('../assets/person3.jpeg'),
      rating: 5,
      degree: 'MBBS surgeon'
    }
  ]

  const slotSelection = () => {
    Alert.alert('called')
    setModalVisible(true)
  }
  
  const renderList = (items) => {
    return (
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={items.reviewImage}
            style={{ width: 60, height: 60, borderRadius: 30, marginHorizontal: 10, marginVertical: 5 }}
          />
          <View style={{ flexDirection: 'column', paddingVertical: 8 }}>
            <Text style={styles.reviewerName}>{items.reviewerName}</Text>
            <Text >{items.degree}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={items.rating}
              selectedStar={items.rating}
              starSize={20}
              fullStarColor="#FDCC0D"
              starPadding={20}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button style={{margin:10}} mode="outlined" onPress={slotSelection} disabled>
            10.00
          </Button>
          <Button style={{margin:10}} mode="outlined" onPress={slotSelection} color="blue">
            11.00
          </Button>
          <Button  style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} color="blue">
            12.00
          </Button>
          <Button style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} disabled>
            01.00
          </Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button  style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} color="blue">
            02.00
          </Button>
          <Button style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} disabled>
            03.00
          </Button>
          <Button style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} color="blue">
            04.00
          </Button>
          <Button style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} color="blue">
            05.00
          </Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button   style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} color="blue">
            06.00
          </Button>
          <Button  style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} color="blue">
            07.00
          </Button>
          <Button style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} color="blue">
            08.00
          </Button>
          <Button style={{margin:10}} mode="outlined" onPress={() => console.log('Pressed')} disabled>
            09.00
          </Button>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={review}
          renderItem={({ item }) => {
            return renderList(item)
          }}
          keyExtractor={item => { item.id }}
        />
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 25,
    borderColor: 'lightgrey',
    borderWidth: 2
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  degreeHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey'
  },
  detailsText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  cardContainer: {
    height: 40,
    elevation: 0
  },
  textDetails: {
    fontSize: 15,
    textAlign: 'justify',
    padding: 10,
    lineHeight: 22
  },
  rating: {
    fontSize: 15,
    textAlign: 'justify',
    paddingHorizontal: 10
  },
  reviewerName: {
    fontSize: 18,
    textAlign: 'justify',
    fontWeight: '600'
  },
  degreeText: {
    fontWeight: '600',
    fontSize: 16
  }
})

export default Scoller;