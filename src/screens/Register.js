import React, { useEffect, useState } from 'react';


import { Container, Content, Form, Item,Text,Button, Input} from 'native-base';

import {  View, TouchableOpacity,TextInput,StatusBar,
    ImageBackground,StyleSheet,ScrollView,Dimensions,Image,
    TouchableWithoutFeedback,Keyboard
 } from 'react-native';

 
 
  //  import Icon from 'react-native-vector-icons/dist/FontAwesome';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Icons from 'react-native-vector-icons/FontAwesome';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Register = () => {
    return (
        <ImageBackground source={require('../../src/images/drawerBackgroun.jpg')}
        style={styles.bakground}>
          <StatusBar hidden={true} />
          <ScrollView style={styles.scrollView}>
        <View style={styles.logoContainer}>
           <View style={{width:"50%", height:"50%", justifyContent:"center",
            alignContent:"center",flexDirection:"row"}}>
                <Image style={{width:"100%", height:"100%", resizeMode:"center"}}
                source={require('../../src/images/logo.png')}/>
           </View>
            <Text style={{fontSize:30,color:"red", marginTop:5}}>Register</Text>
        </View>
       <View style={styles.two}>
            <Form>
                
                <Item style={styles.item} regular>
                    <TextInput style={styles.placeholder} 
                    placeholderTextColor="red"
                    placeholderTextSize ='30'
                    autoCorrect={false}
                    autoCapitalize="none"
                   
                    placeholder='Email dd'/>
                        <Icons active name='envelope-o' size={23}  style={styles.iocns}/>
                </Item>
               
                <Item style={styles.item} regular>
        
                    <TextInput style={styles.placeholder} 
                    placeholderTextColor="red"
                    placeholderTextSize ='30'
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={true}
                   
                    placeholder='Password'/>
                        <Icons active name='lock' size={28}  style={styles.iocns}/>
                </Item>
                <View style={{width:'100%', justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
                <Button style={styles.create}
                   
                >
                    <Text style={{textAlign:"center", fontSize:14}}> 
                        L O G I N
                    </Text>
                </Button>
                </View>
                <TouchableOpacity >
                     <Text style={{fontSize:18, color:"red", textAlign:"center"}}>

                   
                    
                     </Text> 
                </TouchableOpacity>
         
            <View  style={styles.forgotView}>
               
                  <Text style={styles.forgotText}>Already A Member ?</Text> 
              
               <TouchableOpacity   >
                  <Text style={styles.forgotText1}>L O G I N   H E R E</Text> 
               </TouchableOpacity>
               
            </View>
        </Form>
        <Text></Text>
    </View>
        <View style={styles.three}>
            <View style={styles.empty} ></View>
        </View>
   </ScrollView>
       
    </ImageBackground>

)


}

export default Register
const styles = StyleSheet.create({
bakground: {
flex:1,
paddingVertical:10
},
scrollView:{
flex:1,
},
logoContainer:{
paddingTop:10,
marginTop:20,
justifyContent:'center',
alignItems:"center",
width:Dimensions.get('window').width,
height:"35%"
},
button:{
marginVertical:10,
},
two:{


width:Dimensions.get('window').width,
height:"50%",
paddingHorizontal:15
},
three:{
justifyContent:"center",
alignItems:"center",
width:Dimensions.get('window').width,
height:"15%",
},
emtyheight:{
height:1000
},
username:{
width:'90%',
height:40,
borderRadius:10,
marginTop:10
},
socialView:{
display:"flex",
flexDirection:"row",
width:"100%",
alignContent:"center",
justifyContent:"center"
},

password:{
width:'80%',
height:40,
borderRadius:10,
marginTop:10
},
item:{
// border:transparent,
flexDirection:"row",
backgroundColor:'#DAE0E2',
paddingHorizontal:18,
borderRadius:25,
opacity:0.5,
// borderColor:'transparent',
borderColor:"#7B8788",
borderWidth:3,
//borderColor:'transparent',
marginTop:8,
justifyContent:"space-between"
},
placeholder:{
paddingVertical:7,
fontSize:18,
width:"90%",
},
iocns:{
color:'#0A79DF',
width:"10%",
flexDirection:"row",
textAlign:'right'
},
buttontext:{
backgroundColor: '#fff',
height: 50,
width: 100,
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
},
empty:{
height:500
},
create:{
alignItems:"center",
paddingHorizontal:30,
justifyContent:"center",
marginTop:22,
marginBottom:16,
backgroundColor:"#EEC213",
marginHorizontal:25,
borderRadius:20
},
floatButton:{
borderWidth: 2,
borderColor: "white",
alignItems: "center",
justifyContent: "center",
width: 40,
marginHorizontal:8,
height: 40,
backgroundColor: "#0A79DF",
borderRadius: 100,
marginTop:4,
},
floatButton1:{
borderWidth: 2,
borderColor: "white",
alignItems: "center",
justifyContent: "center",
width: 40,
marginHorizontal:8,
marginTop:4,
height: 40,
backgroundColor: "#B83227",
borderRadius: 100
},
forgotView:{
display:"flex",
flexDirection:"row",
width:"100%",
alignContent:"center",
justifyContent:"center"
},
forgotText:{
color:"#E03B8B",
fontSize:14
},
forgotText1:{
color:"#5A20CB",
fontSize:14,
marginLeft:4
}

});
