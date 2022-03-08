import React,{useEffect} from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Modal, TextInput, Image, TouchableWithoutFeedback } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import COLORS from "../../assets/Color/index"

export default function index() {
    const [color, setcolor] = React.useState("white")
    const [modalVisible, setModalVisible] = React.useState(false)
    const Screen = Dimensions.get("screen");
 
    return (
        <SafeAreaView style={{backgroundColor:modalVisible ?"rgba(0,0,0,0.47)":"white"}} >
            <ScrollView>
                <View style={{ width: Screen.width, borderBottomWidth: 1, borderBottomColor: "#C9CCCF" }}>
                    <View style={{ flexDirection: "row", padding: 15, marginTop: 5 }}>
                        <AntDesign style={{}} size={28} color={COLORS.primary} name="arrowleft" />
                        <Text style={styles.txt1}>Payment</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop: 12 }}>
                    <View>
                        <Text style={{ ...styles.txt2 }}>Bazaar</Text>
                        <Text>Make secure payment</Text>
                    </View>

                    <Text style={{ ...styles.txt2 }}>₹8,884</Text>
                </View>

                <TouchableOpacity activeOpacity={0.8} onPressOut={() => setcolor("")} onPressIn={() => setcolor()} style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15,paddingVertical: 15, marginTop: 10 }}>
                    <View>
                        <Text style={{ fontWeight: "500", fontSize: 16, color: COLORS.primary }}>+91 5962236932</Text>
                        <Text>bazaarshop@341gmail.com</Text>
                    </View>

                    <View style={{ marginTop: 8 }}>
                        <Image style={{ width: 21, height: 21 }} source={require("../../assets/image/edit.png")} />
                    </View>
                </TouchableOpacity>

                <View style={{ marginLeft: 15, marginTop: 20 }}>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, color: COLORS.primary }}>Preferred payment Methods</Text>
                </View>

                <View style={{ borderWidth: 1, marginTop: 15, marginHorizontal: 12, borderRadius: 11, borderColor: "#DBDBDB", flexDirection: "row", backgroundColor: "#F7F7F7" }}>
                    <View style={{ padding: 15 }} >
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 17, color: COLORS.primary, fontWeight: "700" }}>UPI/QR</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 15, color: "#5B5B5B", marginTop: 2 }}>Googlepay, phone pe & more</Text>
                    </View>
                    <View style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: COLORS.orange, position: "absolute", top: 18, right: 15, backgroundColor: "#FFEADD", alignItems: "center", justifyContent: "center" }}>
                        <AntDesign size={18} color={COLORS.orange} name="check" />
                    </View>
                </View>

                <View style={{ marginTop: 25, marginLeft: 15 }}>
                    <Text style={{ fontFamily: "Roboto-Regular", fontWeight: "700", color: COLORS.primary, fontSize: 18 }}>Cards, UPI & More</Text>
                </View>

                <TouchableOpacity activeOpacity={0.6} style={{ marginTop: 25, marginLeft: 15, borderBottomWidth: 1, flexDirection: "row", paddingBottom: 10, borderBottomColor:modalVisible ?COLORS.grey:"#EBEBEB" }}>
                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, color: COLORS.primary }}>Cards</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, color: COLORS.grey }}>Master, Visa, rupay more</Text>
                    </View>
                    <Entypo style={{ position: "absolute", right: 15 }} color={COLORS.primary} size={22} name="chevron-small-right" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={{ marginTop: 25, marginLeft: 15, borderBottomWidth: 1, flexDirection: "row", paddingBottom: 10, borderBottomColor:modalVisible ?COLORS.grey:"#EBEBEB" }}>
                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, color: COLORS.primary }}>UPI/QR</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, color: COLORS.grey }}>Google pay, phone pe & more</Text>
                    </View>
                    <Entypo style={{ position: "absolute", right: 15 }} color={COLORS.primary} size={22} name="chevron-small-right" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={{ marginTop: 25, marginLeft: 15, borderBottomWidth: 1, flexDirection: "row", paddingBottom: 10, borderBottomColor:modalVisible ?COLORS.grey: "#EBEBEB" }}>
                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, color: COLORS.primary }}>Netbanking</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, color: COLORS.grey }}>All Indian Bank</Text>
                    </View>
                    <Entypo style={{ position: "absolute", right: 15 }} color={COLORS.primary} size={22} name="chevron-small-right" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.6} style={{ marginTop: 25, marginLeft: 15, borderBottomWidth: 1, flexDirection: "row", paddingBottom: 10, borderBottomColor:modalVisible ?COLORS.grey: "#EBEBEB" }}>
                    <View>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, color: COLORS.primary }}>Wallet</Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, color: COLORS.grey }}>Rozarpay& more</Text>
                    </View>
                    <Entypo style={{ position: "absolute", right: 15 }} color={COLORS.primary} size={22} name="chevron-small-right" />
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=>setModalVisible(true)} activeOpacity={0.6} style={{ backgroundColor: COLORS.orange, marginVertical: 30, height: 55, alignItems: "center", justifyContent: "center", marginHorizontal: 20, borderRadius: 30 }}>
                    <Text style={{ color: COLORS.WHITE, fontFamily: "Roboto-Bold", fontSize: 17 }}>Pay Now</Text>
                </TouchableOpacity>

               

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                   
                >
                    <View style={{height:280,backgroundColor:COLORS.WHITE,borderRadius:11,marginHorizontal:30,marginTop:Screen.height/4,elevation:5}}>
                        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={{right:15,top:15,position:"absolute"}}>
                      <AntDesign color={COLORS.grey} style={{fontSize:25}} name="close"/>
                           
                        </TouchableOpacity>
                        <View style={{alignItems:"center",justifyContent:"center",marginTop:50}}>
                        <View style={{width:100,height:100,borderRadius:50,backgroundColor:COLORS.lightgrey,alignItems:"center",justifyContent:"center"}}>
                            <Image style={{resizeMode:"cover"}} source={require("../../assets/image/cart.png")}/>
                            </View>
                        </View>
                      
                        <View style={{alignItems:"center",justifyContent:"center",marginTop:10}}>
                            <Text style={{color:"#994FB1",fontWeight:"800",fontSize:17,fontFamily:"Roboto-Regular"}}>THANK YOU!</Text>
                        </View>

                        <View style={{alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontWeight:"400",fontFamily:"Roboto-Regular",fontSize:16,color:COLORS.grey}}>Your order on It’s way</Text>
                            <Text style={{fontWeight:"400",fontFamily:"Roboto-Regular",fontSize:12,color:COLORS.grey,marginTop:5}}>The order confirmation has been sent to your mail </Text>
                        </View>
                    </View>
                </Modal>
   
            </ScrollView>
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

        fontSize: 17,
        color: COLORS.primary
    }
})