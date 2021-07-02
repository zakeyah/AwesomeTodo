import React from 'react';
import { StyleSheet, Text, View ,FlatList,TextInput,Button} from 'react-native';
import {useState} from 'react'

function Todo(props){

    const [list,setList]=useState(['read','write','delete','update']);
    const [task,setTask]=useState('');

    return(
     <>
        <View style={style.header}>
           {/* <Button title='back' onPress={()=>props.show(false)}/> */}

          <Text >Todo List</Text>
        </View>
           <FlatList  data={list} renderItem={({item})=> <Text keyExtractor={item} style={style.item}>{item}</Text>} /> 
           <TextInput placeholder='type a task' onChangeText={(text)=>setTask(text)} style={style.input}/>
           <Button title='add' onPress={()=>setList([...list,task])}/>
    </>
    )

}

const style=StyleSheet.create({
    header:{
        height:'10%',
        width:'100%',
        marginTop:'8%',
        backgroundColor:'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    flatList:{
        height:'100vh'

    },
    item:{
        marginTop:40,
        backgroundColor:'green',
        padding:12
    },
    input:{
        backgroundColor:'gray',
        height:60
    }
    
})
export default Todo;