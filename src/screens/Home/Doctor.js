import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import StarRating from 'react-native-star-rating';

console.disableYellowBox = true;

const Doctor = (props) => {
    const { id, name, Degree, Details, image, specalist, rating, reviewRating } = props.route.params.items
    const review = [
        {
            reviewerName: 'Sushant',
            reviewImage: require('../../assets/person1.jpeg'),
            rating: 5,
            review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
        },
        {
            reviewerName: 'Rajdip',
            reviewImage: require('../../assets/person2.jpeg'),
            rating: 4,
            review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
        },
        {
            reviewerName: 'Vaibhav',
            reviewImage: require('../../assets/person3.jpeg'),
            rating: 5,
            review: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
        }
    ]

    const renderList = (items) => {
        return (
            <View style={{ flex: 1, paddingBottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={items.reviewImage}
                        style={{ width: 60, height: 60, borderRadius: 30, marginHorizontal: 10, marginVertical: 5 }}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.reviewerName}>{items.reviewerName}</Text>
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
                <Text style={styles.textDetails}>{items.review}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={image}
                        style={styles.image}
                    />
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.degreeText}>{Degree}</Text>
                </View>
                <View>
                    <Card style={styles.cardContainer}>
                        <Text style={styles.detailsText}>Details</Text>
                    </Card>
                    <Text style={styles.textDetails}>{Details}</Text>
                </View>
                <View>
                    <Card style={{ ...styles.cardContainer, marginVertical: 5 }}>
                        <Text style={styles.detailsText}>Rating</Text>
                    </Card>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold', paddingHorizontal: 10 }}>{reviewRating}</Text>
                        <StarRating
                            disabled={false}
                            emptyStar="ios-star-outline"
                            fullStar="ios-star"
                            halfStar="ios-star-half"
                            iconSet="Ionicons"
                            maxStars={5}
                            rating={rating}
                            selectedStar={rating}
                            fullStarColor="#FDCC0D"
                            halfStarColor="green"
                            halfStarEnabled
                            starPadding={10}
                        />
                    </View>
                </View>
                <Card style={{ ...styles.cardContainer, marginVertical: 15 }}>
                    <Text style={styles.detailsText}>Review</Text>
                </Card>
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
export default Doctor;

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
        lineHeight: 22,
        paddingVertical: 8,
        fontWeight: '600'
    },
    degreeText: {
        fontWeight: '600',
        fontSize: 16
    }
})