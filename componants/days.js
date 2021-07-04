import React from 'react'
import { StyleSheet, Text, View ,FlatList,TextInput,Button,SafeAreaView} from 'react-native';
import {useState} from 'react'
import {createstacknavigator} from 'react-navigation' 
import { createAppContainer } from 'react-navigation';
import {LinearGradient} from 'expo-linear-gradient';



function Days (props){
    const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    
    
    return (
        <>
        <LinearGradient  colors={['#D5D4D0','#D5D4D0','#EEEEEC','#EFEEEC','#E9E9E7']}>
        <SafeAreaView style={style.SafeAreaView}>
         
        <View style={style.displayDays}>
            {days.map((day,index)=>{
                return (
                    <LinearGradient keyExtractor={index} style={style.day} colors={['#09203F','#537895']}>
                         <Text keyExtractor={day} style={{color:'white'}}  onPress={()=>props.navigation.navigate('Notes')} >{day.toUpperCase()} </Text>
                    </LinearGradient>
                    )
            })}
        </View>
        </SafeAreaView>
        </LinearGradient>
        </>

    )

}
const style=StyleSheet.create({
    SafeAreaView:{
        height:'100%',
        color:'#f0f'
    },
    displayDays:{
        marginTop:25,
        display:'flex',
        justifyContent:'space-around',
        flexWrap:'wrap',
        flex:1,
        flexDirection:'row',
        width:'100%',
        color:'blue'

    },
    day:{
        marginTop:'8%',
        height:130,
        width:'45%',
        margin:5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        borderRadius:10,
        shadowColor:'white'
       
        
    

    }
})
export default Days;
