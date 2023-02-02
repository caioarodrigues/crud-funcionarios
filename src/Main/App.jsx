import './App.css';
import Header from '../Components/Header';
import Body from '../Components/Body';
import React from 'react';

export default function App(){
    return (
        <React.Fragment>
            <Header></Header>
            <Body></Body>
        </React.Fragment>
    );
}