import React from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Modal, TextInput } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import COLORS from "../../assets/Color/index"

export default function index({navigation }) {
    const Screen = Dimensions.get("screen");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [countrymodal, setcountrymodal] = React.useState(false);
    const [Select, setSelect] = React.useState("");
    const Country = ["India", "New Zealand", "Australia", "England", "Qatar", "India", "Newzealand", "Australia", "England", "Qatar", "India", "Newzealand", "Australia", "England", "Qatar"]
    const CountrList = () => {
        return (

            <View style={{ width: 300, backgroundColor: "red" }}>
                {Country.map((item, index) =>
                    <ScrollView horizontal key={index}>
                        <Text>{item}</Text>
                    </ScrollView>
                )}

            </View>

        )
    }
    return (
        <SafeAreaView >
            <View style={{ width: Screen.width, borderBottomWidth: 0.8, borderBottomColor: COLORS.grey }}>
                <View style={{ flexDirection: "row", padding: 15, marginTop: 5 }}>
                    <AntDesign style={{}} size={28} color={COLORS.primary} name="arrowleft" />
                    <Text style={styles.txt1}>Payment</Text>
                </View>
            </View>

            <View style={{ marginTop: 32 }}>
                <Text style={{ color: COLORS.primary, marginLeft: 15 }}>PAYMENT OPTIONS</Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop: 10 }}>
                <Text style={{ ...styles.txt2 }}>Bazaar</Text>
                <Text style={{ ...styles.txt2 }}>₹8,884</Text>
            </View>
            <View style={{ marginLeft: 15 }}>
                <Text style={{ fontSize: 15 }}>Make secure payment</Text>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.6} style={{ backgroundColor: COLORS.orange, marginTop: 80, height: 55, alignItems: "center", justifyContent: "center", marginHorizontal: 20, borderRadius: 30 }}>
                <Text style={{ color: COLORS.WHITE, fontFamily: "Roboto-Bold", fontSize: 17 }}>Pay with Rozopay</Text>
            </TouchableOpacity>

            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{ height: 465, width: Screen.width / 1.2, backgroundColor: COLORS.WHITE, alignSelf: "center", marginVertical: 231, borderRadius: 10, elevation: 10 }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ position: "absolute", right: 15, marginTop: 20 }}>
                        <AntDesign color={COLORS.primary} size={25} name="close" />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={() => setcountrymodal(true)} style={{ height: 60, backgroundColor: COLORS.lightgrey, marginTop: 80, marginHorizontal: 20, borderWidth: 0.8, borderRadius: 11, justifyContent: "center" }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ marginLeft: 19, paddingBottom: 5 }}>
                                    <Text>Country</Text>
                                    <Text style={{ fontFamily: "Roboto-Bold", color: COLORS.primarys }}>India</Text>
                                </View>
                                <Entypo style={{ position: "absolute", right: 20, top: 10 }} size={25} color={COLORS.primary} name={countrymodal ? 'chevron-small-up' : 'chevron-small-down'} />

                            </View>

                        </TouchableOpacity>
                        <View style={{ height: 60, backgroundColor: COLORS.lightgrey, marginTop: 30, marginHorizontal: 20, borderWidth: 0.8, justifyContent: "center", borderRadius: 11 }}>
                            <TextInput keyboardType="number-pad" style={{ fontSize: 17, fontFamily: "Roboto-Regular", paddingLeft: 20 }} placeholder='Phone' />

                        </View>
                        <View style={{ height: 60, backgroundColor: COLORS.lightgrey, marginTop: 30, marginHorizontal: 20, borderWidth: 0.8, justifyContent: "center", borderRadius: 11 }}>
                            <TextInput placeholderTextColor="#7C7C7C" keyboardType="number-pad" style={{ fontSize: 17, fontFamily: "Roboto-Regular", paddingLeft: 20 }} placeholder='Email id' />

                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate("paymode")} activeOpacity={0.6} style={{ backgroundColor: COLORS.orange, marginTop: 50, height: 55, alignItems: "center", justifyContent: "center", marginHorizontal: 20, borderRadius: 30 }}>
                            <Text style={{ color: COLORS.WHITE, fontFamily: "Roboto-Bold", fontSize: 17 }}>Pay with Rozopay</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>

            <Modal animationType='slide' transparent={true} visible={countrymodal}>

                <CountrList />


            </Modal>

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
        marginHorizontal: 20,

    },
    txt2: {
        fontFamily: "Roboto-Bold",

        fontSize: 19,
        color: COLORS.primary
    }
})