import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import COLORS from '../../assets/Color'
export default function index() {
    const [cardheight, setcardheight] = React.useState()
    const [image, setimage] = React.useState(source=(require("../../assets/image/arrowright.png")))



    return (
        <View>
            <View style={{ paddingTop: 10 }}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                    <AntDesign color={"black"} size={30} name='arrowleft' />
                    <Text style={{ color: "black", fontWeight: "900", fontSize: 20, fontFamily: "Roboto-Regular", marginLeft: 20 }}>Profile</Text>
                </View>
            </View>

            <ScrollView scrollEventThrottle={16} contentContainerStyle={{ marginTop: 12, borderTopWidth: 2, borderTopColor: "#ECECEC" }}>
                <View style={{ marginTop: 15, flexDirection: "row", marginLeft: 15 }}>
                    <TouchableOpacity activeOpacity={0.6} style={{ width: 73, height: 73, borderRadius: 73 / 2, borderWidth: 1, borderColor: "#994FB1" }}>
                        <Image style={{ width: 72, height: 72, borderRadius: 72 / 2, backgroundColor: "white" }} resizeMode='contain' source={require('../../assets/image/boy.png')} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 20, marginTop: 5 }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 19, color: COLORS.primary }}>Amaara</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 17, fontWeight: "400", color: '#949494' }}>Referral Code :5256</Text>
                    </View>


                    <View style={{ width: 69, height: 34, borderRadius: 45, backgroundColor: "#F2E2F8", position: "absolute", right: 18, top: 8 }}>
                        <View style={{ alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", flex: 1 }}>
                            <Image source={require("../../assets/image/star.png")} />
                            <Text style={{ fontFamily: "Roboto-Regular", fontWeight: "900", fontSize: 17, color: COLORS.primary, marginRight: 5 }}>4.5</Text>
                        </View>
                    </View>


                </View>




                <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 30 }}>
                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 17.5, color: COLORS.primary }}>200</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", color: "#A3A3A3", fontWeight: "400", fontSize: 13, marginTop: 8 }}>FOLLOW</Text>
                    </View>

                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 17.5, color: COLORS.primary }}>130</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", color: "#A3A3A3", fontWeight: "400", fontSize: 13, marginTop: 8 }}>FOLLOWING</Text>
                    </View>

                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 17.5, color: COLORS.primary }}>300</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", color: "#A3A3A3", fontWeight: "400", fontSize: 13, marginTop: 8 }}>BALANCE</Text>
                    </View>

                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 17.5, color: COLORS.primary }}>05</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", color: "#A3A3A3", fontWeight: "400", fontSize: 13, marginTop: 8 }}>COUPONS</Text>
                    </View>


                </View>

                <View style={{ marginTop: 30 }}>


                    <TouchableOpacity activeOpacity={0.6} style={styles.cardcontainer}>
                        <View style={{ ...styles.cardinnercontainer }}>
                            <Image source={require("../../assets/image/selling.png")} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 18, fontFamily: "Roboto-Regular", color: COLORS.primary, fontWeight: "800", fontSize: 19 }}> Selling </Text>
                                <Text style={{ fontSize: 18, fontFamily: "Roboto-Regular", color: '#949494', fontWeight: "200", fontSize: 15 }}>if you are going to use passage.</Text>
                            </View>
                            <TouchableOpacity  activeOpacity={0.6}style={{...styles.cardimgcontainer}}>
                                <Image source={image} />
                            </TouchableOpacity>

                        </View>
                        <View>
                        </View>
                    </TouchableOpacity>




                    <TouchableOpacity activeOpacity={0.6} style={styles.cardcontainer}>
                        <View style={{ ...styles.cardinnercontainer }}>
                            <Image source={require("../../assets/image/buy.png")} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ ...styles.cardtxt1 }}> Buying </Text>
                                <Text style={{ ...styles.cardtxt2 }}>if you are going to use passage.</Text>
                            </View>
                            <TouchableOpacity   onPress={()=>setimage(image)} activeOpacity={0.6} style={{...styles.cardimgcontainer}}>
                                <Image source={image}  />
                            </TouchableOpacity>

                        </View>
                        <View>
                        </View>
                    </TouchableOpacity>





                    <TouchableOpacity activeOpacity={0.6} style={styles.cardcontainer}>
                        <View style={{ ...styles.cardinnercontainer }}>
                            <Image source={require("../../assets/image/trust.png")} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ ...styles.cardtxt1 }}> Trust and Verification </Text>
                                <Text style={{ ...styles.cardtxt2 }}>if you are going to use passage.</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{...styles.cardimgcontainer}}>
                                <Image source={image}  />
                            </TouchableOpacity>

                        </View>
                        <View>
                        </View>
                    </TouchableOpacity>





                    <TouchableOpacity activeOpacity={0.6} style={styles.cardcontainer}>
                        <View style={{ ...styles.cardinnercontainer }}>
                            <Image source={require("../../assets/image/setting.png")} />
                            <View style={{ marginLeft: 18 }}>
                                <Text style={{ ...styles.cardtxt1 }}> Setting </Text>
                                <Text style={{ fontSize: 18, fontFamily: "Roboto-Regular", color: '#949494', fontWeight: "200", fontSize: 15 }}>if you are going to use passage.</Text>
                            </View>
                            <TouchableOpacity onPress={()=>setimage(image)} activeOpacity={0.6} style={{...styles.cardimgcontainer}}>
                                <Image source={image }  />
                            </TouchableOpacity>

                        </View>
                        <View>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ marginBottom: 100, marginLeft: 30, marginTop: 24 }}>
                    <TouchableOpacity activeOpacity={0.6} style={{ flexDirection: "row", }}>
                        <Image source={require("../../assets/image/logot.png")} />
                        <Text style={{ fontFamily: "Roboto-Regular", fontWeight: "500", fontSize: 23, color: COLORS.orange, marginLeft: 10 }}>Logout</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
};



const styles = StyleSheet.create({
    cardcontainer: {
        height: 120,
        backgroundColor: "#FCFCFC",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        flex: 1
    },
    cardinnercontainer: {
        flexDirection: "row",
        marginLeft: 28,
        marginTop: 20
    },
    cardtxt1: {
        fontSize: 18,
        fontFamily: "Roboto-Regular",
        color: COLORS.primary,
        fontWeight: "800",
        fontSize: 19
    },
    cardtxt2: {
        fontSize: 18,
        fontFamily: "Roboto-Regular",
        color: '#949494',
        fontWeight: "200",
        fontSize: 15
    },
    cardimgcontainer: {
        position: "absolute",
        right: 30,
        top: 10
    }
})
