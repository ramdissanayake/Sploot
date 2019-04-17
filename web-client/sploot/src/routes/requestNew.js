import React, { Component } from 'react';
import NewRescue from '../components/requests/newRescue';
import '../custom.css';
import NavBar from '../components/navbar';
import Header from '../components/header';

export default class newRequest extends Component{
    render(){
        return(
            <div>
            <NavBar/>
            <Header/>
            <NewRescue/>
            </div>
        )
    }
}