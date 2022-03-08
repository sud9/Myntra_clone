import React, { useState } from 'react'
import Header from "../../Header/index2"
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Image, StatusBar } from 'react-native'
import COLORS from '../../assets/Color'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
export default function index({ navigation }) {


    const isvalidobjField = (obj)=>{
        return    Object.values(userinfo).every(value =>value.trim())
    }

    const updateError = (error, stateUpdater) =>{
         stateUpdater(error);
         setTimeout(()=>{
              stateUpdater('')
         },2500);
    }

    const isvalidEmail  = (value) =>{
        const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return regx.test(value)
    }
    const [userinfo, setuserinfo] = useState({

 
        email: "",
        password: "",
     
    });

    const [error,seterror] = useState ('')

    const { email, password } = userinfo
    const handleOnChangeText = (value, fieldName) => {
        setuserinfo({ ...userinfo, [fieldName]: value });
    };
    const isValidForm = () => {

   if(!isvalidobjField(userinfo)) return updateError('Required all field!', seterror)

   if(!password.trim()  ||  password.length <8 ) return updateError('Invalid Password!',seterror)

   if(!isvalidEmail(email)) return updateError('Invalid Email!', seterror)
   return true;
    }

    const Submitform = () => {
        if (isValidForm()) {
           navigation.navigate("Home")
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={false} />
            <Header icon="close" name="Sign in" />
            <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20, marginLeft: 15 }}>
                    <Text style={{ color: "#994FB1", fontSize: 30, fontWeight: "bold", fontFamily: "Roboto-Black" }}>Hi</Text>
                    <Text style={{ color: "#5B5B5B", fontSize: 15, fontFamily: "Roboto-Black", width: 300, textAlign: "justify" }}> You can use  your email address or continue with your social and apple account</Text>

                </View>


                <View style={{ marginHorizontal: 15, marginTop: 40 }}>
                    {error ? (<Text style={{color:"red",fontSize:18,textAlign:"center",marginVertical:8}}>{error}</Text>):null}
                    <View style={{ height: 65, borderWidth: 1, borderColor: "#ABABAB", borderRadius: 12, backgroundColor: "#F4F4F4", justifyContent: "center" }}>
                        <TextInput onFocus={()=>setfocus=(true)} onChangeText={(value) => handleOnChangeText(value, 'email')} value={email} style={{ paddingLeft: 20, fontFamily: "Roboto-Regular", color: COLORS.primary, fontSize: 16 }} placeholderTextColor="#7C7C7C" placeholder='Email/Phone' />
                    </View>

                    <View style={{ height: 65, borderWidth: 1, borderColor: "#ABABAB", borderRadius: 12, marginTop: 20, backgroundColor: "#F4F4F4", justifyContent: "center" }}>
                        <TextInput onChangeText={(value) => handleOnChangeText(value, 'password')} value={password} secureTextEntry style={{ paddingLeft: 20, fontFamily: "Roboto-Regular", color: COLORS.primary, fontSize: 16 }} placeholderTextColor="#7C7C7C" placeholder='Password' />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")} activeOpacity={0.6} style={{ position: "absolute", right: 15, bottom: -35 }}>
                        <Text style={{ color: COLORS.violet, fontWeight: "600", fontFamily: "Roboto-Regular", fontSize: 16 }}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={Submitform} activeOpacity={0.6} style={{ height: 60, borderRadius: 40, backgroundColor: COLORS.orange, marginTop: 80, alignItems: "center", justifyContent: "center", marginHorizontal: 15 }}>
                    <Text style={{ fontWeight: "800", fontSize: 18, color: COLORS.WHITE }}>Sign In</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginHorizontal: 25 }}>
                    <View style={{ flex: 1, height: 0.8, backgroundColor: '#DFDEDE' }} />
                    <View>
                        <Text style={{ width: 100, textAlign: 'center', fontSize: 15, color: "#5B5B5B" }}>or signin with</Text>
                    </View>
                    <View style={{ flex: 1, height: 0.8, backgroundColor: '#DFDEDE' }} />
                </View>


                <View style={{ marginTop: 30, paddingHorizontal: 25, flexDirection: "row", justifyContent: "space-between" }}>

                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: "#1877F2", height: 55, width: 170, borderRadius: 40, borderColor: "#7CB1F6", borderWidth: 1, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                            <View style={{ backgroundColor: COLORS.WHITE, width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                                <EvilIcons color={"#1877F2"} size={32} name='sc-facebook' />
                            </View>
                            <Text style={{ color: COLORS.WHITE, fontSize: 18, fontFamily: "Roboto-Bold", marginLeft: 10 }}>Facebook</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: COLORS.WHITE, height: 55, width: 170, borderRadius: 40, borderWidth: 1, borderColor: "#B3B3B3", alignItems: "center", justifyContent: "center" }}>
                        <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row" }}>

                            <Image source={require("../../assets/image/google.png")} />

                            <Text style={{ color: COLORS.primary, fontSize: 20, fontFamily: "Roboto-Bold", marginLeft: 18 }}>Google</Text>
                        </View>
                    </TouchableOpacity>


                </View>

                <TouchableOpacity activeOpacity={0.6} style={{ height: 60, backgroundColor: COLORS.primary, borderRadius: 40, marginHorizontal: 20, marginTop: 30, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                    <AntDesign size={30} color={COLORS.WHITE} name="apple1" />
                    <Text style={{ color: COLORS.WHITE, fontSize: 19, fontFamily: "Roboto-Bold", marginLeft: 10 }}>Apple</Text>
                </TouchableOpacity>


                <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>

                    <Text style={{ color: "#5B5B5B", fontFamily: "Roboto-Regular", fontWeight: "700", fontSize: 15 }}>Haven't signed up</Text>


                    <TouchableOpacity onPress={() => navigation.navigate("signup")} style={{ marginBottom: 30 }} activeOpacity={0.6}>
                        <Text style={{ color: COLORS.violet, fontFamily: "Roboto-Regular", fontWeight: "400", fontSize: 17 }}>Create an account</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}