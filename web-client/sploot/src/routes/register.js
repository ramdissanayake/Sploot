import React from 'react';
import '../custom.css';
import Home from '../components/home';
import NavBar from '../components/navbar';
import SignUp from '../components/signup';



export default class Register extends React.Component {
    render(){
        return(
            <div>
            <SignUp/>
            </div>


        );
    }
}