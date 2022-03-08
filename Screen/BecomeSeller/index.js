import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import COLORS from "../../assets/Color/index"
import Ionicons from "react-native-vector-icons/Ionicons"
import RBSheet from "react-native-raw-bottom-sheet";
import Header from "../../Header/index2"
export default function index({navigation}) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
         
           <Header icon="arrowleft"/>
         
            <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: COLORS.WHITE, }}>

                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: "#994FB1", fontWeight: "700", fontFamily: "Roboto-Regular", fontSize: 20 }}>Become a Seller</Text>
                    <Text style={{ width: 220, marginTop: 17, color: "#5B5B5B" }}>Do you want to become a seller..
                        please register as seller</Text>
                </View>
                <TouchableOpacity onPress={() => this.RBSheet.open()} activeOpacity={0.6} style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: "#994FB1", margin: 20, alignItems: "center", justifyContent: "center" }}>
                    <Image resizeMode="contain" source={require("../../assets/image/img.png")} />
                    <View style={{ width: 30, height: 30, borderRadius: 16, backgroundColor: "#994FB1", position: "absolute", alignItems: "center", justifyContent: "center", bottom: 5, right: -8 }}>
                        <SimpleLineIcons color={COLORS.WHITE} size={15} name="pencil" />
                    </View>
                </TouchableOpacity>

                <View>
                    <TextInput placeholderTextColor={"#7C7C7C"} style={{ ...styles.txtinpt }} placeholder='GSTNo' />
                    <TextInput placeholderTextColor={"#7C7C7C"} style={{ ...styles.txtinpt }} placeholder='Company  Name' />
                    <TextInput placeholderTextColor={"#7C7C7C"} style={{ ...styles.txtinpt }} keyboardType='numeric' placeholder='Account Number' />
                    <TextInput placeholderTextColor={"#7C7C7C"} style={{ ...styles.txtinpt }} placeholder='IFSC Code' />
                    <TextInput placeholderTextColor={"#7C7C7C"} style={{ ...styles.txtinpt }} placeholder='Account Holder name' />


                    <View style={{ height: 60, borderStyle: "dashed", borderWidth: 2, borderColor: "#0093ED", backgroundColor: "#EAF9FF", marginHorizontal: 15, borderRadius: 11, flexDirection: "row", marginTop: 15 }}>
                        <TextInput style={{ paddingLeft: 20, fontFamily: "Roboto-Regular", fontSize: 16 }} placeholderTextColor={"#7C7C7C"} placeholder='Add Attachment' />
                        <Ionicons color={"#0CA5DF"} style={{ position: "absolute", right: 12, top: 12 }} size={30} name="attach-sharp" />
                    </View>


                </View>

                <TouchableOpacity onPress={()=>navigation.navigate("sellerhome")} activeOpacity={0.6} style={{ width: 380, height: 55, backgroundColor: COLORS.orange, alignSelf: "center", borderRadius: 57, alignItems: "center", justifyContent: "center", marginTop: 43, marginBottom: 40 }}>
                    <Text style={{ fontFamily: "Roboto-Black", color: COLORS.WHITE, fontSize: 17, fontWeight: "700" }}>Send Reset Instruction</Text>
                </TouchableOpacity>

                <RBSheet
                animationType='slide'
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={320}
                   
                    openDuration={1050}
                    customStyles={{
                        container: {
                    borderTopLeftRadius:15,borderTopRightRadius:15
                        }
                    }}
                ><View style={{alignItems:"center",marginTop:30}}>
                    <Text style={{fontFamily:"Roboto-Regular",color:COLORS.primary,fontWeight:"600",fontSize:20}}>Upload Photo</Text>
                    <Text style={{fontFamily:"Roboto-Regular",color:COLORS.grey,fontWeight:"600",fontSize:15}}>Choose Your Profile Picture</Text>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.6} style={{backgroundColor:COLORS.orange,alignItems:"center",justifyContent:"center",marginTop:25,height:50,marginHorizontal:20,borderRadius:11}}>
                           <Text style={{fontFamily:"Roboto-Regular",color:COLORS.WHITE,fontWeight:"700",fontSize:16}}>Take Photo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6}  style={{backgroundColor:COLORS.orange,alignItems:"center",justifyContent:"center",marginTop:20,height:50,marginHorizontal:20,borderRadius:11}}>
                           <Text style={{fontFamily:"Roboto-Regular",color:COLORS.WHITE,fontWeight:"700",fontSize:16}}>Choose From Library</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6}  style={{backgroundColor:COLORS.orange,alignItems:"center",justifyContent:"center",marginTop:20,height:50,marginHorizontal:20,borderRadius:11}}>
                           <Text style={{fontFamily:"Roboto-Regular",color:COLORS.WHITE,fontWeight:"700",fontSize:16}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    txtinpt: {
        height: 60,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        backgroundColor: "rgba(0,0,0,0.03)",
        marginHorizontal: 15,
        borderRadius: 11,
        paddingLeft: 20, marginTop: 15, fontFamily: "Roboto-Regular", fontSize: 16
    }
})