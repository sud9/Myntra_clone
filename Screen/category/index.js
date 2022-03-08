import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '../../assets/Color';

export default function index() {
    const Screen = Dimensions.get("screen")
    const Data = [{
        id: "1",
        categ: "Electronics",
        type: "Mobile,Desktop,Laptop...",
        img: require("../../assets/image/washing.png"),
        bagimg: require("../../assets/image/texture1.png")
    },
    {
        id: "2",
        categ: "Women",
        type: "Saree,Kurtas,&suit shoes...",
        img: require("../../assets/image/pinkwoman.png"),
        bagimg: require("../../assets/image/texture5.png")
    },
    {
        id: "3",
        categ: "Men",
        type: "Saree,Kurtas,&suit shoes...",
        img: require("../../assets/image/man.png"),
        bagimg: require("../../assets/image/texture3.png")
    },
    {
        id: "4",
        categ: "Home",
        type: "Mobile,Desktop,Laptop...",
        img: require("../../assets/image/washing.png"),
        bagimg: require("../../assets/image/texture1.png")
    },
    {
        id: "5",
        categ: "Beauty",
        type: "Mobile,Desktop,Laptop...",
        img: require("../../assets/image/makeup.png"),
        bagimg: require("../../assets/image/texture5.png")
    },
  
    ]
    return (
        <View style={{ backgroundColor: COLORS.WHITE,flex:1 }}>
            <View style={styles.container}>
                <Text style={styles.txt}>Categories</Text>
            </View>

            <FlatList
                style={{ backgroundColor: COLORS.WHITE,flex:1}}
                showsVerticalScrollIndicator={false}
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7} style={{  width: (Screen.width),height:150, marginBottom: 5 }}>
                            <ImageBackground style={{ flex: 1 }} source={item.bagimg}>
                                <View style={{flexDirection:"row"}}>
                                    <View>
                                        <Text style={styles.txt2}>{item.categ}</Text>
                                        <Text style={{ marginLeft: 40, fontFamily: "Roboto-Regular", color: "#353535", fontSize: 15, marginTop: 5 }}>{item.type}</Text>
                                    </View>
                                    <View style={{position:"absolute",right:20,marginVertical:10}}>
                                    <Image style={styles.img} source={item.img}/>
                                    </View>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    txt: {
        fontFamily: "Roboto-Regular", fontSize: 18, fontWeight: "700", color: COLORS.primary, marginLeft: 20
    },
    container: {
        height: 70, backgroundColor: COLORS.WHITE, justifyContent: "center"
    },
    txt2: {
        marginTop: 30, marginLeft: 40, fontFamily: "Roboto-Regular", fontWeight: "900", color: COLORS.primary, fontSize: 18
    },
    img:{
        width:100,height:120,resizeMode:"stretch"
    }
});
