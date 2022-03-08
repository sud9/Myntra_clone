import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, FlatList, Linking,Button} from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import COLORS from '../../assets/Color';
import Data2 from "../../assets/Data/Data3"

export default function index({navigation}) {
    const [selectedId, setSelectedId] = React.useState(null);
   
    const DATA = [
        {
            id: "1",
            title: "All",
            url: "https://www.wwe.com"
        },
        {
            id: "2",
            title: "Men",
            url: "https://www.youtube.com/watch?v=wsasFkpinHE"
        },
        {
            id: "3",
            title: "Women",
            url: "https://www.yotube.com"
        },
        {
            id: "4",
            title: "Women",
            url: "https://www.yotube.com"
        },
        {
            id: "5",
            title: "Kids",
            url: "https://www.yotube.com"
        },
        {
            id: "6",
            title: "Kids",
            url: "https://www.yotube.com"
        },
        {
            id: "7",
            title: "Kids",
            url: "https://www.yotube.com"
        },
    ];
    return (
        <View style={{flex:1}}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Ionicons style={{ marginLeft: 15 }} color="black" name="menu" size={28} />
                <Ionicons style={{ position: "absolute", right: 60 }} color="black" name="heart-outline" size={28} />
                <Feather style={{ position: "absolute", right: 100 }} color="black" name="bell" size={25} />
                <SimpleLineIcons style={{ position: "absolute", right: 20 }} color="black" name="handbag" size={20} />

            </View>

            <ScrollView contentContainerStyle={{}} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>

                <View style={{ marginTop: 20, flexDirection: "row", borderWidth: 1, borderColor: COLORS.orange, backgroundColor: COLORS.lightgrey, marginHorizontal: 20, borderRadius: 11, alignItems: "center" }}>
                    <AntDesign style={{ marginLeft: 10 }} name="search1" size={20} />
                    <TextInput style={{ paddingLeft: 10 }} placeholder='Search for Products, Brand and more' />

                </View>

                <View style={{ marginTop: 20, marginLeft: 20, flexDirection: "row" }}>
                    <Image source={require("../../assets/image/nav.png")} />
                    <Text style={{ color: COLORS.primary, fontWeight: "500", fontFamily: "Roboto-Regular", fontSize: 15, marginLeft: 10 }}>Delivery to 250001</Text>
                    <Entypo style={{ color: COLORS.primary, fontSize: 18, marginLeft: 7, marginTop: 2 }} name="chevron-down" />
                </View>

             

                <View style={{ marginTop: 24, borderTopWidth: 1, borderBottomWidth: 1, height: 80, borderColor: "#ECECEC" }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => { setSelectedId(item.id), Linking.openURL(item.url) }} activeOpacity={0.6} style={{ height: 42, borderRadius: 57, backgroundColor: item.id === selectedId ? COLORS.orange : "#EEEEEE", marginLeft: 8, alignItems: "center", justifyContent: "center", alignSelf: "center", borderWidth: 1, borderColor: "#D4D4D4" }}>
                                    <Text style={{ fontSize: 16, color: item.id === selectedId ? COLORS.WHITE : COLORS.primary, fontWeight: "700", paddingHorizontal: 20, fontFamily: "Roboto-Regular" }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <View style={{ backgroundColor: COLORS.WHITE, height: 220 }}>
                    <Text style={{ fontWeight: "700", color: COLORS.primary, fontFamily: "Roboto-Regular", fontSize: 16, marginLeft: 20, marginTop: 20 }}>Shop brands you know and love</Text>
                    <Text style={{ marginLeft: 20, color: "#5B5B5B", fontSize: 13 }}>Greate stuff New and used items added every day</Text>



                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={Data2}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <TouchableOpacity style={{width:75,height:75, borderRadius: 75/2, borderWidth: 1, borderColor: "#D4D4D4", backgroundColor: "white", alignItems: "center", justifyContent: "center", marginLeft: 8, marginTop: 20 }}>
                                        <Image style={{}} resizeMode='cover' source={item.image} />

                                    </TouchableOpacity>
                                    <Text style={{ textAlign: "center", color: COLORS.primary, fontWeight: "400", marginTop: 10, fontFamily: "Roboto-Regular" }}>{item.title}</Text>
                                </View>

                            )
                        }}
                    />
                </View>
              
                <View style={{ backgroundColor:COLORS.WHITE,height:620}}>
                    <View style={{ flexDirection: "row", paddingTop: 20 }}>
                        <Text style={{ color: COLORS.primary, fontWeight: "700", fontFamily: "Roboto-Regular", marginLeft: 20, fontSize: 17 }}>See what's selling</Text>
                        <Text style={{ color: COLORS.orange, fontWeight: "600", fontFamily: "Roboto-Regular", position: "absolute", right: 18, paddingTop: 20, fontSize: 17 }}>View All</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20 }}>

                        <View style={{ width: 188, height: 255, elevation: 10, backgroundColor: "white", marginHorizontal: 5, borderRadius: 10 }}>
                            <Image style={{ height: 140, borderTopLeftRadius: 10, borderTopRightRadius: 10, width: "100%" }} source={require("../../assets/image/rec49.png")} />
                            <Text style={{ color: COLORS.primary, fontWeight: "800", fontFamily: "Roboto-Regular", fontSize: 17, marginLeft: 10, marginTop: 10 }}>URBANIC</Text>
                            <Text style={{ color: COLORS.grey, fontWeight: "600", fontFamily: "Roboto-Regular", fontSize: 14, marginLeft: 10, marginTop: 5 }}>Solid Velvet Bomber Jacket</Text>
                            <Text style={{ color: "#994FB1", fontWeight: "500", fontSize: 15, marginLeft: 10, marginTop: 2 }}>Upto 60% Off</Text>
                        </View>

                        <View style={{ width: 188, height: 255, elevation: 10, backgroundColor: "white", marginHorizontal: 5, borderRadius: 10 }}>
                            <Image style={{ height: 140, borderTopLeftRadius: 10, borderTopRightRadius: 10, width: "100%" }} source={require("../../assets/image/cloth.png")} />
                            <Text style={{ color: COLORS.primary, fontWeight: "800", fontFamily: "Roboto-Regular", fontSize: 17, marginLeft: 10, marginTop: 10 }}>URBANIC</Text>
                            <Text style={{ color: COLORS.grey, fontWeight: "600", fontFamily: "Roboto-Regular", fontSize: 14, marginLeft: 10, marginTop: 5 }}>Solid Velvet Bomber Jacket</Text>
                            <Text style={{ color: "#994FB1", fontWeight: "500", fontSize: 15, marginLeft: 10, marginTop: 2 }}>Upto 60% Off</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20 }}>

                        <View style={{ width: 188, height: 255, elevation: 10, backgroundColor: "white", marginHorizontal: 5, borderRadius: 10 }}>
                            <Image style={{ height: 140, borderTopLeftRadius: 10, borderTopRightRadius: 10, width: "100%" }} source={require("../../assets/image/rec49.png")} />
                            <Text style={{ color: COLORS.primary, fontWeight: "800", fontFamily: "Roboto-Regular", fontSize: 17, marginLeft: 10, marginTop: 10 }}>URBANIC</Text>
                            <Text style={{ color: COLORS.grey, fontWeight: "600", fontFamily: "Roboto-Regular", fontSize: 14, marginLeft: 10, marginTop: 5 }}>Solid Velvet Bomber Jacket</Text>
                            <Text style={{ color: "#994FB1", fontWeight: "500", fontSize: 15, marginLeft: 10, marginTop: 2 }}>Upto 60% Off</Text>
                        </View>

                        <View style={{ width: 188, height: 255, elevation: 10, backgroundColor: "white", marginHorizontal: 5, borderRadius: 10 }}>
                            <Image style={{ height: 140, borderTopLeftRadius: 10, borderTopRightRadius: 10, width: "100%" }} source={require("../../assets/image/cloth.png")} />
                            <Text style={{ color: COLORS.primary, fontWeight: "800", fontFamily: "Roboto-Regular", fontSize: 17, marginLeft: 10, marginTop: 10 }}>URBANIC</Text>
                            <Text style={{ color: COLORS.grey, fontWeight: "600", fontFamily: "Roboto-Regular", fontSize: 14, marginLeft: 10, marginTop: 5 }}>Solid Velvet Bomber Jacket</Text>
                            <Text style={{ color: "#994FB1", fontWeight: "500", fontSize: 15, marginLeft: 10, marginTop: 2 }}>Upto 60% Off</Text>
                        </View>
                    </View>
                
        

                </View>

              
                <View style={{ flexDirection: "row", paddingTop: 15 }}>
                        <Text style={{ color: COLORS.primary, fontWeight: "700", fontFamily: "Roboto-Regular", marginLeft: 20, fontSize: 17 }}>Trend Alerts</Text>
                        <Text style={{ color: COLORS.orange, fontWeight: "700", fontFamily: "Roboto-Regular", position: "absolute", right: 18,top:15, fontSize: 16 }}>View All</Text>
                    </View>
            </ScrollView>
        </View>
    );
}
