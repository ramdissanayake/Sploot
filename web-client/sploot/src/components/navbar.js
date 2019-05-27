import React from 'react';
import '../custom.css'

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Login from './login'
export default class NavBar extends React.Component {
  
  componentDidMount(){
    window.$('.dropdown-toggle').hover(function(){
      window.$(this).children('ul').stop().slideToggle(400);
  });


  }

   render(){
     
     return(

      <nav class="navbar navbar-inverse ">
          <div class="container-fluid">
          <div class="navbar-header">
      <a class="navbar-brand" href="/">
      <img width="100px"src="/images/brand/sploot.png"/>
      </a>
    </div>
              <ul className="nav navbar-nav navbar-right" >    
                                                                                                                                                      
              <li>
                  <a>
                    <Link to="/requests/new"class="btn btn-primary reportbtn">Report an Animal</Link>
                  </a>
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
                <a>Register</a>
                </li>

                <li >
                  <a>
              <Login/>
                    
                  </a>
                </li>  
                
            </ul>

            </div>
</nav>






     )
   }
 
}