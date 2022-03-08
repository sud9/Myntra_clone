import React from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import COLORS from "../../assets/Color/index"
import StepIndicator from 'react-native-step-indicator';
export default function index() {
    const labels = ["Bag", "Address", "Payment"];
    const [position, setposition] = React.useState(0);




    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
    }
    return (
        <SafeAreaView  >

            <View style={{ flexDirection: "row", marginTop: 20,marginLeft:20 }}>
                <AntDesign style={{  }} size={28} color={COLORS.primary} name="arrowleft" />
                <Text style={styles.txt1}>Checkout</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <StepIndicator
                    stepCount={3}
                    customStyles={customStyles}
                    currentPosition={setposition}

                    labels={labels}
                />
            </View>
            <View style={{  marginTop: 30,marginLeft:20 }}>
                <Text style={{ fontFamily: "Roboto-Regular", color: COLORS.primary, fontWeight: "700" }}>Select a delivery Address</Text>
            </View>

            <View style={{marginLeft:20,marginTop:20}}>
                <Text style={{ fontFamily: "Roboto-Regular", color: COLORS.primary, fontWeight: "500" }}>Susmita Singh</Text>
                <View style={{width:"60%",paddingTop:5}}>
                    <Text>C Block Sector 144, Mahagun, Noida Noida Uttar pradesh 201204 India</Text>
                    <Text style={{color:COLORS.primary,marginTop:5,fontFamily:"Roboto-Regular",fontWeight:"500"}}>Phone Number : 5569932659</Text>
                 
                </View>
            </View>

            <TouchableOpacity activeOpacity={0.6} style={{backgroundColor:COLORS.orange,marginTop:80,height:55,alignItems:"center",justifyContent:"center",marginHorizontal:20,borderRadius:30}}>
                <Text style={{color:COLORS.WHITE,fontFamily:"Roboto-Bold",fontSize:17}}>Proceed to Payment</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} style={{borderWidth:1,backgroundColor:COLORS.WHITE,marginTop:20,height:55,alignItems:"center",justifyContent:"center",marginHorizontal:20,borderRadius:30}}>
                <Text style={{color:COLORS.primary,fontFamily:"Roboto-Bold",fontSize:17}}>Edit Address</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headercontainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        marginTop: 20
    },
    txt1: {
        fontFamily: "Roboto-Black",
        color: COLORS.primary,
        fontWeight: "700",
        fontSize: 18,
        marginHorizontal: 20
    },
})