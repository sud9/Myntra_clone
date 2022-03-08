import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import React, { useState } from "react";
import Header from "../../Header/index2"
import COLORS from '../../assets/Color'
import Data2 from "../../assets/Data/Data4" 
export default function index() {
    const [selectedId, setSelectedId] = useState("1");
    const Data = [
        {
            id: "1",
            type: "Pending"
        },
        {
            id: "2",
            type: "Processed"
        },
        {
            id: "3",
            type: "Complete"
        },
        {
            id: "4",
            type: "Cancelled"
        },
        {
            id: "5",
            type: "Returned"
        },

    ]



    return (
        <View style={{}}>
            <Header icon="arrowleft" name="My Listing" />
            <FlatList
           
                showsHorizontalScrollIndicator={false}
        
                horizontal
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{height:80}}>
                        <View style={{marginHorizontal: 10, marginTop: 15}}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => setSelectedId(item.id)} style={{ width: 100, height: 48, borderRadius: 100, backgroundColor: item.id === selectedId ? COLORS.violet : "#EEEEEE", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#DFDFDF" }}>
                                <Text style={{ color: item.id === selectedId ? COLORS.WHITE : COLORS.primary, fontFamily: "Roboto-Regular", fontWeight: "800", fontSize: 16 }}>{item.type}</Text>
                            </TouchableOpacity>
                        </View>
                        </View>

                    )
                }}
            />

         <FlatList
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{marginTop:10}}
         data={Data2}
         keyExtractor={(item) =>item.id}
         renderItem={({item}) => {
             return(
                 <View style={{}}>
                     <View  style={{flexDirection:"row",height:161,backgroundColor:COLORS.WHITE,marginTop:12}}>
                         <Image style={{width:131,height:161}} source={item.img}/>
                         <View style={{marginTop:20,marginLeft:20}}>
                             <Text style={{fontFamily:"Roboto-Regular",fontWeight:"500",color:COLORS.primary}}>{item.orderid}</Text>
                         <Text style={{fontFamily:"Roboto-Bold",fontSize:18,marginTop:10,color:COLORS.primary}}>{item.name}</Text>
                         <Text style={{fontFamily:"Roboto-Regular",fontSize:16}}>{item.type}</Text>

                         <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:8}}>
                             <Text style={{fontFamily:"Roboto-Regular",fontWeight:"700",fontSize:17,color:COLORS.primary}}>{item.price}</Text>
                             <Text style={{textDecorationLine:"line-through",color:"#B3B4BB",marginLeft:10,fontSize:17}}>{item.Mrp}</Text>
                             <Text style={{marginLeft:10,color:"rgb(255,154,90)",fontWeight:"700",fontSize:17}}>{item.disc}</Text>
                             <Text style={{marginLeft:10,fontFamily:"Roboto-Regular",fontWeight:"700",fontSize:17}}>Qty:{item.Qty}</Text>
                         </View>
                         </View>
                     </View>
                 </View>
             )
         }}
         />

        </View>
    )
}