import { View, Text, TouchableOpacity, ImageBackground, StatusBar, Modal, Alert,Dimensions } from 'react-native'
import React, { useState } from 'react'
import Header from "../../Header/index2"
import COLORS from '../../assets/Color'
import Ripple from 'react-native-material-ripple';

export default function index() {
    const press = () => {
        alert("im working")
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
         <View  animationType="fade" resizeMode='stretch' style={{ flex: 1 }}>

            <Header onPress={press} icon="arrowleft" name="Edit Address" />
            <View style={{ marginLeft: 35, marginTop: 30 }}>
                <Text style={{ fontWeight: "400", fontSize: 18, fontFamily: "Roboto-Medium", color: COLORS.primary }}>Susmita Singh </Text>
                <Text style={{ fontSize: 18, fontWeight: "400", color: "#5B5B5B" }}>C Block Sector 144, Mahagun, Noida</Text>
                <Text style={{ fontSize: 18, fontWeight: "400", color: "#5B5B5B", width: '70%', marginTop: 3 }}>Noida Uttar pradesh 201204 India</Text>
                <Text style={{ fontWeight: "400", fontSize: 18, fontFamily: "Roboto-Medium", color: COLORS.primary, marginTop: 10 }}>Phone Number : 5569932659 </Text>
            </View>
            <Ripple rippleColor='white' rippleDuration={3000} activeOpacity={0.8} style={{ backgroundColor: COLORS.orange, height: 55, marginTop: 80, marginHorizontal: 30, borderRadius: 40, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: COLORS.WHITE, fontWeight: "700", fontFamily: "Roboto-Medium", fontSize: 18 }}>Edit</Text>
            </Ripple>

            <Ripple rippleColor='lightpink' rippleDuration={600} onPress={() => setModalVisible(!modalVisible)} activeOpacity={0.6} style={{ height: 55, marginTop: 15, marginHorizontal: 30, borderRadius: 40, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#D7D7D7", backgroundColor: COLORS.WHITE }}>
                <Text style={{ color: COLORS.primary, fontWeight: "700", fontFamily: "Roboto-Medium", fontSize: 18 }}>Remove</Text>
            </Ripple>

            <Modal
                animationType='slide'
               
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ height: 160, backgroundColor:COLORS.WHITE,marginTop:"auto" }}>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Medium", fontSize: 17, fontWeight: "600" }}>Delete Confirmation</Text>
                        <Text style={{ marginTop: 10, color: "#b2b1bd" }}>Are you sure want to delete this address?</Text>

                    </View>

                    <View style={{ borderTopWidth: 1, marginTop: 40, justifyContent: "center" ,flex:1,borderTopColor:"#e9e8ed"}}>
                      
                        <View style={{ flexDirection: "row", justifyContent: "space-between", flex:1,paddingHorizontal:80 }}>
                            <TouchableOpacity onPress={()=>setModalVisible(false)} style={{alignItems:"center",justifyContent:"center"}}>
                            <Text style={{ color: "red", fontSize: 15, fontFamily: "Roboto-Medium" }}>Cancel</Text>
                            </TouchableOpacity>

                            <View style={{width:1,height:"65%",backgroundColor:COLORS.primary,marginVertical:10,backgroundColor:"#e9e8ed"}}></View>

                            <TouchableOpacity style={{alignItems:"center",justifyContent:"center"}}>
                            <Text style={{ color: "red", fontSize: 15, fontFamily: "Roboto-Medium" }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>


            </Modal>
         </View>
    )
}