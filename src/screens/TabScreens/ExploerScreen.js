import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Animated, Image, TouchableOpacity, Dimensions, Platform, _ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';

import Iconicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { markers, mapDarkstyle, mapStandardStyle } from '../../modal/mapData';
import StarRating from '../../modal/starRating';

import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;


const ExploreScreen = () => {
  const theme = useTheme();

  const initialMapState = {
    markers,
    categories: [
      {
        name: 'Cancer Specialist',
        icon: <FontAwesome5 name="hospital" style={styles.chipsIcon} size={18} color="#D20309" />
      },
      {
        name: 'Accident Specialist',
        icon: <MaterialCommunityIcons style={styles.chipsIcon} name="hospital-marker" size={18} color="#D20309" />
      },
      {
        name: 'ENT Specialist',
        icon: <FontAwesome style={styles.chipsIcon} name="snapchat-ghost" size={18} color="#D20309" />
      },
      {
        name: 'Heart Specialist',
        icon: <FontAwesome5 style={styles.chipsIcon} name="hospital-symbol" size={18} color="#D20309" />
      },
      {
        name: 'Cancer Specialist',
        icon: <FontAwesome5 style={styles.chipsIcon} name="hospital-alt" size={18} color="#D20309" />
      },
    ],
    region: {
      latitude: 21.7469,
      longitude: -74.1240,
      latitudeDelta: 0,
      longitudeDelta: 0.05
    },
  };

  const [state, setState] = React.useState(initialMapState);
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3)
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index)
          mapIndex = index;
        const { coordinate } = state.markers[index];
        _map.current.animateToRegion(
          {
            ...coordinate,
            latitudeDelta: state.region.latitudeDelta,
            longitudeDelta: state.region.longitudeDelta,
          },
          350
        );
      }, 1000)
    })
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp'
    });
    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerId = mapEventData._targetInst.return.key;
    let x = (markerId * CARD_WIDTH) + (markerId * 20);
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }
    //_Scrollview.current.scrollTo({x : x, y: 0, animated: true});
    _Scrollview.current.getNode().scrollTo({ x: x, y: 0, animated: true });
  }

  const _map = React.useRef(null);
  const _Scrollview = React.useRef(null);

  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        customMapStyle={theme.dark ? mapDarkstyle : mapStandardStyle}
      >
        {state.markers.map((marker, index) => {
          const scalStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              }
            ]
          }
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
              <Animated.View style={styles.markerWrap}>
                <Animated.Image
                  source={require('../../assets/map_marker.png')}
                  style={[styles.marker, scalStyle]}
                  resizeMode='cover'
                />
                <Callout tooltip>
                  <View>
                    <View style={styles.bubble}>
                      <Text style={styles.name}>{marker.name}</Text>
                      {/* <Text>A short description</Text> */}
                      <Image style={styles.image}
                        source={require('../../assets/blood1.png')} />
                    </View>
                    <View style={styles.arrowBorder} />
                    <View style={styles.arrow} />
                  </View>
                </Callout>
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
      <View style={styles.serachbox}>
        <TextInput
          placeholder='Search Here'
          placeholderTextColor='#000'
          autoCapitalize='none'
          style={{ flex: 1, padding: 0 }}
        />
        <Iconicons name='ios-search' size={20} />
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipsScrollView}
        contentInset={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0
        }}
      >
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.chipsItem} onPress={(e) => onHotelNamePress(e)}>
            {category.icon}
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Animated.ScrollView
        ref={_Scrollview}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment='center'
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0
        }}
        onScroll={
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: mapAnimation,

                  }
                },
              },
            ],
            { useNativeDriver: true }
          )}
      >
        {state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={marker.images}
              style={styles.cardImages}
              resizeMode='cover'
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardTitle}>{marker.title}</Text>
              <StarRating rating={marker.rating} reviews={marker.reviews} />
              <Text numberOfLines={1} style={styles.cardDiscription}>{marker.description}</Text>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => { }}
                  style={[styles.signIn, {
                    borderColor: '#FF6347',
                    borderWidth: 1
                  }]}
                >
                  <Text style={[styles.textSign, { color: '#FF6347' }]}>Get Full Address</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 80,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  serachbox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: 'white'
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden'
  },
  cardImages: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  textContent: {
    flex: 2,
    padding: 10
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  cardDiscription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})
