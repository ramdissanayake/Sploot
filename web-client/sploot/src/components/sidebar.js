import React, { Component } from 'react'
import '../css/sidebar.css'

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {}
    
  }
  render(){
    
    return(
<div class="sidebar">
  <a href="/admin"> Requests</a>
  <a href="/users"> Users</a>
  <a href="/adop"> Adoptions</a>
  
</div>

    )
    }
  }