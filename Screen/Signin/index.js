import React, { Component } from 'react'
import { Text, View, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button } from 'react-native-paper';
import { SocialIcon,Image } from 'react-native-elements'
export default class index extends Component {
    state = {
        Passwordicon:false,
        visible:""
      }
     
 
 
    constructor(props){
        super(props);
        this.state ={
           email:"",
           password:"",
           error:""
        }
    }
    handleEmail = (value) =>{
        this.setState({
            email:value
        })
    }
    handlePassword = (value) =>{
        this.setState({
            password:value
        })
    }

    submit =()=>{
        if (this.validate()){
         this.props.navigation.navigate("Home");
        }else{
            console.log('Error');
        }
    }

    validate=()=>{
        this.setState({
            error:""
        })
        const expression =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(! expression.test(this.state.email)){
            this.setState({
                error:'Invalid Email !'
            })
            return false;

        }  else if(this.state.password.length===0){
            this.setState({
                error:"Password Cannot be Empty !"
            })
            return false;
        } else if(this.state.password.length < 8){
            this.setState({
                error:"Password is too short"
            })
        }

            return true;
    }
    render() {
        
        return (
            
            <ScrollView contentContainerStyle={{flex:1}} scrollEventThrottle={400}  >
                
                <View style={{ flexDirection: "row",position: "absolute", left: 28, top: 10 }}>
                    <AntDesign style={{ backgroundColor: 'lightgrey', borderRadius: 35}} color="black" size={28} name="close" />
                    <Text style={{ fontFamily: "Roboto-Black", fontWeight: "bold", color: "#000000", fontSize: 20,  position: "absolute", left: 170,alignSelf:"center" }}>Sign in</Text>
                </View>
                <View style={{ position: "absolute", left: 30, top: 60 }}>
                    <Text style={{ color: "#994FB1", fontSize: 34, fontWeight: "bold", fontFamily: "Roboto-Black" }}>Hi</Text>
                </View>

                <View style={{ position: "absolute", left: 30, top: 120, width: 300, height: 70 }}>
                    <Text style={{ color: "#5B5B5B", fontSize: 15, fontFamily: "Roboto-Black" }}>You can use  your email address or continue with your social and apple account.</Text>
                </View>

                <View style={{ position: "absolute", top: 190, width: "90%", left: 20 }}>
                    <TextInput error={true} keyboardType="email-address" onChangeText={this.handleEmail} style={{ backgroundColor: "#EDE2F1" }} label="Email" mode='outlined' placeholder="Vickyshopping09@gmail.com" activeOutlineColor='#994FB1' />
                   
                    <TextInput  error={true}  style={{ backgroundColor: "#EDE2F1", marginTop: 25 }} label="phone" mode='outlined' placeholder="+9122556669633" activeOutlineColor='#994FB1' />

                         <TextInput  error={true}  onChangeText={this.handlePassword} style={{ backgroundColor: "#EDE2F1", marginTop: 25}} label="password" mode='outlined' secureTextEntry={!this.state.visible} activeOutlineColor='#994FB1'  right={<TextInput.Icon onPress={()=>this.setState({Passwordicon:!this.state.Passwordicon,visible:!this.state.visible})} name={this.state.Passwordicon ?"eye-outline" : "eye-off-outline"} />}/>
                        
          
                   
                </View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Resetpassword")} style={{ position: "absolute", left: 260, top: 450 }}>
                    <Text style={{ fontFamily: "Roboto-Black", color: "#994FB1", fontWeight: "normal", fontSize: 15 }}>Forgot Password?</Text>

                   
                </TouchableOpacity>
                {
                        (this.state.error.length ===0) ? null:<Text style={{color:"red",fontFamily:"Roboto-Black",fontSize:16,position:"absolute",paddingVertical:10,top: 450,alignSelf:"center"}}>{this.state.error}</Text>
                    }
              
                <View style={{ position: "absolute", top: 490, width: "90%", marginHorizontal: 20 }}>
                    <Button contentStyle={{ paddingTop: 10, fontFamily: "Roboto-black" }} style={{ backgroundColor: "#F86202", borderRadius: 57, height: 55 }} mode="contained" onPress={this.submit}>Sign In</Button>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', position: "absolute", top: 580, marginHorizontal: 30 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey' }} />
                    <View>
                        <Text style={{ width: 100, textAlign: 'center', fontFamily: "Roboto-Black", fontSize: 15, color: "#5B5B5B", marginHorizontal: 10 }}>or Sign in with</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey' }} />
                </View>

                <View style={{ position: "absolute", top: 610, flexDirection: "row", marginHorizontal: 10 }}>
                    <SocialIcon
                        fontStyle={{ fontSize: 15, fontFamily: "Roboto-Black" }}
                        iconSize={22}
                        style={{ width: "30%" }}
                        title='Facebook'
                        button
                        type='facebook'
                    />
   
                    <SocialIcon
                        fontStyle={{ fontSize: 15, fontFamily: "Roboto-Black", color: "black" }}
                        iconStyle={{color:"red"}}
                    iconSize={22}
                    style={{ width: "30%", backgroundColor: "white" }}
                    title='Google'
                    button
                    type='google'
                    />
                    <SocialIcon
                        iconSize={22}
                        fontStyle={{ fontSize: 15, fontFamily: "Roboto-Black" }}
                        style={{ width: "30%", backgroundColor: "black" }}
                        title='Apple'
                        button
                        type='apple'
                    />
                </View>

            <View style={{position:"absolute",top:680,alignSelf:"center"}}>
                
           <Text style={{fontFamily:"Roboto-Black",color:"#5B5B5B",fontWeight:"normal"}}>Haven’t signed up yet?</Text>
           <TouchableOpacity  onPress={()=>this.props.navigation.navigate("signup")}>
           <Text style={{fontFamily:"Roboto-Black",color:"#994FB1",fontWeight:"normal",textAlign:"center"}}>Create an account</Text>
           </TouchableOpacity>
        
            </View>

         
            </ScrollView>
           
        )
    }
}
