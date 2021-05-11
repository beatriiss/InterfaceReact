/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {View, 
  KeyboardAvoidingView,
   Image, TextInput, 
   TouchableOpacity, 
   Text, StyleSheet, Animated} from 'react-native'; 

export default function App(){ 

  const[offset] = useState(new Animated.ValueXY({x:0, y:95}));  
 
  useEffect(()=>{ 
    Animated.spring(offset.y , { 
      toValue:0, 
      speed:4, 
      bounciness:20
    }).start();
  },[]); 
  
return(  
  <KeyboardAvoidingView style={styles.background}>  
    <View style={styles.logo}> 

    <Image source ={require('C:/Users/isisb/ReactApp/kisspng-computer-security-computer-icons-information-techn-5b32bc5dcb3903.4538965215300516778324.png')}/>
    
    </View> 

    <Animated.View
     style={[
       styles.conteiner, 
       {
         transform:[{translateY: offset.y}]
       }
      ]}
     >
      <TextInput style={styles.Input}
       placeholder = "Email" 
      autoCorrect = {false} 
      onChangeText = {()=>{}}/> 

      <TextInput style={styles.Input} 
      placeholder = "Pass" 
      autoCorrect = {false} 
      onChangeText = {()=>{}}/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>Acessar</Text>
      </TouchableOpacity>  

      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>Criar Conta</Text>
      </TouchableOpacity> 


     
    </Animated.View>

  </KeyboardAvoidingView>  

);

} 

const styles = StyleSheet.create({ 
background:{flex:1,
  alignItems:'center', 
  justifyContent:'center',
  backgroundColor: '#00ced1'},

logo:{
  flex:1, justifyContent:'center'}, 
  
conteiner:{flex:1,  
alignItems:'center', 
justifyContent:'center', 
width: '90%'}, 

Input:{ 
  backgroundColor:"#FFF", 
  width:"90%", 
  marginBottom: 15, 
  color:'#222', 
  fontSize: 18, 
  borderRadius:7
}, 

button:{ 
  backgroundColor:'#FFF',
  width:'90%', 
  height: 40, 
  alignItems:'center', 
  justifyContent:'center', 
  borderRadius:7, 
  marginBottom: 15
}, 
Text:{
color:'#000000' ,
fontSize: 18,
}

});