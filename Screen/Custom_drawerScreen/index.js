import { View, Text, TouchableOpacity,Image, EdgeInsetsPropType } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Home from "../Home/index"
import { Divider } from 'react-native-elements';

export default function index({ props, navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop:0 }}>
                {/* <LinearGradient style={{  height: 120 }} colors={['#994FB1', '#DD5600']}>
                    <TouchableOpacity>
                   <TouchableOpacity activeOpacity={0.9} style={{width:57,height:57,borderRadius:4,backgroundColor:"white",marginTop:25,marginLeft:15,alignItems:"center",justifyContent:"center"}}>
                     <SimpleLineIcons color={"black"} size={28} name="user"/>
                   </TouchableOpacity>
                   <View style={{marginLeft:15,marginTop:10,flexDirection:"row"}}>
                       <Text style={{fontFamily:"Roboto-Bold",color:"white",fontSize:14.5}}>Surendra</Text>
                       <MaterialIcons size={20} style={{position:"absolute",right:20,top:0}} color={"white"} name="keyboard-arrow-right"/>
                   </View>
                   </TouchableOpacity>
                </LinearGradient>
                <View style={{backgroundColor:'White',marginTop:20, flex:1}}>
                  <Divider orientation='Horizontal' width={2}/>
                <DrawerItemList {...props} />
               
                </View> */}
                <LinearGradient style={{ height: 120 }} colors={['#994FB1', '#DD5600']}>
                    <TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} style={{ width: 57, height: 57, borderRadius: 4, backgroundColor: "white", marginTop: 25, marginLeft: 15, alignItems: "center", justifyContent: "center" }}>
                            <SimpleLineIcons color={"black"} size={28} name="user" />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 15, marginTop: 10, flexDirection: "row" }}>
                            <Text style={{ fontFamily: "Roboto-Bold", color: "white", fontSize: 14.5 }}>Surendra</Text>
                            <MaterialIcons size={20} style={{ position: "absolute", right: 20, top: 0 }} color={"white"} name="keyboard-arrow-right" />
                        </View>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={{  flex: 1 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate("category")} style={{ borderBottomWidth: 1,marginTop:10,height:63,borderBottomColor:"#e3e1dc"}}>
                    <DrawerItem  labelStyle={{ marginLeft: -15,fontFamily:"Roboto-Medium",fontSize:16.5, }} icon={() => (<Image style={{width:13,height:13}} source={require("../../assets/image/cat.png")}/>)} label="Shop by Categories" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomWidth: 1,marginTop:10,height:65,borderBottomColor:"#e3e1dc"}}>
                        <DrawerItem  style={{ flex: 1 }} labelStyle={{ marginLeft: -15,fontFamily:"Roboto-Medium",fontSize:16.5 }} label="Orders" icon={() => (<SimpleLineIcons color={"black"} size={15} name="social-dropbox" />)} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate("Faq")} activeOpacity={0.9} style={{marginLeft:50,marginTop:28}}>
                        <Text style={{fontFamily:"Roboto-Regular",fontSize:14,fontWeight:"600"}}>FAQs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9}  style={{marginLeft:50,marginTop:20}}>
                        <Text style={{fontFamily:"Roboto-Regular",fontSize:14,fontWeight:"600"}}>CONTACT US</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9}  style={{marginLeft:50,marginTop:20}}>
                        <Text style={{fontFamily:"Roboto-Regular",fontSize:14,fontWeight:"600"}}>LEGAL</Text>
                    </TouchableOpacity>
                </View>








            </DrawerContentScrollView>
        </View>
    )
}