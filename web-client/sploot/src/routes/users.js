import React from 'react';
import '../custom.css';
import Search from '../components/requests/search';
import User from '../components/admin/users';
import Sidebar from '../components/sidebar';
import Header from '../components/headerpg';

export default class Users extends React.Component{
    constructor(props){
        super(props);
        // State to watch for new requests on routes render.
    }
    render(){
        return(
            <div>
         
            {/* <Header/> */}
            <Sidebar/> 
            <User/>  
            
            </div>
        )
    }
}