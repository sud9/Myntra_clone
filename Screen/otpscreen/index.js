// import React, { useState } from 'react'
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import AntDesign from "react-native-vector-icons/AntDesign"
// import COLORS from '../../assets/Color'
// import * as Animatable from 'react-native-animatable';
// export default class index extends Component {

// const [pin1, setpin1] = useState (null)

//     render() {
//         return (


//             <KeyboardAwareScrollView enableOnAndroid={true} showsVerticalScrollIndicator={false} style={{ flex: 1, marginTop: 30 }} bounces={false} >
             
//                 <View style={{ marginLeft: 20, marginTop: 10 }}>
//                     <Text style={styles.txt1}>OTP</Text>
//                 </View>
//                 <View style={{ width: 300, height: 77, marginLeft: 20, marginTop: 10, flex: 1 }}>

//                     <Text style={styles.txt2}>Please enter 4 - digit code sent to
//                         vickyshopping09@gmail.com
//                     </Text>
//                 </View>


//                 <View style={{ alignItems:"center",justifyContent:"center",flexDirection:"row"}}>

//                  <TextInput maxLength={1} style={styles.txtinput}/>
//                  <TextInput maxLength={1} style={styles.txtinput}/>
//                  <TextInput maxLength={1} style={styles.txtinput}/>
//                  <TextInput maxLength={1} style={styles.txtinput}/>
                 
//                 </View>


//                 <Text style={styles.txt3}>Resend Code</Text>

//                 <TouchableOpacity style={{ width: 380, height: 55, backgroundColor: COLORS.orange, alignSelf: "center", borderRadius: 57, alignItems: "center", justifyContent: "center", marginTop: 53 }}>
//                     <Text style={{ fontFamily: "Roboto-Black", color: COLORS.WHITE, fontSize: 17, fontWeight: "700" }}>Submit</Text>
//                 </TouchableOpacity>




//             </KeyboardAwareScrollView>

//         )
//     }
// }


// const styles = StyleSheet.create({
//     txt1: {
//         fontWeight: "bold",
//         fontSize: 22,
//         color: COLORS.violet,
//         fontFamily: "Roboto-Black"
//     },
//     txt2: {
//         fontFamily: "Roboto-Black",
//         fontSize: 15,
//         color: COLORS.grey
//     },
//     txt3: {
//         fontSize: 15, fontFamily: "Roboto-Black", fontWeight: "400", textAlign: "center", color: COLORS.violet, marginTop: 48
//     },
//     txtinput:{
//         width:60,height:50,borderWidth:0.8,borderRadius:11,marginHorizontal:5,fontSize:20,fontWeight:"500",textAlign:"center",borderColor:COLORS.grey
//     }
// })


 import React, { useState,useRef } from 'react'
 import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
 import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 import AntDesign from "react-native-vector-icons/AntDesign"
 import COLORS from '../../assets/Color'
  import * as Animatable from 'react-native-animatable';

export default function index() {
    const pin1 = useRef("");
    const pin2 = useRef("");
    const pin3 = useRef("");
    const pin4 = useRef("");
    const [otp,setotp] = useState({1: '',2: '',3: '',4: ''})
 
    return (
        <KeyboardAwareScrollView enableOnAndroid={true} showsVerticalScrollIndicator={false} style={{ flex: 1, marginTop: 30 }} bounces={false} >
             
                        <View style={{ marginLeft: 20, marginTop: 10 }}>
                         <Text style={styles.txt1}>OTP</Text>
                         </View>
                         <View style={{ width: 300, height: 77, marginLeft: 20, marginTop: 10, flex: 1 }}>
        
                             <Text style={styles.txt2}>Please enter 4 - digit code sent to
                                vickyshopping09@gmail.com
                            </Text>
                        </View>
        
        
                         <View style={{ alignItems:"center",justifyContent:"center",flexDirection:"row",width:"90%",alignSelf:"center"}}>
        
                          <TextInput keyboardType='number-pad' ref={pin1} onChangeText={text =>{setotp({...otp,1:text}); text && pin2.current.focus()}}  maxLength={1} style={styles.txtinput}/>
                          <TextInput keyboardType='number-pad' ref={pin2}  onChangeText={text =>{setotp({...otp,2:text});text ? pin3.current.focus():pin1.current.focus()}} maxLength={1} style={styles.txtinput}/>
                          <TextInput keyboardType='number-pad' ref={pin3} onChangeText={text =>{setotp({...otp,3:text});text ? pin4.current.focus():pin2.current.focus() }} maxLength={1} style={styles.txtinput}/>
                          <TextInput keyboardType='number-pad' ref={pin4} onChangeText={text =>{setotp({...otp,4:text});!text && pin3.current.focus()}} maxLength={1} style={styles.txtinput}/>
                         
                         </View>
        
        
                         <Text style={styles.txt3}>Resend Code</Text>
        
                        <TouchableOpacity style={{ width: 380, height: 55, backgroundColor: COLORS.orange, alignSelf: "center", borderRadius: 57, alignItems: "center", justifyContent: "center", marginTop: 53 }}>
                            <Text style={{ fontFamily: "Roboto-Black", color: COLORS.WHITE, fontSize: 17, fontWeight: "700" }}>Submit</Text>
                        </TouchableOpacity>
        
        
        
        
                   </KeyboardAwareScrollView>
        
    )
            
    }
        
        
        const styles = StyleSheet.create({
             txt1: {
                 fontWeight: "bold",
                 fontSize: 22,
                color: COLORS.violet,
                fontFamily: "Roboto-Black"
         },
            txt2: {
                fontFamily: "Roboto-Black",
                fontSize: 15,
             color: COLORS.grey
            },
            txt3: {
             fontSize: 15, fontFamily: "Roboto-Black", fontWeight: "400", textAlign: "center", color: COLORS.violet, marginTop: 48
            },
            txtinput:{
                width:60,height:50,borderWidth:0.8,borderRadius:11,marginHorizontal:15,fontSize:20,fontWeight:"500",textAlign:"center",borderColor:"lightgrey",elevation:2,backgroundColor:COLORS.WHITE
             }
         })
        




