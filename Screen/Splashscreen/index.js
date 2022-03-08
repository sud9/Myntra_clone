import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"
import { NavigationContainer } from '@react-navigation/native'
export default function index({navigation}) {
  return (
    <View style={{flex:1}}>
        <StatusBar  backgroundColor={'transparent'} translucent={true} barStyle='dark-content'/>
     <LottieView style={{width:"100%",height:"100%"}} source={require('../../assets/splash.json')} onAnimationFinish={()=>navigation.navigate("Signin")} autoPlay loop={false}/>
    </View>
  )
}