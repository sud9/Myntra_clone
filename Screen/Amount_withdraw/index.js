import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from "../../Header/index2"
import COLORS from '../../assets/Color'
export default function index() {
    return (
        <View>
            <Header name="My Balance" />


            <View style={{ marginTop: 40, }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: COLORS.orange, fontWeight: "900", fontSize: 32, fontFamily: "Roboto-Regular" }}>₹13,922.00</Text>
                    <Text style={{ color: COLORS.violet, fontWeight: "700", fontSize: 23, fontFamily: "Roboto-Regular", textAlign: "center", marginTop: 10 }}>Withdraw Balance</Text>
                    <Text style={{
                        fontFamily: "Roboto-Regular", fontWeight: "400", fontSize: 15, color: "#5B5B5B", width: 290, marginTop
                            : 5
                    }}>The money will be in your bank account
                        3-4 business days, depending on your bank.</Text>



                </View>
                <View style={{ marginTop: 40 }}>

                    <View style={{ borderWidth: 1, marginHorizontal: 20, borderRadius: 10, height: 60, backgroundColor: "#F4F4F4", borderColor: "rgba(0, 0, 0, 0.3)" }}>
                        <TextInput placeholderTextColor={'#7C7C7C'} style={{ flex: 1, paddingLeft: 20, fontSize: 15 }} placeholder="Enter Amount" />
                    </View>

                    <View style={{ borderWidth: 1, marginHorizontal: 20, borderRadius: 10, height: 60, backgroundColor: "#F4F4F4", borderColor: "rgba(0, 0, 0, 0.3)", marginTop: 24 }}>
                        <TextInput placeholderTextColor={'#7C7C7C'} style={{ flex: 1, paddingLeft: 20, fontSize: 15 }} placeholder="To" />
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: COLORS.orange, height: 55, marginTop: 50, marginHorizontal: 20, borderRadius: 40, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: COLORS.WHITE, fontWeight: "700", fontSize: 16, fontFamily: "Roboto-Regular" }}>Withdraw</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: COLORS.WHITE, height: 55, marginTop: 15, marginHorizontal: 20, borderRadius: 40, alignItems: "center", justifyContent: "center", borderColor: "#D7D7D7", borderWidth: 1 }}>
                    <Text style={{ color: COLORS.primary, fontWeight: "700", fontSize: 16, fontFamily: "Roboto-Regular" }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}