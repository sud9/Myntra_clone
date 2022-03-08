import React from 'react'
import { View, Text, FlatList,Image,SafeAreaView } from 'react-native'

export default function index() {
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
        },
      ];
    return (
        <SafeAreaView style={{flex:1}}>
            <FlatList

                
                showsHorizontalScrollIndicator={false}
                data={DATA}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                       <View style={{width:387,height:165,backgroundColor:"white",elevation:5,marginHorizontal:20,marginVertical:10}}>
                           <Text>jgofdjgofdjg</Text>
                       </View>

                    )
                }}
            />
        </SafeAreaView>
    )
}
