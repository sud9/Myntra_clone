import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Store } from '../../src/redux/store';

import { setcount } from '../../src/redux/action';
import COLORS from '../../assets/Color';
export default function index() {

  const [count, setcount] = React.useState(10);
  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <View style={styles.container}>
        <Text style={{fontSize:20,fontFamily:"black"}}>{count}</Text>
        <TouchableOpacity  onPress={()=>setcount(count * 5)} style={{backgroundColor:COLORS.orange,marginHorizontal:30,width:100,alignItems:"center",justifyContent:"center",marginTop:30,height:100}}>
        <Text style={{fontWeight:"800",width:120,padding:10}}> Change State</Text> 
        </TouchableOpacity>
      </View>


    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    width: 100, height: 50, justifyContent: "center", alignItems: "center"
  }
});
