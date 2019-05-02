import React from 'react';
import '../custom.css';
import Search from '../components/requests/search';
import Results from '../components/requests/results';
import Header from '../components/header';

export default class Requests extends React.Component{
    constructor(props){
        super(props);
        // State to watch for new requests on routes render.
    }
    render(){
        return(
            <div>
         
            <Header/>
            <Search/>
            <Results/>   
            </div>
        )
    }
}