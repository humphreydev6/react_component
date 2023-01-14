import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import FunctionalComponent from './Component/FunctionalComponent';
import {ClassComponent, ClassComponent1} from './Component/ClassComponent';
import Click from './Component/Click';
import Counter from './Component/Counter';
import ParentComp from './Component/ParentComp';


function App() {
  return (
    <div>
    <h1> Hello! welcome to Cogent</h1>
    <h1> This is a react tutorial course</h1>
    <FunctionalComponent/>
    <ClassComponent/>
    <ClassComponent1/>
    <Click/>
    <Counter/>
    <ParentComp/>

    </div>
  )
}

export default App;
