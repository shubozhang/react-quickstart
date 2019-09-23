import React from 'react';
import './css/App.css';
import MyComponent from './Ch02Component/MyComponent'
import MyComponent2 from './Ch02Component/MyComponent2'
import MyState from './Ch02Component/MyState'
import MyProps, {PersonExample} from './Ch02Component/MyProps'
import MyPropsClass from './Ch02Component/MyPropsClass'
import {MyRefEvent1, MyRefEvent2} from "./Ch02Component/MyRefEvent";
import {CApp} from "./Ch03ComponentApp/CApp"


function App() {
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
        <div className="App">
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

        </div>
    );
    // same as
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null','Using react createElement'));
}


export default App;
