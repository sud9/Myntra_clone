import { View, Text,TouchableOpacity,Animated } from 'react-native'
import React,{useRef,useState} from 'react'
import LottieView from "lottie-react-native"
import Like from "../../assets/lottie.json" 
export default function index() {
    const Progress = useRef(new Animated.Value(0)).current;
    const [hasLiked,setHasLiked] = useState(false);

    const handleLikeanimation = () => {
        const newValue = hasLiked ? 0 : 0.566 ;

        Animated.timing(Progress,{
            toValue: newValue,
            duration:1800,
            useNativeDriver:true
        }).start();

        setHasLiked(!hasLiked)
    };
  return (
    <View>
      <TouchableOpacity onPress={handleLikeanimation} activeOpacity={0.3} style={{ position: "absolute", right: -8, top: -20,width:75,height:75 }}>
                                    <LottieView
                                    
                                        progress={Progress}
                                       
                                        source={Like} />
                                </TouchableOpacity>
    </View>
  )
}