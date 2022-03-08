import React, { useState } from 'react'
import { Text, View, ScrollView, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextInput, Button } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Header from "../../Header/index2"
export default function index({navigation}) {
    const press = () => {
        alert("im working")
    }
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [text, setText] = useState("");
    return (
        <ScrollView>
      <Header onPress={navigation.goBack} icon="close" name="Sign Up"/>

        <View style={{ marginLeft: 25, marginTop: 30 }}>
            <Text style={{ color: "#994FB1", fontSize: 25, fontWeight: "bold", fontFamily: "Roboto-Black" }}>Let’s get started</Text>
        </View>

        <View style={{ width: 318, left: 25, marginTop: 10 }}>
            <Text style={{ color: "#5B5B5B", fontSize: 13, fontFamily: "Roboto-Black" }}>Enter below information to create an account.</Text>
        </View>

        <KeyboardAvoidingView style={{ width: "90%", marginHorizontal: 25, marginTop: 20 }}>
            <TextInput value={text} onChangeText={text =>setText(text)} style={{ backgroundColor: "#EDE2F1", height: 40 }} label="First Name" mode='outlined' placeholder="Vicky" activeOutlineColor='#994FB1' />

            <TextInput style={{ backgroundColor: "#EDE2F1", marginTop: 25, height: 40 }} label="Last Name" mode='outlined' placeholder="+9122556669633" activeOutlineColor='#994FB1' />

            <TextInput style={{ backgroundColor: "#EDE2F1", marginTop: 25, height: 40 }} label="Email id" mode='outlined' activeOutlineColor='#994FB1' />
            <TextInput keyboardType="number-pad" style={{ backgroundColor: "#EDE2F1", marginTop: 25, height: 40 }} label="Phone Number" mode='outlined' activeOutlineColor='#994FB1' />
            <TextInput style={{ backgroundColor: "#EDE2F1", marginTop: 25, height: 40 }} label="Email id" mode='outlined' activeOutlineColor='#994FB1' />
            <TextInput style={{ backgroundColor: "#EDE2F1", marginTop: 25, height: 40 }} label="Phone Number" mode='outlined' activeOutlineColor='#994FB1' />
        </KeyboardAvoidingView>


        <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 30 }}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}

            />

            <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 12 }}>
                <Text style={{ fontFamily: "Roboto-Black", fontSize: 13, color: "#5B5B5B" }}>I agree to Bazaar </Text>
                <Text style={{ fontFamily: "Roboto-Black", color: "#994FB1", fontSize: 13 }}>Terms of Service and Privacy.</Text>
            </View>

        </View>

        <View style={{ width: "90%", marginHorizontal: 20, marginTop: 30 }}>
            <Button  onPress={() => navigation.navigate('page')}contentStyle={{ paddingTop: 10, fontFamily: "Roboto-black" }} style={{ backgroundColor: "#F86202", borderRadius: 57, height: 55 }} mode="contained" >Sign Up</Button>
        </View>

        <View style={{ alignSelf: "center", marginTop: 25, marginBottom: 20 }}>

            <Text style={{ fontFamily: "Roboto-Black", color: "#5B5B5B", fontWeight: "normal", fontSize: 14 }}>Have already an account ?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text style={{ fontFamily: "Roboto-Black", color: "#994FB1", fontWeight: "normal", textAlign: "center", fontSize: 14, marginTop: 5 }}>Sign in to Bazaar</Text>
            </TouchableOpacity>
            
        </View>


    </ScrollView>
    )
}

