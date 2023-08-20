import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter/Counter';
import SetCounter from './components/SetCounter/SetCounter';

function App() {


    return (
        <div className="App">
            <SetCounter/>
            <Counter  />
        </div>
    );
}

export default App;
