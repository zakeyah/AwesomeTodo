import React from 'react';
import { StyleSheet, Text, View ,FlatList,TextInput,Button, Picker} from 'react-native';
import RNPickerSelect from '@react-native-picker/picker';
import {useState} from 'react'

function Todo(props){

    const [list,setList]=useState(['read','write', 'read','write', 'read','write']);
    const [task,setTask]=useState('');
    const [ taskClass ,setTaskClass ]=useState('');

    return(
     <>
        <View style={style.header}>
           {/* <Button title='back' onPress={()=>props.show(false)}/> */}

          <Text >Todo List</Text>
        </View>
        <View style={style.flatList} >
            {list.map(item => (
                <Text keyExtractor={item} style={ item === 'read'? style.item : style.test}>{item}</Text>
            ))}
        </View>
           <TextInput placeholder='type a task' onChangeText={(text)=>setTask(text)} style={style.input}/>
            <Picker onValueChange={(item) => setTaskClass(item) } style={style.picker}>
                <Picker.item label='Urgent and important' value='urgent-and-important' />
                <Picker.item label='Urgent and unimportant' value='urgent-and-unimportant'/>
                <Picker.item label='Important and not urgent' value='important-and-not-urgent'/>
            </Picker>
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
        // height:'100vh',
        width:'100%',
        // justifyContent:'space-around',
        // flexWrap:'wrap',
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',

     
    },
    item:{
        marginTop:40,
        backgroundColor:'green',
        padding:12,
        width: 100,
        height: 100,
        borderRadius: 100/2,
    
       
    },
    input:{
        backgroundColor:'gray',
        height:60
    },
    test: {
        marginTop:40,
        backgroundColor:'green',
        padding:12,
        width: 150,
        height: 150,
        borderRadius: 150/2,
      

    },
    picker: {
        backgroundColor: 'gray'
    }
    
})
export default Todo;