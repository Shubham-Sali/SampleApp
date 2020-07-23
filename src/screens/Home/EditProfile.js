import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Card, Title } from 'react-native-paper';
import StarRating from 'react-native-star-rating';

const EditProfile = ({ navigation, props }) => {

    const data = [
        {
            id: 1,
            name: 'Dr.Kolhe',
            specalist: 'Heart Specalist',
            image: require('../../assets/doctor1.jpg'),
            reviewRating: '4.0',
            rating: 4,
            Degree: 'MBBS Heart Specalist',
            Details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
            id:2,
            name: 'Dr.Torne',
            specalist: 'ENT Specalist',
            image: require('../../assets/doctor2.jpg'),
            reviewRating: '5.0',
            rating:5,
            Degree: 'MS ENT Specalist',
            Details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id:3,
            name: 'Dr.Tambe',
            specalist: 'Cancer Specalist',
            image: require('../../assets/doctor3.jpg'),
            reviewRating: '3.0',
            rating:3,
            Degree: 'MBBS Cancer Specalist',
            Details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
    ]

    const renderList = (items) => {
        return (
            <Card style={styles.myCard }
                onPress={() => navigation.navigate('Doctor', {items})}>
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 70, height: 70, borderRadius: 50, borderWidth:1, borderColor:'lightgrey' }}
                        source={items.image}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Title style={{ fontSize: 20, fontWeight: 'bold', marginBottom: -5 }}>{items.name}</Title>
                        <Text style={{ color: "red" }}>{items.specalist}</Text>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={items.rating}
                            selectedStar={items.rating}
                            starSize={18}
                            fullStarColor="#FDCC0D"
                            starPadding={20}
                        />
                    </View>
                </View>
            </Card>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                 keyExtractor={item => {item.id}}
            />
        </View>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    myCard: {
        margin: 5,
        flexDirection: 'row'
    },
    container: { flex: 1 },
    cardView: {
        flexDirection: 'row',
        padding: 6
    },
})