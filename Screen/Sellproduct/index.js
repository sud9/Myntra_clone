import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from "../../Header/index"
import { TextInput } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign"
import COLORS from "../../assets/Color/index"
import Entypo from "react-native-vector-icons/Entypo"

export default function index() {
  const [text, setText] = React.useState("");
  const [selectedId, setSelectedId] = React.useState(1);
  const DATA = [
    {
      id: "1",
      Grade: "New",
      type: "New without tags(NWOT). No signs of wear. Unused."
    },
    {
      id: "2",
      Grade: "Like New",
      type: "New without tags(NWOT). No signs of wear. Unused."
    },
    {
      id: "3",
      Grade: "Good",
      type: "Gently used. One / few minor flaws. Functional."
    },
    {
      id: "4",
      Grade: "Fair",
      type: "Gently used. One / few minor flaws. Functional."
    }
  ]

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView scrollEventThrottle={16}  contentContainerStyle={{ marginTop: 12, borderTopWidth: 2, borderTopColor: "#ECECEC" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#994FB1", fontSize: 25, fontFamily: "Roboto-Bold", textAlign: "center", marginTop: 20 }}>Sell with us</Text>
          <Text style={{ marginLeft: 10, fontSize: 17, marginVertical: 13, color: "#5C5C5C" }}>Tell us what you are selling?</Text>

          <TextInput style={{ marginHorizontal: 15, backgroundColor: "#F4F4F4", height: 65 }}
            outlineColor='#ABABAB'
            activeOutlineColor='#ABABAB'
            mode='outlined'
            label="Enter product name"
            value={text}
            onChangeText={text => setText(text)}
          />

          <TextInput style={{ marginHorizontal: 15, backgroundColor: "#F4F4F4", marginTop: 10, height: 65 }}
            outlineColor='#ABABAB'
            activeOutlineColor='#ABABAB'
            mode='outlined'
            label="Enter product Quantity"
            value={text}
            onChangeText={text => setText(text)}
          />

          <TextInput style={{ marginHorizontal: 15, backgroundColor: "#F4F4F4", marginTop: 10, height: 65 }}
            outlineColor='#ABABAB'
            activeOutlineColor='#ABABAB'
            mode='outlined'
            right={<TextInput.Icon name={() => <AntDesign name={'down'} size={20} color="black" />} />}
            label="Select product categories"
            value={text}
            onChangeText={text => setText(text)}
          />

          <TextInput style={{ marginHorizontal: 15, backgroundColor: "#F4F4F4", marginTop: 10, height: 65 }}
            dense={true}
            outlineColor='#ABABAB'
            multiline={true}
            activeOutlineColor='#ABABAB'
            mode='outlined'
            right={<TextInput.Icon name={() => <AntDesign style={{}} name={'down'} size={20} color="black" />} />}
            label="Select Brand?"

            value={text}
            onChangeText={text => setText(text)}
          />

          <Text style={{ fontFamily: "Roboto-Regular", color: COLORS.primary, fontWeight: "800", fontSize: 18, marginLeft: 15, marginTop: 20 }}>UPLOAD IMAGES</Text>
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
            <TouchableOpacity activeOpacity={0.6} style={{ borderWidth: 1.8, borderColor: COLORS.orange, borderStyle: "dashed", height: 140, width: 200, borderRadius: 20, alignItems: "center", justifyContent: "center", backgroundColor: "#FFF8F3" }}>
              <View>
                <AntDesign style={{ textAlign: "center" }} name='plus' size={30} color={COLORS.orange} />
                <Text style={{ color: COLORS.orange, fontWeight: "700", fontSize: 20 }}>UPLOAD</Text>
              </View>
            </TouchableOpacity>


          </View>

          <Text style={{ fontFamily: "Roboto-Regular", color: COLORS.primary, fontWeight: "800", fontSize: 20, marginLeft: 15, marginTop: 20 }}>Description</Text>


          <View style={{ borderWidth: 1, borderColor: '#ABABAB', height: 128, marginHorizontal: 15, borderRadius: 10, backgroundColor: "#FCFCFC" }}>

          </View>
          <Text style={{ fontFamily: "Roboto-Regular", color: COLORS.primary, fontWeight: "800", fontSize: 20, marginLeft: 15, marginTop: 20 }}>Product Tags</Text>

          <View style={{ marginLeft: 15, marginTop: 10, flexDirection: "row", }}>
            <Text style={{ fontSize: 17, fontFamily: "Roboto-Regular", marginTop: 10 }}>#instagramfashion</Text>
            <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: "#994FB1", position: "absolute", right: 12, alignItems: "center", justifyContent: "center" }}>
              <Image resizeMode='contain' source={require("../../assets/image/pen.png")} />
            </TouchableOpacity>
          </View>


          <View style={{ marginLeft: 15, marginTop: 30, flexDirection: "row" }}>
            <Text style={{ fontSize: 17, fontFamily: "Roboto-Regular", marginTop: 10 }}>#facebookfashion</Text>
            <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: "#994FB1", position: "absolute", right: 12, alignItems: "center", justifyContent: "center" }}>
              <Image resizeMode='contain' source={require("../../assets/image/pen.png")} />
            </TouchableOpacity>
          </View>


          <View style={{ backgroundColor: "#FFFFFF", height: 60, marginTop: 30, justifyContent: "center" }}>
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <Text style={{ fontSize: 20, fontFamily: "Roboto-Regular", color: COLORS.orange, fontWeight: "700" }}>Add a Hashtag</Text>
              <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.orange, position: "absolute", right: 12, alignItems: "center", justifyContent: "center", top: -6 }}>
                <Entypo name="plus" size={28} color={COLORS.WHITE} />
              </TouchableOpacity>
            </View>

          </View>

          <Text style={{ fontSize: 20, fontFamily: "Roboto-Regular", color: COLORS.primary, fontWeight: "700", marginLeft: 15, marginTop: 20 }}>Condition</Text>

            <FlatList
            
            contentContainerStyle={{marginTop:20,alignItems:"center",justifyContent:"center"}}
            data={DATA}
            numColumns = {2}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) =>{
              return(
              
                <TouchableOpacity activeOpacity={0.6} onPress={() =>  setSelectedId(item.id)} style={{width:190,height:120,borderRadius:10,backgroundColor:item.id === selectedId ? "#994FB1" : COLORS.WHITE,alignItems:"center",justifyContent:"center",margin:8,borderWidth:2,borderColor:'#E5E5E5'}}>
                  <Text style={{fontFamily:"Roboto-Regular",color:item.id === selectedId ?COLORS.WHITE:COLORS.primary,fontWeight:"700",fontSize:18}}>{item.Grade}</Text>
                  <Text style={{fontFamily:"Roboto-Regular",color:item.id === selectedId ?COLORS.WHITE:"#7C7C7C",fontWeight:"700",fontSize:16,textAlign:"center",paddingHorizontal:10}}>{item.type}</Text>
                </TouchableOpacity>
                
            
              )
            }}
            />
            
           <Text style={{ fontSize: 20, fontFamily: "Roboto-Regular", color: COLORS.primary, fontWeight: "700", marginLeft: 15, marginTop: 10 }}> Select Attributes </Text>
        </View>
      </ScrollView>

    </View>
  );
}
