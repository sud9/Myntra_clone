import React, { useRef } from 'react'
import { View, Text, ScrollView, StyleSheet, StatusBar, FlatList, TouchableOpacity, Image, Dimensions, Pressable,Modal,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import COLORS from "../../assets/Color/index"
import StepIndicator from "react-native-step-indicator";
import DATA from "../../constant/Data/data1"
import RBSheet from "react-native-raw-bottom-sheet";
import * as Animatable from 'react-native-animatable';
export default function index({navigation}) {
    const [Visible, setVisible] = React.useState(null);
   const [select,setselect] = React.useState (0);
  const [size,setsize] = React.useState (0);

    const refRBSheet = useRef();
    const refRBSheet1 = useRef();
    const Screen = Dimensions.get("screen");
    const Size = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const SizeList = () => {
        return (
            <ScrollView showsHorizontalScrollIndicator={false} scrollEventThrottle={16} horizontal={true} style={{ width: Screen.width,marginTop:25}}>
                {Size.map((item, index) => (
                    <View key={index}>
                       
                            <TouchableOpacity onPress={()=>setselect(index)}  style={{width:40,height:40,borderRadius:20,borderWidth:1,borderColor:select==index ?COLORS.orange:COLORS.primary,backgroundColor:COLORS.WHITE,alignItems:"center",justifyContent:"center",marginHorizontal:8}}>
                              <Text  style={{fontWeight:"700",color:select== index ? COLORS.orange:COLORS.primary,fontSize:16}}>{item}</Text>
                            </TouchableOpacity>

                            
                        </View>
                        
                   
                ))}
            </ScrollView>
        )
    }




    
    const DataList = () => {
        return (
            <View style={{ ...styles.cataegorylistcontainer }}>
                {DATA.map((item, index) => (
                    <View key={index}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 131, height: 193 }} source={item.image} />
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: "600", fontSize: 15, color: COLORS.primary, marginLeft: 20 }}>{item.productName}</Text>
                                <Text style={{ fontWeight: "400", fontSize: 13, color: COLORS.primary, marginLeft: 20, paddingTop: 2 }}>{item.color}</Text>
                                <Text style={{ fontWeight: "400", fontSize: 11, color: COLORS.darkgrey, marginLeft: 20, paddingTop: 2 }}>{item.seller}</Text>

                                <View style={{ flexDirection: "row", marginTop: 8 }}>
                                    <Pressable onPress={() => refRBSheet.current.open()} style={{ flexDirection: "row", backgroundColor: COLORS.lightgrey, height: 20, borderRadius: 3, marginLeft: 15, alignSelf: "flex-start" }}>
                                        <Text style={{ fontWeight: "700", fontFamily: "Roboto-Black", color: COLORS.primary, fontSize: 12, paddingHorizontal: 5, textAlign: "center" }}>Size: Onesize</Text>
                                        <AntDesign style={{ paddingHorizontal: 2, marginTop: 4 }} color={COLORS.primary} size={8} name="caretdown" />
                                    </Pressable>
                                    <Pressable onPress={() => refRBSheet1.current.open()} style={{ flexDirection: "row", backgroundColor: COLORS.lightgrey, height: 20, borderRadius: 3, marginLeft: 15, alignSelf: "flex-start" }}>
                                        <Text style={{ fontWeight: "700", fontFamily: "Roboto-Black", color: COLORS.primary, fontSize: 12, paddingHorizontal: 5, textAlign: "center" }}>Qty: 1</Text>
                                        <AntDesign style={{ paddingHorizontal: 2, marginTop: 4 }} color={COLORS.primary} size={8} name="caretdown" />
                                    </Pressable>
                                    <RBSheet
                                        keyboardAvoidingViewEnabled={true}

                                        ref={refRBSheet}
                                        height={230}
                                        closeOnDragDown={true}
                                        closeOnPressMask={Visible}
                                        closeOnPressBack={true}
                                        animationType={'fade'}
                                        closeDuration={550}

                                        customStyles={{
                                            wrapper: {
                                                backgroundColor: "transparent"
                                            },
                                            draggableIcon: {
                                                backgroundColor: "#000"
                                            }
                                        }}
                                    >
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                                            <Text style={{ fontFamily: 'Roboto-Black', fontWeight: "700", color: COLORS.primary, marginLeft: 20 }}>Select Size</Text>
                                            <AntDesign onPress={() => setVisible(!Visible)} color={COLORS.primary} style={{ marginRight: 10, fontWeight: "700" }} size={22} name='close' />
                                        </View>
                                        <View style={{ borderWidth: 1.6, alignSelf: "flex-start", borderRadius: 20, marginLeft: 20, marginTop: 8, borderColor: COLORS.orange }}>
                                            <Text style={{ padding: 8, color: COLORS.orange, fontWeight: "600", fontSize: 13 }}>Onesize</Text>
                                        </View>
                                        <View style={{ marginTop: 15, marginLeft: 20, flexDirection: "row" }}>
                                            <Text style={{ fontWeight: "700", fontFamily: "Roboto-Bold", color: COLORS.primary, fontSize: 14 }}>₹1975</Text>
                                            <Text style={{ textDecorationLine: "line-through", color: COLORS.grey, fontSize: 14, marginLeft: 10 }}> ₹ 2599 </Text>
                                            <Text style={{ color: COLORS.orange, fontWeight: "400", marginLeft: 5 }}> (Rs 624 OFF)</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", paddingVertical: 12, marginLeft: 20 }}>
                                            <Text style={{ color: COLORS.darkgrey, fontFamily: "Roboto-Black", fontSize: 11 }}>Seller :</Text>
                                            <Text style={{ fontWeight: "600", color: COLORS.primary, fontSize: 11, marginLeft: 5 }}>RetailNet</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => setVisible(!Visible)} activeOpacity={0.8} style={{ backgroundColor: COLORS.orange, width: Dimensions.get('screen').width, height: 50, alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                                            <Text style={{ color: COLORS.WHITE, fontWeight: '400', fontSize: 15 }}>Done</Text>
                                        </TouchableOpacity>
                                    </RBSheet>



                                    <RBSheet
                            keyboardAvoidingViewEnabled={true}

                            ref={refRBSheet1}
                            height={180}
                            closeOnDragDown={true}
                            closeOnPressMask={Visible}
                            closeOnPressBack={true}
                          
                            closeDuration={550}

                            customStyles={{
                                wrapper: {
                                    backgroundColor: "transparent"
                                },
                                draggableIcon: {
                                    backgroundColor: "#000"
                                }
                            }}
                        >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
                                <Text style={{ fontFamily: 'Roboto-Black', fontWeight: "700", color: COLORS.primary, marginLeft: 20,fontSize:14 }}>Select Quantity</Text>
                                <AntDesign onPress={() => setVisible(!Visible)} color={COLORS.primary} style={{ marginRight: 10, fontWeight: "700" }} size={22} name='close' />
                            </View>
                           
                            <SizeList/>
                           
                          <TouchableOpacity onPress={() => setVisible(!Visible)} activeOpacity={0.7} style={{backgroundColor:COLORS.orange,alignItems:"center",height:40,justifyContent:"center"}}>
                              <Text style={{ color: COLORS.WHITE, fontWeight: '400', fontSize: 15 }}>Done</Text>
                          </TouchableOpacity>
                        </RBSheet>


                                </View>
                            </View>
                        </View>
                    </View>
                ))}

            </View>
        )
    }

    const [currentPosition, setcurrentPosition] = React.useState("0")
    const labels = ["Bag", "Address", "Payment"];
    const customStyles = {
        stepIndicatorSize: 10,
        currentStepIndicatorSize: 10,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: "#fe7013",
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: "#fe7013",
        stepStrokeUnFinishedColor: "#aaaaaa",
        separatorFinishedColor: "#fe7013",
        separatorUnFinishedColor: "#aaaaaa",
        stepIndicatorFinishedColor: "#fe7013",
        stepIndicatorUnFinishedColor: "#ffffff",
        stepIndicatorCurrentColor: "#ffffff",

        stepIndicatorLabelCurrentColor: "#fe7013",
        stepIndicatorLabelFinishedColor: "#ffffff",
        stepIndicatorLabelUnFinishedColor: "#aaaaaa",
        labelColor: "#999999",
        labelSize: 13,
        currentStepLabelColor: "#fe7013"
    };

    return (
        <SafeAreaView >
            <StatusBar translucent={true} barStyle="dark-content" backgroundColor="transparent" />
            <View style={styles.headercontainer}>
                <View style={{ flexDirection: "row", paddingBottom: 12 }}>
                    <AntDesign style={{ marginLeft: 10 }} size={25} color={COLORS.primary} name="arrowleft" />
                    <Text style={styles.txt1}>My Cart</Text>
                </View>

                <AntDesign style={{ position: "absolute", right: 10, paddingBottom: 12 }} size={20} color={COLORS.primary} name="hearto" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <StepIndicator
                    stepCount={3}
                    onPress={() => { setcurrentPosition("2") }}
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                    labels={labels}
                    
                />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30, marginLeft: 20 }}>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Black", fontSize: 15 }}>Delivery to :</Text>
                            <Text style={{ fontWeight: "700", color: COLORS.primary, fontFamily: "Roboto-Black", fontSize: 15 }}> 250001</Text>
                        </View>

                        <Text style={{ color: COLORS.primary, fontFamily: "Roboto-Black", fontSize: 15 }}>C Block Sector 144, Mahagun, Noida</Text>
                    </View>
                    <Text style={{ color: COLORS.orange, fontWeight: "500", fontSize: 14, paddingHorizontal: 10 }}>Change</Text>
                </View>

                <DataList />
                <DataList />
                <DataList />
                <DataList />

           <TouchableOpacity onPress={()=>navigation.navigate("coupon")} activeOpacity={0.6} style={{width:Screen.width,height:60,backgroundColor:"#FFE4C9",marginVertical:30,justifyContent:"center",borderStyle:"dashed",borderWidth:1,borderColor:COLORS.orange}}>
              <View style={{flexDirection:"row"}}>
                  <Image style={{width:24,height:24,marginLeft:20}} source={require("../../assets/image/discount.png")}/>
                  <Text style={{fontWeight:"bold",fontFamily:"Roboto-Black",color:COLORS.primary,fontSize:16,marginLeft:20}}>Apply Coupon</Text>
                  <Entypo size={16} style={{position:"absolute",right:15,fontWeight:"bold",color:COLORS.primary,top:2}} name="chevron-right"/>
               
              </View>
           </TouchableOpacity>


           <View style={{marginLeft:20}}>
               <Text style={{color:COLORS.primary,fontSize:16,fontFamily:"Roboto-Bold"}}>PRICE DETAILS</Text>
           </View>

           <View style={{marginBottom:80,marginTop:20}}>
               <View style={{flexDirection:"row"}}>
                   <Text style={{marginLeft:20,color:COLORS.darkgrey,fontFamily:"Roboto-Regular",fontWeight:"600",fontSize:16}}>Total MRP</Text>
                   <Text style={styles.pricedetailtxt2}>₹1202</Text>
               </View>
               <View style={{flexDirection:"row",marginTop:10}}>
                   <Text style={{marginLeft:20,color:COLORS.darkgrey,fontFamily:"Roboto-Regular",fontWeight:"600",fontSize:16}}>Shipping Charges</Text>
                   <Text style={styles.pricedetailtxt2}>Free</Text>
               </View>
               <View style={{flexDirection:"row",marginTop:10}}>
                   <Text style={{marginLeft:20,color:COLORS.darkgrey,fontFamily:"Roboto-Regular",fontWeight:"600",fontSize:16}}>Discount</Text>
                   <Text style={styles.pricedetailtxt2}>₹40</Text>
               </View>
               <View style={{flexDirection:"row",marginTop:30}}>
                   <Text style={{marginLeft:20,color:COLORS.darkgrey,fontFamily:"Roboto-Regular",fontWeight:"600",fontSize:16}}>Total Amount</Text>
                   <Text style={styles.pricedetailtxt2}>₹8,200</Text>
               </View>
  
               <TouchableOpacity activeOpacity={0.75} style={{backgroundColor:COLORS.orange,alignItems:"center",justifyContent:"center",marginHorizontal:20,height:60,marginTop:30,borderRadius:15}}>
                   <Text style={{color:COLORS.WHITE,fontFamily:"Roboto-Bold",fontSize:17}}>Proceed to Checkout</Text>
               </TouchableOpacity>
           </View>

            </ScrollView>
       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt1: {
        fontFamily: "Roboto-Black",
        color: COLORS.primary,
        fontWeight: "700",
        fontSize: 17,
        marginHorizontal: 20
    },
    headercontainer: {
        flexDirection: "row",
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#ECECEC"
    },
    cataegorylistcontainer: {
        width: Dimensions.get('screen').width,
        height: 193,
        backgroundColor: "white",
        marginTop: 10,
        
    },
    ridesFriends: {
        
       
        flexDirection: 'row',
      justifyContent:"space-evenly",
       
        marginVertical: 40,
        borderWidth:1,height:60,marginHorizontal:10
      },
      numbers: {
        fontSize: 15,
        color: '#31C283',
        fontWeight: 'bold',
        
      },
      verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
      },
      pricedetailtxt2:{
          fontFamily:"Roboto-Bold",
          fontSize:16,
          color:COLORS.primary,
          position:"absolute",
          right:12
      }
})



