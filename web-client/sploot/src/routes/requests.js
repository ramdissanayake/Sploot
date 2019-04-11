import React from 'react';
import '../custom.css';

import NavBar from '../components/navbar';
import Search from '../components/requests/search';
import Results from '../components/requests/results';
import NewRescue from '../components/requests/newRescue';


export default class Requests extends React.Component{
    constructor(props){
        super(props);
        // State to watch for new requests on routes render.
    }
    render(){
        return(
            <div>
            <NavBar/>
            <Search/><br/>
            <Results/>
            <NewRescue/>
       
            </div>
        )
    }
}