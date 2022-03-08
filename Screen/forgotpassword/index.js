import React,{Component} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AntDesign from "react-native-vector-icons/AntDesign"
import COLORS from '../../assets/Color'

export default class index extends Component {
  
   

    render() {
        return (
      
            
         <KeyboardAwareScrollView enableOnAndroid={true} showsVerticalScrollIndicator={false} style={{flex:1,marginTop:30}} bounces={false} >
                <AntDesign style={{ margin: 10 }} color="black" name='arrowleft' size={24} />
                <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text style={styles.txt1}>Forgot password?</Text>
                </View>
                <View style={{ width: 300, height: 77, marginLeft: 20, marginTop: 20,flex:1 }}>

                    <Text style={styles.txt2}>Enter your e-mail address associated
                        with your account and we’ll send an OTP on your email to reset the password.</Text>
                </View>


                <View style={{ width: 375, height: 60, borderWidth: 1, borderRadius: 10, alignSelf: "center", marginTop: 30, borderColor: COLORS.grey }}>
                    <TextInput blurOnSubmit={true} style={{ paddingLeft: 10 }}  placeholder='Vickyshopping09@gmail.com' placeholderTextColor={COLORS.grey} />
                </View>


                <Text style={styles.txt3}>Try another Way</Text>

                <TouchableOpacity style={{ width: 380, height: 55, backgroundColor: COLORS.orange, alignSelf: "center", borderRadius: 57, alignItems: "center", justifyContent: "center", marginTop: 53 }}>
                    <Text style={{ fontFamily: "Roboto-Black", color: COLORS.WHITE, fontSize: 17, fontWeight: "700" }}>Send Reset Instruction</Text>
                </TouchableOpacity>



         
            </KeyboardAwareScrollView>
       
        )
    }
}


const styles = StyleSheet.create({
    txt1: {
        fontWeight: "bold",
        fontSize: 22,
        color: COLORS.violet,
        fontFamily: "Roboto-Black"
    },
    txt2: {
        fontFamily: "Roboto-Black",
        fontSize: 15,
        color: COLORS.grey
    },
    txt3: {
        fontSize: 15, fontFamily: "Roboto-Black", fontWeight: "400", textAlign: "center", color: COLORS.violet, marginTop: 48
    }
})




