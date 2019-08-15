import React from 'react';
import '../custom.css';
import Search from '../components/requests/search';
import Adp from '../components/admin/adoption';
import Sidebar from '../components/sidebar';
import Header from '../components/headerpg';

export default class Adoptions extends React.Component{
    constructor(props){
        super(props);
        // State to watch for new requests on routes render.
    }
    render(){
        return(
            <div>
         
            {/* <Header/> */}
            <Sidebar/> 
            <Adp/>  
            
            </div>
        )
    }
}