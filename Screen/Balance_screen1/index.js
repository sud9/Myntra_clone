import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import COLORS from "../../assets/Color/index"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
export default function index() {
    return (
        <ScrollView contentContainerStyle={{}}>
            <View style={{ borderTopWidth: 1, borderTopColor: "#ECECEC", marginTop: 20 }}>
                <LinearGradient colors={['#994FB1', '#DD5600']} style={{ height: 218, marginHorizontal: 10, marginTop: 30, borderRadius: 30 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <Text style={{ fontFamily: "Roboto-Regular", color: COLORS.WHITE, fontSize: 18, marginLeft: 30, marginTop: 20 }}>Account Balance</Text>
                            <Text style={{ fontFamily: "Roboto-Bold", color: COLORS.WHITE, fontSize: 25, marginLeft: 30, marginTop: 10 }}>₹13,922,00</Text>
                            <Text style={{ fontFamily: "Roboto-Regular", color: COLORS.WHITE, fontSize: 15, marginLeft: 30, marginTop: 2 }}>IN PROCESS ₹11,77,111.00</Text>
                            <TouchableOpacity activeOpacity={0.6} style={{ width: 130, height: 55, backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: 10, marginLeft: 30, marginTop: 25, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: COLORS.WHITE, fontWeight: "700", fontFamily: "Roboto-Regular", fontSize: 15 }}>WITHDRAW</Text>
                            </TouchableOpacity>
                        </View>

                        <Image style={{ position: "absolute", right: 40, top: 30 }} source={require("../../assets/image/moneybag.png")} />
                    </View>
                </LinearGradient>

                <View style={{ marginTop: 40 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30 }}>
                        <Text style={{ fontSize: 19, fontWeight: "600", color: COLORS.primary, fontFamily: "Roboto-Regular" }}>Bank Name</Text>
                        <Text style={{ fontSize: 18, fontWeight: "400", color: '#5B5B5B', fontFamily: "Roboto-Regular" }}>PNB Noida Branch</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30, marginTop: 22 }}>
                        <Text style={{ fontSize: 19, fontWeight: "600", color: COLORS.primary, fontFamily: "Roboto-Regular" }}>Account Number</Text>
                        <Text style={{ fontSize: 18, fontWeight: "400", color: '#5B5B5B', fontFamily: "Roboto-Regular" }}>123XXXXXXX2365</Text>
                    </View>


                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30, marginTop: 22 }}>
                        <Text style={{ fontSize: 19, fontWeight: "600", color: COLORS.primary, fontFamily: "Roboto-Regular" }}>IFSC Code</Text>
                        <Text style={{ fontSize: 18, fontWeight: "400", color: '#5B5B5B', fontFamily: "Roboto-Regular", position: "absolute", right: 110 }}>PNG456</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30, marginTop: 22 }}>
                        <Text style={{ fontSize: 19, fontWeight: "600", color: COLORS.primary, fontFamily: "Roboto-Regular" }}>Account Holder</Text>
                        <Text style={{ fontSize: 18, fontWeight: "400", color: '#5B5B5B', fontFamily: "Roboto-Regular", position: "absolute", right: 130 }}>Vicky</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: COLORS.orange, height: 55, marginTop: 40, marginHorizontal: 20, borderRadius: 40, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: COLORS.WHITE, fontWeight: "700", fontSize: 18, fontFamily: "Roboto-Regular" }}>Change</Text>
                    </TouchableOpacity>
                </View>


                <Text style={{ fontWeight: "700", fontFamily: "Roboto-Regular", fontSize: 16, color: COLORS.primary, marginLeft: 20, marginTop: 25 }}>TRANSACTION DETAILS</Text>
                <View style={{borderBottomWidth: 1,borderBottomColor:'#ECECEC'}}>
                    <View style={{ marginTop: 15, marginLeft: 20, flexDirection: "row",paddingVertical:15 }}>
                        <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: "#34A853", alignItems: "center", justifyContent: "center" }}>
                            <FontAwesome5 color={COLORS.WHITE} size={18} name="arrow-down" />
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Regular", fontWeight: "400", fontSize: 15 }}>52664b6fe1c8f</Text>
                            <Text style={{ color: COLORS.grey, fontFamily: "Roboto-Regular", fontWeight: "400", fontSize: 12 }}>ICICI224********1234 </Text>
                            <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Regular", fontWeight: "600", fontSize: 13 }}>29/10/2021</Text>
                        </View>

                        <View style={{ position: "absolute", right: 40,top:15 }}>
                            <Text style={{ color: "#34A853", fontSize: 12.5, fontWeight: "700", fontFamily: "Roboto-Regular" }}>Sucessed</Text>
                            <Text style={{ color: COLORS.primary, fontSize: 17, fontWeight: "700", fontFamily: "Roboto-Regular", marginTop: 5 }}>₹10.00</Text>
                        </View>
                    </View>
                </View>



                <View style={{borderBottomWidth: 1,borderBottomColor:'#ECECEC'}}>
                    <View style={{ marginTop: 15, marginLeft: 20, flexDirection: "row",paddingVertical:15 }}>
                        <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: "#F96303", alignItems: "center", justifyContent: "center" }}>
                            <FontAwesome5 color={COLORS.WHITE} size={18} name="arrow-down" />
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Regular", fontWeight: "400", fontSize: 15 }}>52664b6fe1c8f</Text>
                            <Text style={{ color: COLORS.grey, fontFamily: "Roboto-Regular", fontWeight: "400", fontSize: 12 }}>ICICI224********1234 </Text>
                            <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Regular", fontWeight: "600", fontSize: 13 }}>29/10/2021</Text>
                        </View>

                        <View style={{ position: "absolute", right: 40,top:15 }}>
                            <Text style={{ color: "#F96303", fontSize: 12.5, fontWeight: "700", fontFamily: "Roboto-Regular" }}>Pending</Text>
                            <Text style={{ color: COLORS.primary, fontSize: 17, fontWeight: "700", fontFamily: "Roboto-Regular", marginTop: 5 }}>₹10.00</Text>
                        </View>
                    </View>
                </View>



                <View style={{borderBottomWidth: 1,borderBottomColor:'#ECECEC',marginBottom:50}}>
                    <View style={{ marginTop: 15, marginLeft: 20, flexDirection: "row",paddingVertical:15 }}>
                        <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: "#FF0000", alignItems: "center", justifyContent: "center" }}>
                            <FontAwesome5 color={COLORS.WHITE} size={18} name="arrow-down" />
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Regular", fontWeight: "400", fontSize: 15 }}>52664b6fe1c8f</Text>
                            <Text style={{ color: COLORS.grey, fontFamily: "Roboto-Regular", fontWeight: "400", fontSize: 12 }}>ICICI224********1234 </Text>
                            <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Regular", fontWeight: "600", fontSize: 13 }}>29/10/2021</Text>
                        </View>

                        <View style={{ position: "absolute", right: 40,top:15 }}>
                            <Text style={{ color: "#FF0000", fontSize: 12.5, fontWeight: "700", fontFamily: "Roboto-Regular" }}>Failed</Text>
                            <Text style={{ color: COLORS.primary, fontSize: 17, fontWeight: "700", fontFamily: "Roboto-Regular", marginTop: 5 }}>₹10.00</Text>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}