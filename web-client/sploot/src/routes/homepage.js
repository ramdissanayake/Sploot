import React from 'react';
import '../custom.css';
import Header from '../components/header';
import NavBar from '../components/navbar';



export default class HomePage extends React.Component {
    render(){
        return(
            <div>
            <NavBar/>
            <Header/>
            </div>


        );
    }
}