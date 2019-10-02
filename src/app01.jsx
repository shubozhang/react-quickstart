import React from 'react';
import './css/App.css';
import MyComponent from './components01/Ch02Component/MyComponent'
import MyComponent2 from './components01/Ch02Component/MyComponent2'
import MyState from './components01/Ch02Component/MyState'
import MyProps, {PersonExample} from './components01/Ch02Component/MyProps'
import MyPropsClass from './components01/Ch02Component/MyPropsClass'
import {MyRefEvent1, MyRefEvent2} from "./components01/Ch02Component/MyRefEvent";
import {CApp} from "./components01/Ch03ComponentApp/CApp"
import {LoginForm} from "./components01/Ch04form/LoginForm";
import {Life} from "./components01/ch05lifecycle/Life";
import {HelloWorld} from "./components01/ch06DomDiff/HelloWorld";


export default function App01() {
    const frontNames = ['jQuery', 'zepto', 'angular', 'vue', 'react']
    const ul = (
        <ul>
            {
                frontNames.map((name, index) => <li key={index}>{name}</li>)
            }
        </ul>
    )
    const p1 = {name: "Zoe", gender: "female", age: 25}
    const p2 = {name: "My props class", gender: "female", age: 25}
    return (
        <div className="App" id={"example"}>
            <h1> hi, this is Brylee </h1>
            <p>this is a paragraph</p>
            <PersonExample name="Arron" age="20"/>
            <PersonExample name="Bob" age="30">My hobbies: tennis </PersonExample>
            <PersonExample name="Cooper" age="40"/>
            <ul>{ul}</ul>
            <MyComponent/>
            <MyComponent2/>
            <MyState/>
            <MyProps name="Joe" gender="male" age={30} />
            <MyProps name="Elmo" gender="male" age={20} />
            <MyProps {...p1}/>
            <MyPropsClass {...p2}/>

            <MyRefEvent1 />
            <MyRefEvent2 />

            <CApp/>

            <LoginForm/>

            <Life msg={"React is too difficult"}/>

            <HelloWorld></HelloWorld>

        </div>
    );
    // same as
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null','Using react createElement'));
}



