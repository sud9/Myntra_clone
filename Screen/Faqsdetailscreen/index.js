import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from "../../Header/index2"
import COLORS from '../../assets/Color'

export default function index() {
    return (
        <View>
            <Header name="FAQS" icon="arrowleft" />
            <View style={{ borderBottomWidth: 0.6, height: 165, marginLeft: 30, marginRight: 18, borderStyle: "dashed" }}>
                <Text style={{ fontFamily: "Roboto-Medium", color: COLORS.primary, fontWeight: "700", fontSize: 22, marginVertical: 30 }}>Top Queries</Text>
                <Text style={{ fontSize: 15, fontFamily: "Roboto-Regular" }}>you can track your orders in 'My Orders'</Text>
                <TouchableOpacity style={{ borderWidth: 1, width: 120, height: 40, alignItems: "center", justifyContent: "center", position: "absolute", bottom: 5, right: 1, borderRadius: 5, borderColor: "#a09da1" }}>
                    <Text style={{ fontSize: 14, fontFamily: 'Roboto-Regular', color: "#8d69e0", fontWeight: "500" }}>TRACK ORDERS</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginLeft:30,marginTop:30}}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Text>  Duis dapibus massa id sem dapibus placerat.</Text>
              <Text> Fusce sodales nulla convallis, porttitor enim et, eleifend risus.</Text>
              <Text>  Proin elementum est egestas, hendrerit sem et, congue tortor.</Text>
              <Text>  Proin elementum est egestas, hendrerit sem et, congue tortor.</Text>
              <Text>   Morbi luctus turpis at feugiat auctor.</Text>
              <Text>   Nam porttitor metus fermentum imperdiet semper.</Text>
              <Text>  Nunc dapibus dolor vitae egestas laoreet.</Text>
              <Text>   Sed eleifend tortor sit amet molestie feugiat.</Text>
              <Text>   Donec luctus eros ac lectus ornare posuere.</Text>
              <Text>   Pellentesque fermentum tellus eu mollis malesuada.</Text>
              <Text>   Curabitur scelerisque eros id velit porttitor, euismod sagittis nisi faucibus.</Text>
              <Text>   Sed quis mauris at nunc finibus fermentum.</Text>
              <Text>    Suspendisse id eros ac ipsum auctor blandit id at velit.</Text>
              <Text>   Vestibulum et mi congue quam condimentum congue.</Text>
              <Text>   Aenean placerat urna vitae porttitor mollis.</Text>
              </View>
        </View>
    )
}