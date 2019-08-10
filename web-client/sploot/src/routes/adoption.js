import React from 'react';
import '../custom.css';
import NavBar from '../components/navbar';
import Search from '../components/adoptions/search';
import Results from '../components/adoptions/results';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Adoption extends React.Component {
    render(){
        return(
        <div>
            {/* <NavBar/> */}
            {/* <Search/> */}
            <Results/>
        </div>

        );
    }
}