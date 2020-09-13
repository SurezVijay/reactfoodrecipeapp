import React, { Component } from 'react';
import {useState,useEffect} from 'react';

function Fcomponent(props){

    // We cannot use State in Function Component. So we use Hooks to initialize the value and update
    // Syntax const[HooksName,FunctionName] = useState("DefaultValue");
    const [name,setUserName] = useState("Suresh");
    const changeName = () => {
        setUserName("Sureshkumar");
    }

    useEffect = () => {
        setUserName("Sureshkumar Vijayakumar");
    }


    return(
        <div>
        {/* <div>This is from Functional Component {props.name}</div> */}
        <div>{name}</div>
        <button onClick={changeName}>ChangeNameEvent</button>
        </div>
    )
}

export default Fcomponent;