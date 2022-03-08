import React,{useEffect,useState} from 'react'
import { View, Text, ScrollView, Pressable, TextInput, StatusBar, Image, StyleSheet, ImageBackground, Button, TouchableOpacity,keyboard } from 'react-native'
import COLORS from '../../assets/Color';
import AntDesign from "react-native-vector-icons/AntDesign"
import * as Animatable from 'react-native-animatable';
export default function index({ navigation }) {
    const [searchBarfocused, setsearchBarfocused] =useState(false);
   
       
    
    const Listing = () => {
        const Optionlist = [
            { img: require('../../assets/image/buddha.jpg'), txt: "Rae Dunn Halloween", offer: "Upto 60% Off" },
            { img: require('../../assets/image/buddha.jpg'), txt: "Rae Dunn Halloween", offer: "Upto 60% Off" },
            { img: require('../../assets/image/buddha.jpg'), txt: "Rae Dunn Halloween", offer: "Upto 60% Off" },
            { img: require('../../assets/image/buddha.jpg'), txt: "Rae Dunn Halloween", offer: "Upto 60% Off" }
        ];

        return (
            <ScrollView showsHorizontalScrollIndicator={false} scrollEventThrottle={16} horizontal contentContainerStyle={styles.optioncontainer}>
                {Optionlist.map((option, index) =>
                    <View style={styles.optioncard} key={index}>
                        <Image style={styles.optioncardimg} source={option.img} />
                        <Text style={{ fontWeight: "400", fontSize: 12, color: COLORS.primary, marginLeft: 5, marginTop: 5, fontFamily: "Roboto-Black" }}>{option.txt}</Text>
                        <Text style={{ fontWeight: "400", fontFamily: "Roboto-Black", fontSize: 11, marginLeft: 5 }}>Solid Velvet</Text>
                        <Text style={{ fontWeight: "700", fontFamily: "Roboto-Black", fontSize: 12, marginLeft: 5, color: COLORS.violet }}>{option.offer}</Text>
                    </View>
                )}
            </ScrollView>
        );
    };
    const Listing2 = () => {
        const Optionlist = [
            { img: require('../../assets/image/kitch1.jpg'), txt: "Rae Dunn Halloween", offer: "Upto 60% Off" },
            { img: require('../../assets/image/kitch2.jpg'), txt: "Rae Dunn Halloween", offer: "Upto 60% Off" },
            { img: require('../../assets/image/kitch3.jpg'), txt: "Rae Dunn Halloween", offer: "Upto 60% Off" },
            { img: require('../../assets/image/kitch4.jpg'), txt: "Rae Dunn Halloween", offer: "Upto 60% Off" }
        ];

        return (
            <ScrollView showsHorizontalScrollIndicator={false} scrollEventThrottle={16} horizontal contentContainerStyle={styles.optioncontainer}>
                {Optionlist.map((option, index) =>
                    <View style={styles.optioncard} key={index}>
                        <Image style={styles.optioncardimg} source={option.img} />
                        <Text style={{ fontWeight: "400", fontSize: 12, color: COLORS.primary, marginLeft: 5, marginTop: 5, fontFamily: "Roboto-Black" }}>{option.txt}</Text>
                        <Text style={{ fontWeight: "400", fontFamily: "Roboto-Black", fontSize: 11, marginLeft: 5 }}>Solid Velvet</Text>
                        <Text style={{ fontWeight: "700", fontFamily: "Roboto-Black", fontSize: 12, marginLeft: 5, color: COLORS.violet }}>{option.offer}</Text>
                    </View>
                )}
            </ScrollView>
        );
    };

    const Listing3 = () => {
        const Optionlist = [
            { img: require('../../assets/image/fashion.jpeg'), txt: "Trend Top", offer: "Up to 50% off" },
            { img: require('../../assets/image/fashion.jpeg'), txt: "Trend Top", offer: "Up to 50% off" },
            { img: require('../../assets/image/fashion.jpeg'), txt: "Trend Top", offer: "Up to 50% off" },
            { img: require('../../assets/image/fashion.jpeg'), txt: "Trend Top", offer: "Up to 50% off" }
        ];

        return (
            <ScrollView showsHorizontalScrollIndicator={false} scrollEventThrottle={16} horizontal contentContainerStyle={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                paddingHorizontal: 8,

            }}>
                {Optionlist.map((option, index) =>
                    <View style={{ width: 210, height: 200, elevation: 10, borderRadius: 10, marginHorizontal: 10, backgroundColor: "red" }} key={index}>
                        <ImageBackground imageStyle={{ width: "100%", height: 220, borderRadius: 10 }} source={option.img}>
                            <Text style={{ fontFamily: "Roboto-Black", fontSize: 21, fontWeight: "900", color: COLORS.WHITE, marginTop: 80, marginLeft: 20 }}>{option.txt}</Text>
                            <Text style={{ fontFamily: "Roboto-Black", fontSize: 16, color: COLORS.WHITE, marginLeft: 20, fontWeight: "600" }}>{option.offer}</Text>

                            <TouchableOpacity style={{ backgroundColor: COLORS.orange, width: 85, height: 35, borderRadius: 100, alignItems: "center", justifyContent: "center", marginTop: 8, marginLeft: 18 }}>
                                <Text style={{ color: "white", fontWeight: "700", fontFamily: "Roboto-Black", }}>Explore</Text>
                            </TouchableOpacity>
                        </ImageBackground>

                    </View>
                )}
            </ScrollView>
        );
    };

    return (
        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
            <StatusBar translucent={false} barStyle="dark-content" backgroundColor="white" />
            <Animatable.View animation="bounceInRight" duration={500} style={{ flexDirection: "row", backgroundColor: "whites", borderBottomWidth: 1, borderBottomColor: "#ECECEC" }}>
                <Animatable.View animation={searchBarfocused ? "fadeInLeft" : "fadeInRight"} duration={400} style={{ marginTop: 14, marginLeft: 12 }}  >
                    <AntDesign name = {searchBarfocused ? "arrowleft":"search1"}  size={22} color="black" />
                </Animatable.View>
                <TextInput onPress={()=>navigation.goBack()} autoFocus={true} style={{ paddingLeft: 12 }} placeholder='Search For Product' />
            </Animatable.View>

            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 28 }}>
                <Text style={{ fontFamily: "Roboto", color: "black", fontSize: 18, paddingHorizontal: 20, fontWeight: "700" }}>Recent Search</Text>

                <View style={{ width: "100%", height: 140, backgroundColor: "white", marginTop: 11 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
                        <View style={{ ...styles.imgcontainer }}>
                            <Image style={{ ...styles.img }} source={require("../../assets/image/earring.jpg")} />
                        </View>
                        <View style={{ ...styles.imgcontainer }}>
                            <Image style={{ ...styles.img }} source={require("../../assets/image/fashion.jpg")} />
                        </View>
                        <View style={{ ...styles.imgcontainer }}>
                            <Image style={{ ...styles.img }} source={require("../../assets/image/jeans.jpg")} />
                        </View>
                        <View style={{ ...styles.imgcontainer }}>
                            <Image style={{ ...styles.img }} source={require("../../assets/image/earring.jpg")} />
                        </View>
                        <View style={{ ...styles.imgcontainer }}>
                            <Image resizeMethod="resize" style={{ ...styles.img }} source={require("../../assets/image/earring.jpg")} />
                        </View>
                    </ScrollView>
                </View>
            </View>


            <View style={{ flex: 1, backgroundColor: "#FFF3EB", paddingTop: 28, width: "100%", height: 300 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: "Roboto", color: "black", fontSize: 18, paddingHorizontal: 20, fontWeight: "700" }}>Trend Alerts</Text>
                    <Text style={{ fontFamily: "Roboto", color: "black", fontSize: 18, paddingHorizontal: 20, fontWeight: "700", color: COLORS.orange }}>View All</Text>
                </View>

                <Listing3 />


            </View>


            <View style={{ flex: 1, backgroundColor: "#FFF3EB", paddingTop: 28, width: "100%", height: 300 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: "Roboto", color: "black", fontSize: 18, paddingHorizontal: 20, fontWeight: "700" }}>Seasonal Decor</Text>
                    <Text style={{ fontFamily: "Roboto", color: "black", fontSize: 18, paddingHorizontal: 20, fontWeight: "700", color: COLORS.orange }}>View All</Text>
                </View>

                <Listing />


            </View>

            <View style={{ flex: 1, backgroundColor: "#FFF3EB", paddingTop: 28, width: "100%", height: 300 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: "Roboto", color: "black", fontSize: 18, paddingHorizontal: 20, fontWeight: "700" }}>Kitchen & Dining</Text>
                    <Text style={{ fontFamily: "Roboto", color: "black", fontSize: 18, paddingHorizontal: 20, fontWeight: "700", color: COLORS.orange }}>View All</Text>
                </View>

                <Listing2 />


            </View>



        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imgcontainer: {

        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "white",
        marginVertical: 18,
        marginLeft: 20
    },
    img: {

        width: '100%',
        height: 90,
        borderRadius: 10,
    },
    optioncontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 10,

    },
    optioncard: {
        width: 130, height: 200, elevation: 10, backgroundColor: "white", marginHorizontal: 5, borderRadius: 10
    },
    optioncardimg: {
        height: 140, borderRadius: 10, width: "100%"
    }

})