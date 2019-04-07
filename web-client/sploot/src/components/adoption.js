import React from 'react';
import '../custom.css';
import NavBar from './navbar';
import Search from './search';
import Results from './results';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Adoption extends React.Component {
    render(){
        return(
        <div>
            <NavBar/>
            <Search/>
            <Results/>
        </div>

        );
    }
}