
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { exp } from 'react-native-reanimated';


const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidPassword: true,
    isValidName: true,
    isValidEmail: true
  });
  const colors = useTheme();

  const registerUser = () => {
    navigation.goBack();
  }

  const textInputChange = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val.trim().length >= 4 && reg.test(val) === true) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  }
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}
      >
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#05375a"
              size={20}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              // value={this.state.displayName}
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ?
              <Animatable.View
                animation="bounceIn"
              >
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
              : null}
          </View>
          {data.isValidName ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Username must be 4 Charcter long.</Text>
            </Animatable.View>
          }

          <Text style={[styles.text_footer, {
            marginTop: 35,
            color: colors.text
          }]}>Email</Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="email-outline"
              color={colors.text}
              size={20}
            />
            <TextInput
              placeholder="Your Email"
              style={[styles.textInput, {
                color: colors.text
              }]}
              autoCapitalize="none"
              keyboardType='email-address'
              // value={this.state.email}
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ?
              <Animatable.View
                animation="bounceIn"
              >
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
              : null}
          </View>
          {data.isValidEmail ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Email must be Valid Email Id.</Text>
            </Animatable.View>
          }

          <Text style={[styles.text_footer, {
            marginTop: 35
          }]}>Password</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              // value={this.state.password}
              onChangeText={(val) => handlePasswordChange(val)}
              secureTextEntry={true}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ?
                <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                />
                :
                <Feather
                  name="eye"
                  color="grey"
                  size={20}
                />
              }
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
          }

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
                  </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
            <Text style={styles.color_textPrivate}>{" "}and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy Policy</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={registerUser}
            >
              <LinearGradient
                colors={['#EC050C', '#EC050C']}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, {
                  color: '#fff'
                }]}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.signIn, {
                borderColor: '#EC050C',
                borderWidth: 1,
                marginTop: 15
              }]}
            >
              <Text style={[styles.textSign, {
                color: '#EC050C'
              }]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC050C'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  color_textPrivate: {
    color: 'grey'
  }
});