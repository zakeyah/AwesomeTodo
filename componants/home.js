import React from 'react'
import {ImageBackground, StyleSheet, Text, View ,FlatList,TextInput,Button,TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
function Home (props){
    return(
            <View >
              
               <LinearGradient colors={['#D5D4D0','#D5D4D0','#EEEEEC','#EFEEEC','#E9E9E7']}  style={style.SafeAreaView}>
                   <Text >Welcome To Our Todo App</Text>
                   <TouchableOpacity style={style.button}>
                       <Text style={style.text} onPress={()=>props.navigation.navigate('Days')}>Go!!</Text>
                   </TouchableOpacity>

                   {/* <Button style={style.button} title='Go!!' onPress={()=>props.navigation.navigate('Days')}/> */}

               </LinearGradient>
            </View>

    )
}
const style=StyleSheet.create({
    SafeAreaView:{
        height:'100%',
        color:'#f0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
    },
    text:{
        // width:'100%'
        color:'white',
        

    },
    button:{
        height: 65 ,
        width:200,
         marginTop: 10,
         backgroundColor:'#09203F',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
        //  color:'white'

    }
})
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: "column"
//     },
//     image: {
//       flex: 1,
//       resizeMode: "cover",
//       justifyContent: "center",
//       resizeMode:'contain'
//     },
//     text: {
//       color: "white",
//       fontSize: 42,
//       fontWeight: "bold",
//       textAlign: "center",
//       backgroundColor: "#000000a0"
//     }
//   });

export default Home;