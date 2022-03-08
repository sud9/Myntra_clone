import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Platform, Dimensions, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'

import AntDesign from "react-native-vector-icons/AntDesign"
import COLORS from "../../assets/Color/index"
import Detail from "../../assets/Data/Data1"
import Ionicons from "react-native-vector-icons/Ionicons"

import Octicons from "react-native-vector-icons/Octicons"
export default function index() {
    const [shouldshow, setshouldshow] = React.useState(false)
    const [select,setselect] = React.useState (0);
    const [cardheight, setcardheight] = React.useState(210)
    const [Hide,setHide] = React.useState(true)
    const DetailList = () => {
        return (
            <View>
                {Detail.map((item, index) => (
                    <View key={index}>
                        <View style={{ height:cardheight , backgroundColor: COLORS.WHITE, marginTop: 0, width: Screen.width, borderBottomWidth: 0.8, borderBottomColor: "#DFD9D5", elevation: 1 }}>
                            <View style={{ flexDirection: "row", marginTop: 15 }}>
                                <View style={{ flexDirection: "row", borderWidth: 1, alignItems: "center", marginLeft: 20, backgroundColor: "#F9E5D3", borderColor: "#FECE9E" }}>

                                    <Image style={{ width: 18, height: 25, padding: 10, marginLeft: 10 }} source={require("../../assets/image/Vector.png")} />

                                    <Text style={{ marginLeft: 10, fontFamily: "Roboto-Bold", padding: 10, color: "#706B6A", fontSize: 16 }}>{item.code}</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.6} style={{position: "absolute", right: 30,}}>
                                <Text style={{fontWeight: "100", fontFamily: "Roboto-Bold", color: COLORS.orange, paddingTop: 10 }}>{item.apply}</Text>
                                </TouchableOpacity>
                                
                            </View>
                            <Text style={{ fontFamily: "Roboto-Bold", color: COLORS.grey, fontSize: 17, marginLeft: 20, paddingTop: 15 }}>{item.offer}</Text>
                            <View style={{ height: 0, borderWidth: 0.6, marginHorizontal: 20, borderColor: "#E0DCD9", marginTop: 18 }}>
                            </View>
                            <View style={{ marginTop: 20, width: Screen.width / 1.1, marginLeft: 20 }}>
                                <Text>{item.instruct}</Text>

                            </View>

                            {Hide ? (
                                 <TouchableOpacity  onPress={()=>{setshouldshow(!shouldshow),setcardheight(310),setHide(!Hide),setselect(index)}} style={{ flexDirection: "row", marginTop: 10, marginLeft: 20 }}>
                                 <Ionicons style={{ color: "#1675F3", top: 1 }} size={11} name="ios-add-outline" />
                                 <Text style={{ fontFamily: "Roboto-Black", fontSize: 10, color: "#3A89F2", fontWeight: "700" }}>MORE</Text>
                             </TouchableOpacity>
                            ):null
                        }
                         

                            <View>
                                {
                                    shouldshow ? (
                                        <View>
                                        <Text style={{ marginLeft: 20, fontSize: 13, marginTop: 10 }}>Terms & Conditions Apply</Text>
                                        
                                        <View style={{ marginLeft: 22, flexDirection: "row", marginTop: 10 }}>
                                            <Octicons size={18} color={COLORS.primary} name="primitive-dot" />
                                            <Text style={{ fontSize: 13, marginLeft: 10, color: "#605D5D" }}>{item.term_cond}</Text>
                                        </View>
                                        <View style={{ marginLeft: 22, flexDirection: "row", marginTop: 10 }}>
                                            <Octicons size={18} color={COLORS.primary} name="primitive-dot" />
                                            <Text style={{ fontSize: 13, marginLeft: 10, color: "#605D5D" }}>{item.term_cond2}</Text>
                                        </View>
                                        <View style={{ marginLeft: 22, flexDirection: "row", marginTop: 10 }}>
                                            <Octicons size={18} color={COLORS.primary} name="primitive-dot" />
                                            <Text style={{ fontSize: 13, marginLeft: 10, color: "#605D5D" }}>Offer is valid only on select restaurant</Text>
                                        </View>
                                        </View>
                                    ):null
                                }
                               
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        )
    }
    const Screen = Dimensions.get("screen");
    return (
        <SafeAreaView>

            <View style={styles.headercontainer}>
                <View style={{ flexDirection: "row", paddingBottom: 8 }}>
                    <AntDesign style={{ marginLeft: 10 }} size={25} color={"#706B6A"} name="arrowleft" />
                    <Text style={styles.txt1}>APPLY COUPONS</Text>
                </View>
            </View>

            <ScrollView scrollEventThrottle={16} contentContainerStyle={{}}>

                <View style={{ backgroundColor: "#F0EDE9", height: 140 }}>

                    <View style={{ flexDirection: "row", height: 55, borderWidth: 1, borderColor: "#B4B3B2", marginHorizontal: 15, backgroundColor: COLORS.WHITE, marginTop: 20 }}>
                        <TextInput style={{ fontSize: 14, fontFamily: "Roboto-Black", marginLeft: 10, justifyContent: "center", paddingRight: 70 }} placeholder='Enter Coupon Code' />
                        <View style={{ position: "absolute", right: 20, alignSelf: "center" }}>
                            <Text style={{ fontWeight: "100", color: COLORS.orange, fontFamily: "Roboto-Bold" }}>APPLY</Text>
                        </View>
                    </View>

                    <Text style={{ marginLeft: 15, fontSize: 10, color: "#878686", fontFamily: "rOBOTO-bLACK", marginVertical: 30, fontWeight: "700" }}>AVAILABLE COUPONS</Text>


                </View>
                <DetailList />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headercontainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    txt1: {
        fontFamily: "Roboto-Black",
        color: COLORS.primary,
        fontWeight: "500",
        fontSize: 16,
        marginHorizontal: 20
    },
})