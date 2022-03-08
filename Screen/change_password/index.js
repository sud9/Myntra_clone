import { View, Text,TextInput,TouchableOpacity,Alert,ScrollView,StatusBar } from 'react-native'
import React,{useState} from 'react'
import Header from "../../Header/index2"
import COLORS from '../../assets/Color'
import Feather from "react-native-vector-icons/Feather"

export default function index() {
  const [Hide,setHide] = useState()
  const [password, setpassword] = useState (null);
  const [confirmpassword,setconfirmpassword ] = useState('');
 const [error,seterror] = useState(false)
const [color,setcolor] =useState(null)
const onSigninpress=()=>{
  console.log("SignIn");
}
const checkinpt=()=>{
  backgroundColor:"red"
}
  return (
    <ScrollView>
     
     <Header  icon="arrowleft" name="Change Password"/>

     <View style={{marginHorizontal:25,marginTop:50}}>

        <TextInput  onBlur={()=>setcolor(COLORS.grey)} onFocus={()=>setcolor('rgba(153, 79, 177, 0.15)' )}  spellCheck={true} secureTextEntry={Hide ?false:true}  style={{borderWidth:1,paddingRight:50,borderRadius:10,fontWeight:"400",fontSize:15,paddingLeft:20,backgroundColor:color}} placeholderTextColor={COLORS.primary} placeholder='Old Password'/>
        <TouchableOpacity onPress={()=>setHide(!Hide)} style={{position:"absolute",right:20,top:15}}>
          <Feather size={20} color={COLORS.primary} name={Hide ? "eye" :"eye-off"}/>
        </TouchableOpacity>

     </View>

     <View style={{marginHorizontal:25,marginTop:30}}>

       <TextInput autoFocus={false} onBlur={()=>setcolor(COLORS.grey)} onFocus={()=>setcolor('rgba(153, 79, 177, 0.15)' )} onChangeText={setpassword} value={password}  secureTextEntry style={{borderWidth:1,paddingRight:50,borderRadius:10,fontWeight:"400",fontSize:15,paddingLeft:20,backgroundColor:color}} placeholderTextColor={COLORS.primary} placeholder='New Password'/>


    </View>

    <View style={{marginHorizontal:25,marginTop:30}}>

       <TextInput autoFocus={false} onFocus={()=>setcolor('rgba(153, 79, 177, 0.15)' )} onBlur={()=>setcolor(COLORS.grey)} onChangeText={setconfirmpassword} value={confirmpassword}    secureTextEntry style={{borderWidth:1,paddingRight:50,borderRadius:10,fontWeight:"400",fontSize:15,paddingLeft:20,backgroundColor:color}} placeholderTextColor={COLORS.primary} placeholder='Confirm Password'/>


    </View>

    <TouchableOpacity activeOpacity={0.8} style={{marginTop:80,alignItems:"center",justifyContent:'center',backgroundColor:COLORS.orange,marginHorizontal:20,borderRadius:40}}>
      <Text style={{paddingVertical:18,color:COLORS.WHITE,fontSize:20,fontWeight:"500",fontFamily:"Roboto-Medium"}}>Done</Text>
    </TouchableOpacity>




    </ScrollView>
  )
}

