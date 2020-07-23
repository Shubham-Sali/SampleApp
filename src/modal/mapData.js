const Images = [
    {image: require('../assets/hospital1.jpg')},
    {image: require('../assets/hospital2.jpg')},
    {image: require('../assets/hospital3.jpg')},
    {image: require('../assets/hospital4.jpg')},
    {image: require('../assets/hospital6.jpg')},
];

export const markers = [
    {
        coordinate: {
            latitude: 21.3649,
            longitude:74.2349,
        },
        title: "Kurla Government Hospital",
        description: '12, Vitthaldas Thackersey Marg, Mumbai, Maharashtra',
        images : Images[0].image,
        rating: 4,
        reviews: 99,
        name: 'Cancer Specialist',
    },
    {
        coordinate: {
            latitude: 21.3671,
            longitude: 74.2426,
        },
        title: "Sir J. J. Mahanagr Hospital",
        description: '15, Pedder Rd, IT Colony, Tardeo, Mumbai, Maharashtra',
        images : Images[1].image,
        rating: 3,
        reviews: 50,
        name: 'Accident Specialist',
    },
    {
        coordinate: {
            latitude: 21.3667,
            longitude: 74.2406,
        },
        title: "Karve Road Government Hospital",
        description: '15/17, Maharshi Karve Rd, Charni Road East, Mumbai, Maharashtra',
        images : Images[2].image,
        rating: 5,
        reviews: 50,
        name: 'ENT Specialist',
    },
    {
        coordinate: {
            latitude: 21.3691,
            longitude: 74.2404,
        },
        title: "Bandra Government Hospital",
        description: 'Dr Babasaheb Ambedkar Rd, Mumabi, Maharashtra',
        images : Images[3].image,
        rating: 4,
        reviews: 90,
        name: 'Heart Specialist',
    },
    {
        coordinate: {
            latitude: 21.3711,
            longitude: 74.2450,
        },
        title: "Tata Cancer Hospital",
        description: 'Acharya Donde Marg, Parel, Mumbai, Maharashtra',
        images : Images[4].image,
        rating: 2,
        reviews: 80,
        name: 'Cancer Specialist',
    },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];
  
export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];