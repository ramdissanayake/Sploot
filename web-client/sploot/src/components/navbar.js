import React from 'react';
import '../custom.css'
import isWebview from 'is-webview'

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Login from './login'
export default class NavBar extends React.Component {
  
  componentDidMount(){
    window.$('.dropdown-toggle').hover(function(){
      window.$(this).children('ul').stop().slideToggle(400);
  });


  }

   render(){
     if (isWebview(navigator.userAgent)) {
      return null;
    }else{
     return(

      <nav class="navbar navbar-inverse ">
          <div class="container-fluid">
          <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
 
        
          <i class="fa fa-paw"></i >
          </button>
      <a class="navbar-brand" href="/">
      <img width="100px"src="/images/brand/sploot.png"/>
      </a>
      <div style={{paddingTop:"80px"}} >

        <Link to="/requests/new" class="btn btn-primary reportbtn">Report an Animal</Link>
      </div>
    </div>
    <div  className="collapse navbar-collapse" id="myNavbar">

              <ul className="nav navbar-nav navbar-right" >    
                                                                                                                                                      
              <li>
                  
                </li>
                <li style={{color:''}}><Link to="/">Home</Link></li>   
                <li style={{display:'inline'}}><Link to="/requests">Rescue</Link></li>                    
                <li style={{display:'inline'}}><Link to="/adoptions">Adopt</Link></li>  
                {/* Sploot Dropdown Menu */}
                <li style={{display:'inline'}} class="dropdown-toggle" data-toggle="dropdown">
                <a  id="menu1" class="dropdown-toggle" data-toggle="dropdown" href="#">Sploot!</a>
                <ul class="dropdown-menu pulse" role="menu" aria-labelledby="menu1">
                  <li ><Link to="#">
              Blog
                  </Link></li>
                  <li><Link to="#">Shop</Link></li>
                  <li><Link to="#">Forum</Link></li>
                </ul>
                
                </li>
                
                <li style={{display:'inline'}}><Link to="/adoptions">Contact</Link></li>  
                <li style={{display:'inline'}}>
                <Link to="/register">
                <a>Register</a>
                </Link>
                </li>

                <li >
                  <a>
              <Login/>
                    
                  </a>
                </li>  
                
            </ul>
    </div>

            </div>
</nav>






     )
}
   }
 
}