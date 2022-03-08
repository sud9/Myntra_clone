import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
import COLORS from '../../assets/Color';
import Header from "../../Header/index2";
export default function dfd() {

    const [checked, setChecked] = React.useState('first');
    return (
        <View style={{flex: 1 }}>
            <Header name=" My Profile"/>
        <ScrollView contentContainerStyle={{ }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: 140, height: 140, borderRadius: 70, borderWidth: 1, borderColor: "#994FB1", marginTop: 15 }}>
                    <Image source={require("../../assets/image/boy.png")} />
                    <TouchableOpacity activeOpacity={0.6} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#994FB1", position: "absolute", right: 12, top: 100, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../assets/image/pen.png")} />
                    </TouchableOpacity>
                </View>


                <View style={{ width: "100%", marginTop: 25 }}>
                    <TextInput style={{ ...styles.txtinput }} placeholder='Name' />
                    <TextInput keyboardType="phone-pad" style={{ ...styles.txtinput, marginTop: 20 }} placeholder='Mobile Number' />
                    <TextInput keyboardType="email-address" style={{ ...styles.txtinput, marginTop: 20 }} placeholder='Email id' />

                </View>


            </View>

            <View style={{flexDirection:"row",marginLeft:15,marginTop:25}}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton 
                          color={COLORS.orange}
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, color: COLORS.primary }}>Male</Text>
                </View>


                
                <View style={{ flexDirection: "row", alignItems: "center",marginLeft:10 }}>
                    <RadioButton
                    color={COLORS.orange}
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, color: COLORS.primary }}>Female</Text>
                </View>


                    
            
            </View>

            <TouchableOpacity activeOpacity={0.6} style={{height:60,marginHorizontal:25,backgroundColor:"#F4F4F4",borderWidth:1,borderColor:"#DEDEDE",borderRadius:10,alignItems:"center",justifyContent:"center",marginTop:25}}>
                   <Text style={{fontFamily:"Roboto-Bold",color:COLORS.primary,fontSize:15}}>Change Password</Text>
            </TouchableOpacity>


            
            <TouchableOpacity activeOpacity={0.6} style={{height:55,marginHorizontal:20,backgroundColor:COLORS.orange,borderWidth:1,borderColor:"#DEDEDE",borderRadius:40,alignItems:"center",justifyContent:"center",marginTop:25}}>
                   <Text style={{fontFamily:"Roboto-Bold",color:COLORS.primary,fontSize:16,color:COLORS.WHITE}}>Save Details</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    txtinput: {
        marginHorizontal: 20, height: 60, backgroundColor: "#EDE2F1", borderRadius: 10, borderWidth: 1, borderColor: "#D4B7DE", fontFamily: "Roboto-Regular", color: "#7C7C7C", paddingLeft: 20
    }
})