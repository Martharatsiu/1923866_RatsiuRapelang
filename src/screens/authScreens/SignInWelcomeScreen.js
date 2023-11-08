import React, {useState, useRef} from 'react';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {colors, parameters} from '../../global/styles';
import Header from '../../components/Header';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
          }}>
          DONATE SANITARY PADS
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: 'bold',
          }}>
          TO SCHOOL GIRLS
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://www.wvi.org/sites/default/files/styles/large_780x520/public/2023-06/Childrens%20Cover.JPG?itok=zidwaYd1',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://cdn.24.co.za/files/Cms/General/d/3408/d49c0434cbd640a79021fc14aa14387e.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/4X3EGp4VhOscsWGs0cz393GyAhpFdQ3Tu2BVsWyDGOf_NP21ANtirIx1nHTgw0I7RDX1Vubyt5gMwBitjS9IV0sFow=s1500-pp',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://www.trueafrica.org/uploads/5/2/6/7/5267251/s606276513298709048_p735_i1_w462.jpeg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://cdn.24.co.za/files/Cms/General/d/3408/d49c0434cbd640a79021fc14aa14387e.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('signInScreen');
            }}
          />
        </View>
        <View style={{marginHorizontal: 0, marginTop: 30}}>
          <Button
            title="Create an Account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderColor: '#FF1493',
  },
  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    marginTop: -3,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
