import React from 'react';
import { StyleSheet, Text, View ,FlatList,TextInput,Button, Picker, TouchableOpacity, KeyBoard} from 'react-native';
import RNPickerSelect from '@react-native-picker/picker';
import {useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import newDate from '../helperFunction/date';
import { If, Else, Then } from 'react-if';


function PickerComponent(props){

    const [list,setList]=useState([]);
    const [task,setTask]=useState({});
    const [show, setShow] = useState(false)
  

    const onLongPress = (inx) => {
      
       setList(list.filter(item => item.text !== inx ))
       alert('Task Was Deleted')
        
    }

    const onChangeText = (text) => {
        setTask({...task,text: text})

    }

    return(
     <>
        <LinearGradient style={style.header}   colors={['#09203F','#537895']}>
            <View  >
                <Text style={style.headerText} >Your Notes</Text>
            </View>
        </LinearGradient>

        <View style={style.flatList} >
            {list.map((item, inx) => (
                <View style={style[`${item.class}`]}>
                    <Text  onLongPress={ () => onLongPress(item.text)} style={{color: 'white'}}  keyExtractor={inx} >{item.text}</Text>
                    <Text style={style.date}  >{newDate()}</Text>

                </View>
            ))}
        <View >
        <LinearGradient style={style.addCircle}   colors={['#09203F','#537895']}>
           <Text onPress={() => setShow(show=== false ? true: false)} style={{color: 'white',  fontSize: 50,textAlign:'center', fontSize: show === false ? 50 : 40 }}  >{show === false? '+' : 'x' }</Text> 
           </LinearGradient>
        </View>
        </View>
        <If condition={show}>
            <Then>
            <View  style={style.picker}>
                <Picker 
                onValueChange={(item) => setTask({...task,class: item}) }
                
                selectedValue={task.class}
                
                >
                    <Picker.item label="Please select" value="disabled" color="#aaa"/>
                    <Picker.item label="critical" value="urgentAndImportant" />
                    <Picker.item label="Important" value="urgentAndUnimportant"/>
                    <Picker.item label="little important" value="importantAndNotUrgent"/>
                </Picker>

            </View>
            <TextInput value={task.text} placeholder='type a task' onChangeText={onChangeText} style={style.input}/>

            </Then>
        </If>
        <TouchableOpacity style={style.button}>
                <Text style={style.textBut}  onPress={()=> {
                    show === true ? setList([...list,task]) : ''
                    setShow(false)
                    setTask({})
                
                    }}>ADD</Text>
        </TouchableOpacity>

           {/* <Button style={style.button} title='add' onPress={()=>setList([...list,task])}/> */}

    </>
    )

}

const style=StyleSheet.create({
    header:{
        height:'10%',
        width:'100%',
        backgroundColor:'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
       
    },
    headerText: {
        color: 'white',
        fontSize: 17
    },
    flatList:{
        width:'100%',
        flex:1,
        alignItems:'center'

     
    },
    item:{
        marginTop:40,
        backgroundColor:'green',
        padding:12,
        width: 100,
        height: 100,
        borderRadius: 100/2 ,
    
       
    },
    input:{
        paddingLeft: 20 ,
        backgroundColor:'#FDFFF6',
        height:60,
        borderWidth: 1,
        borderColor: 'black'
    },

    button:{
    height: 65 ,
    width:'100%',
    marginTop: 10,
    backgroundColor:'#09203F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //  color:'white'

    },

    textBut:{
        // width:'100%'
        color:'white',
        

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
        backgroundColor: '#cfcfcf',
        display: 'flex',
        justifyContent: 'center',
      
     
     
    }, 

    urgentAndImportant: {
        color: 'white',
        backgroundColor: '#284854',
        marginTop:30,
      
        padding:12,
        width: '90%',
        height: 65,
        borderRadius:10,
     

        
    },
    
    urgentAndUnimportant: {
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between' ,
        backgroundColor: '#60747c',
        marginTop:30,
    
        padding:12,
        width: '90%',
        height: 55,
        borderRadius:10,
      

        
    },
    
    importantAndNotUrgent: {
        color: 'black',
        backgroundColor: '#7E99A3',
        marginTop:30,
     
        padding:12,
        width: '90%',
        height: 50,
        borderRadius:10,
      


    },

    date: {
        fontSize: 10,
        color: '#FAE5AA'
    },

    add: {
        color: 'white'
    },

    addCircle: {
        color: '#FAE5AA',
        marginTop: 30,
        fontSize: 50,
        backgroundColor: '#739085',
        width: 80,
        height: 80,
        borderRadius: 80/2,
        // display: 'flex',
        // justifyContent: 'center',
        // textAlign:'center'
     
    }


    
})
export default PickerComponent;