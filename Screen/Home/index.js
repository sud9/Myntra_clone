import React from 'react'
import { View, Text, ScrollView, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity ,StatusBar} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { Button } from 'react-native-paper';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Seller from "../../assets/Data/Data1"

import COLORS from '../../assets/Color/index'
export default function Homescreen({navigation}) {


    const categories = ['Buyers', 'Sellers'];

    const [selectcategoryIndex, setselectcategoryIndex] = React.useState(1);
    const CategoryList = () => {
        return (
            <View style={styles.categorylistcontainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8}>
                        <View>
                            <Text style={{ ...styles.categorylisttext, color: selectcategoryIndex == index ? COLORS.orange : COLORS.primary }}>{item}</Text>
                            {selectcategoryIndex == index && <View style={{ width: 100, height: 1, marginTop: 2, backgroundColor: "#F86202", marginHorizontal: 5 }}></View>}

                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    };


    const images = [
        {
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
            image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80',
            desc:
                'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },
        {
            image: 'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            desc:
                'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },

        {
            image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80',
            desc:
                'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },

        {
            image: 'https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            desc:
                'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },

    ]



    const data = [
        " https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-845434.jpg&fm=jpg",
        " https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-845434.jpg&fm=jpg",
        " https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-845434.jpg&fm=jpg",
        " https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-845434.jpg&fm=jpg",
        " https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-845434.jpg&fm=jpg"
    ];


    return (


        
            <ScrollView contentContainerStyle={{backgroundColor:"white"}} showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
<StatusBar backgroundColor={'#994FB1'} barStyle='light-content'/>
                <View style={{ flexDirection: "row", marginTop: 10}}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Ionicons style={{ marginLeft: 20 }} color="black" name="menu" size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: "absolute", right: 140 }} onPress={()=>navigation.navigate("Search")}>
                    <Ionicons  color="black" name="search-outline" size={26} />
                    </TouchableOpacity>
                    
                    <Ionicons style={{ position: "absolute", right: 60 }} color="black" name="heart-outline" size={26} />
                    <Feather style={{ position: "absolute", right: 100 }} name="bell" size={25} />
                    <SimpleLineIcons style={{ position: "absolute", right: 20 }} color="black" name="handbag" size={20} />

                </View>

                <View style={{ width: "100%", height: 60, backgroundColor: "#FFE9DB", marginTop: 15, flexDirection: "row" }}>
                    <SimpleLineIcons style={{ fontWeight: "bold", marginVertical: 15, fontFamily: "Roboto-Bold", marginLeft: 20 }} size={26} color={COLORS.orange} name="location-pin" />
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 17, color: "black", marginLeft: 15, marginVertical: 15 }}>Delivery to </Text>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: 17, color: "black", marginVertical: 15 }}> 250001</Text>
                    <SimpleLineIcons style={{ position: "absolute", right: 20, fontWeight: "bold", color: "#F86202", marginVertical: 15 }} size={22} name="arrow-down" />
                </View>

                <View style={{ width: 388, height: 72, borderRadius: 6, backgroundColor: "#994FB1", marginTop: 10, alignSelf: "center" }}>

                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <Text style={{ color: "white", fontFamily: "Roboto-Bold", fontSize: 18, marginLeft: 15, marginTop: 12 }}>Become Seller</Text>
                            <Text style={{ color: "white", fontFamily: "Roboto-Regular", fontSize: 14, marginLeft: 15 }}>Please register an account</Text>
                        </View>

                        <Button onPress={()=>navigation.navigate("Seller")} uppercase={false} labelStyle={{ color: "#994FB1", fontFamily: "Roboto-Bold", padding: 2, fontSize: 16, fontWeight: "bold" }} contentStyle={{ paddingTop: 2 }} style={{ backgroundColor: "white", borderRadius: 57, height: 48, position: "absolute", right: 11, top: 12, width: "30%" }} mode="contained" >Register</Button>

                    </View>
                </View>

                <ScrollView horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>
                    <Button uppercase={false} labelStyle={{ color: "white", fontSize: 15, fontWeight: "500", fontFamily: "Roboto-Bold" }} style={{ backgroundColor: "#F86202", width: 75, borderRadius: 57, marginLeft: 10, height: 42, marginTop: 15 }}>All</Button>
                    <Button uppercase={false} labelStyle={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "Roboto-Bold" }} style={{ backgroundColor: "#EEEEEE", width: 85, borderRadius: 57, marginLeft: 10, height: 42, marginTop: 15, borderColor: "lightgrey", borderWidth: 1 }}>Men</Button>
                    <Button uppercase={false} labelStyle={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "Roboto-Bold" }} style={{ backgroundColor: "#EEEEEE", width: 95, borderRadius: 57, marginLeft: 10, height: 42, marginTop: 15, borderColor: "lightgrey", borderWidth: 1 }}>Women</Button>
                    <Button uppercase={false} labelStyle={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "Roboto-Bold" }} style={{ backgroundColor: "#EEEEEE", width: 75, borderRadius: 57, marginLeft: 10, height: 42, marginTop: 15, borderColor: "lightgrey", borderWidth: 1 }}>Kids</Button>
                    <Button uppercase={false} labelStyle={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "Roboto-Bold" }} style={{ backgroundColor: "#EEEEEE", width: 75, borderRadius: 57, marginLeft: 10, height: 42, marginTop: 15, borderColor: "lightgrey", borderWidth: 1 }}>All</Button>
                </ScrollView>

                <View style={{ width: "100%", height: 230, borderTopWidth: 1, borderTopColor: "lightgrey", flex: 1, marginTop: 20, backgroundColor: "white", elevation: 2 }}>
                    <Text style={{ fontWeight: "bold", color: "black", fontFamily: "Roboto-Black", fontSize: 18, marginLeft: 20, marginTop: 15 }}>Shop brands you know and love</Text>
                    <Text style={{ fontFamily: "Roboto-Regular", color: "#5B5B5B", marginLeft: 20, fontSize: 14, marginTop: 3 }}>Greate stuff New and used items added every day</Text>

                    <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View>
                            <View style={{ width: 75, height: 75, borderRadius: 75 / 2, backgroundColor: "white", borderWidth: 1, borderColor: "lightgrey", marginLeft: 15, marginTop: 18 }}>
                                <Image style={{ alignItems: "center", margin: 10, padding: 10, width: 60, height: 61 }} source={require("../../assets/image/nike.png")} />

                            </View>
                            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "black", marginLeft: 35, marginTop: 10 }}>Nike</Text>
                        </View>

                        <View>
                            <View  style={{ width: 78, height: 78, borderRadius: 78 / 2, backgroundColor: "white", borderWidth: 1, borderColor: "lightgrey", marginLeft: 15, marginTop: 18 }}>
                                <Image style={{ alignItems: "center", marginTop: 25, width: 52, height: 22, justifyContent: "center", marginLeft: 15 }} source={require("../../assets/image/zara.png")} />

                            </View>
                            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "black", marginLeft: 35, marginTop: 10 }}>Zara</Text>
                        </View>

                        <View>
                            <View style={{ width: 78, height: 78, borderRadius: 78 / 2, backgroundColor: "white", borderWidth: 1, borderColor: "lightgrey", marginLeft: 15, marginTop: 18 }}>
                                <Image style={{ alignItems: "center", marginTop: 30, width: 65, height: 15, marginLeft: 3 }} source={require("../../assets/image/oppo.png")} />

                            </View>
                            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "black", marginLeft: 35, marginTop: 10 }}>Oppo</Text>
                        </View>
                        <View>
                            <View style={{ width: 78, height: 78, borderRadius: 40, backgroundColor: "white", borderWidth: 1, borderColor: "lightgrey", marginLeft: 15, marginTop: 18 }}>
                                <Image style={{ alignItems: "center", padding: 10, width: 55, height: 40, marginTop: 20, justifyContent: "center", marginLeft: 8 }} source={require("../../assets/image/apple.png")} />

                            </View>
                            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "black", marginLeft: 35, marginTop: 10 }}>Apple</Text>
                        </View>
                        <View>
                            <View style={{ width: 75, height: 75, borderRadius: 75 / 2, backgroundColor: "white", borderWidth: 1, borderColor: "lightgrey", marginLeft: 15, marginTop: 18 }}>
                                <Image style={{ alignSelf: "center", margin: 15, width: 45, height: 45, resizeMode: "center" }} source={require("../../assets/image/allen.png")} />

                            </View>
                            <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular", color: "black", marginLeft: 26, marginTop: 15 }}>Allensolly</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ width: 428, height: 600, backgroundColor: "#FCF4FF" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontFamily: "Roboto-Black", fontSize: 17, color: "black", fontWeight: "bold", marginLeft: 20, marginTop: 30 }}>See what's selling</Text>
                        <Text style={{ fontFamily: "Roboto-Black", fontSize: 17, color: "#F86202", marginLeft: 20, marginTop: 30, position: "absolute", right: 40, fontWeight: "700" }}>View All</Text>


                    </View>
                    <View >
                        <FlatList
                            horizontal

                            showsHorizontalScrollIndicator={false}
                            data={data}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: 155, height: 250, backgroundColor: "white", elevation: 2, borderWidth: 1, borderColor: "lightgrey", marginLeft: 15, borderRadius: 8, marginTop: 20 }}>

                                        <Image resizeMode="cover" style={{ width: 153.1, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={require("../../assets/image/57.png")} />
                                        <Text style={{ fontFamily: "Roboto-Black", fontWeight: "bold", fontSize: 16, color: "black", marginLeft: 10, paddingTop: 5 }}>URBANIC</Text>
                                        <Text style={{ fontFamily: "Roboto-Black", fontWeight: "400", fontSize: 11, color: "#5C5C5C", marginLeft: 10, paddingTop: 5 }}>Solid Velvet Bomber Jacket</Text>
                                        <Text style={{ fontFamily: "Roboto-Black", fontWeight: "bold", fontSize: 17, color: "#994FB1", marginLeft: 10, paddingTop: 5 }}>Upto 60% Off</Text>
                                    </View>

                                )
                            }}
                        />
                    </View>
                    <View >

                    </View>
                </View>

                <View style={{ width: 428, height: 306, backgroundColor: "white" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontFamily: "Roboto-Black", fontSize: 17, color: "black", fontWeight: "bold", marginLeft: 20, marginTop: 30 }}>Trend Alerts </Text>
                        <Text style={{ fontFamily: "Roboto-Black", fontSize: 17, color: "#F86202", marginLeft: 20, marginTop: 30, position: "absolute", right: 40, fontWeight: "700" }}>View All</Text>


                    </View>
                    <FlatListSlider


                        data={images}

                        height={166}
                        width={200}
                        timer={8000}
                        style={{ justifyContent: "space-around" }}
                        contentContainerStyle={{ paddingHorizontal: 16, marginTop: 19 }}
                        indicatorContainerStyle={{ position: 'absolute', top: 190 }}
                        indicatorActiveColor={'#E35728'}
                        indicatorInActiveColor={'lightgrey'}
                        indicatorActiveWidth={7}
                        animation
                    />

                </View>

                <View style={{ width: 428, backgroundColor: "white", height: 700, borderTopWidth: 0.8, borderColor: "lightgrey" }}>

                    <Text style={{ fontFamily: "Roboto-Black", fontSize: 17, color: "black", fontWeight: "bold", marginLeft: 20, marginTop: 30 }}>Recent reviews from buyers and sellers </Text>
                    <CategoryList />

                </View>
            
            <FlatList

                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: 155, height: 250, backgroundColor: "white", elevation: 2, borderWidth: 1, borderColor: "lightgrey", marginLeft: 15, borderRadius: 8, marginTop: 20 }}>

                            <Image resizeMode="cover" style={{ width: 153.1, height: 150, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={require("../../assets/image/57.png")} />
                            <Text style={{ fontFamily: "Roboto-Black", fontWeight: "bold", fontSize: 16, color: "black", marginLeft: 10, paddingTop: 5 }}>URBANIC</Text>
                            <Text style={{ fontFamily: "Roboto-Black", fontWeight: "400", fontSize: 11, color: "#5C5C5C", marginLeft: 10, paddingTop: 5 }}>Solid Velvet Bomber Jacket</Text>
                            <Text style={{ fontFamily: "Roboto-Black", fontWeight: "bold", fontSize: 17, color: "#994FB1", marginLeft: 10, paddingTop: 5 }}>Upto 60% Off</Text>
                        </View>

                    )
                }}
            />
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    categorylistcontainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: -20,
        marginTop: 25
    },
    categorylisttext: {
        fontWeight: "500",
        fontSize: 21,
        textAlign: "center"

    }
})