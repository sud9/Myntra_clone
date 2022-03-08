import { View, Text, Dimensions, Image, FlatList, TouchableOpacity,Animated } from 'react-native'
import React,{useRef,useState} from 'react'
import Header from "../../Header/index"
import Ripple from "react-native-material-ripple"
import Data from "../../assets/Data/Data5";
import AntDesign from "react-native-vector-icons/AntDesign"
import LottieView from "lottie-react-native"
import Like from "../../assets/lottie.json" 
export default function () {
   const [select,setselect] =useState()
    const Progress = useRef(new Animated.Value(0)).current;
    const [hasLiked,setHasLiked] = useState(false);

    const handleLikeanimation = () => {
        const newValue =  hasLiked ? 0 :0.566;

        Animated.timing(Progress,{
            toValue: newValue,
            duration:900,
            useNativeDriver:true
        }).start();

        setHasLiked(!hasLiked)
    };

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Header icon="arrowleft" />
            <View style={{ height: windowHeight * 0.07, width: windowWidth, backgroundColor: "#fff", shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.4, shadowColor: "#000", shadowRadius: 3, elevation: 2, borderBottomWidth: 1, borderBottomColor: "lightgrey" }}>
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                    <Ripple rippleDuration={800} rippleColor='#706d6d' style={{ flexDirection: 'row', justifyContent: 'space-around', borderRightWidth: 1, height: "100%", alignItems: "center", width: windowWidth / 2,  paddingHorizontal:(windowWidth/2)/3.5, borderRightColor: "#E4E4E4" }}>
                        <Image source={require("../../assets/image/sort.png")} />
                        <Text style={{ fontFamily: "Roboto-Medium", color: "#5B5B5B", fontSize: 15 }}>SortBy</Text>
                    </Ripple>
                    <Ripple rippleDuration={800} rippleColor='#706d6d' style={{ flexDirection: 'row', justifyContent: "space-around", height: "100%", alignItems: "center", width: windowWidth / 2, paddingHorizontal:(windowWidth/2)/3.5}}>
                        <Image source={require("../../assets/image/filter.png")} />
                        <Text style={{ fontFamily: "Roboto-Medium", color: "#5B5B5B", fontSize: 15 }}>Filter</Text>
                    </Ripple>
                </View>
            </View>


            <FlatList
                showsVerticalScrollIndicator={false}

                data={Data}
                contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity style={{ width: windowWidth * 0.5, backgroundColor: "white", borderWidth: 0.5, borderColor: '#969693' }}>


                            <Image resizeMode='cover' style={{ width: windowWidth * 0.5, }} source={item.img} />

                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 17, fontFamily: "Roboto-Regular", color: "black", paddingLeft: 10, paddingTop: 10 }}>{item.name}</Text>
                                <TouchableOpacity onPress={handleLikeanimation ||setselect(item.id)} activeOpacity={0.3} style={{ position: "absolute", right: -5, top: -8,width:65,height:65 }}>
                                    <LottieView
                                    
                                        progress={Progress}
                                       
                                        source={Like} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ paddingLeft: 10, fontSize: 13, color: "#5C5C5C", fontFamily: "Roboto-Regular", fontWeight: "400", paddingTop: 2 }}>{item.type}</Text>
                            <View style={{ flexDirection: "row", paddingHorizontal: 10, justifyContent: 'space-between', paddingTop: 5 }}>
                                <Text style={{ color: "#000", fontFamily: "Roboto-Regular", fontWeight: "500" }}>{item.Price}</Text>
                                <Text style={{ textDecorationLine: "line-through", marginRight: 40, color: "#A5A5A5", fontFamily: "Roboto-Regular" }}>{item.Mrp}</Text>
                            </View>
                            <View style={{ paddingLeft: 10, marginTop: 5, marginBottom: 5 }}>

                                <Text style={{ color: "#F86202", fontSize: 14, fontFamily: "Roboto-Regular", fontWeight: "400" }}>{item.offer}</Text>
                            </View>
                        </TouchableOpacity>

                    )
                }}
            />


        </View>
    )
}