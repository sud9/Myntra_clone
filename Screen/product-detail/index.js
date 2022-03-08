import { View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from "../../Header/index"
import AntDesign from "react-native-vector-icons/AntDesign"
import COLORS from '../../assets/Color';
import Data from "../../assets/Data/Data6"
export default function index() {
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    return (
        <View contentContainerStyle={{}} >
            <View style={{ width: windowWidth, height: windowHeight / 14, backgroundColor: "white", elevation: 5, }}>
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: 16 }}>
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center", flex: 1 }}>
                        <TouchableOpacity activeOpacity={0.6}>
                            <AntDesign style={{}} name="arrowleft" color="black" size={28} />
                        </TouchableOpacity>
                        <Text style={{ fontFamily: "Roboto-Bold", color: COLORS.primary, fontSize: 17, flex: 1, marginLeft: 10 }}>Tailored Fit</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <AntDesign color={COLORS.primary} size={21} name='search1' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingHorizontal: 24 }}>

                            <Image source={require("../../assets/image/heart.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <Image source={require("../../assets/image/bag.png")} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <ScrollView>

            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ height:windowHeight/1.2,backgroundColor:"yellow"  }}
                pagingEnabled={true}
                horizontal
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{marginRight:10,backgroundColor:"green",width:windowWidth,height:516}}>
                            <Image resizeMode='cover' style={{width:"100%",height:"75%",flex:1}} source={item.img} />
                        </View>
                    )
                }}
            />

</ScrollView>
        </View>

    )
}