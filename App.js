import { StatusBar } from 'expo-status-bar';
import React,{useState}  from 'react';
import { If,Then,Else } from 'react-if';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './componants/todo'
import Days from './componants/days';
import Navigator from './routes/homeStack'

export default function App() {
  
  const [showTodo,setShowTodo]= useState(false);
  return (
    <>
    <Navigator style={{backgroundColor:'red'}}/>
    {/* <If condition={showTodo}>
      <Then>
      <Todo show={setShowTodo}/>

      </Then>
    <Else>

      <Days show={setShowTodo}/>
    </Else>
    </If> */}

     </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
