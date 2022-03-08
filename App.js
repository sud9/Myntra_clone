

import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import Home from "./Screen/Home/index"
import SignIn from "./Screen/Login/index"
import Signup from "./Screen/signup/index"
import Seller_register from "./Screen/BecomeSeller/index"
import Register from "./Screen/BecomeSeller/index"
import Forgotpassword from "./Screen/forgotpassword/index"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FAQ from "./Screen/Faqsdetailscreen/index"
import Drawer from "./Navigation/Drawer_navigation/index"
import Tab2 from "./Navigation/Bottomtab2/index"
import Splash from "./Screen/Splashscreen/index"
import Animated, { Transition } from "react-native-reanimated"
const Stack = createNativeStackNavigator();
const App = () => {
  return (
  
     <NavigationContainer>
         
      <Stack.Navigator  Signin screenOptions={{headerShown: false}} >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signin" component={SignIn} />
         <Stack.Screen name="signup" component={Signup} />  
       <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Seller" component={Seller_register} />
         <Stack.Screen name="page" component={Drawer} />
        <Stack.Screen name="sellerhome" component={Tab2} />
       <Stack.Screen name="ResetPassword" component={ Forgotpassword } /> 
       <Stack.Screen name="Faq" component={ FAQ} /> 
      
      </Stack.Navigator>
     </NavigationContainer>
  )
}

export default App

