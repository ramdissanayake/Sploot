import React from 'react';
import '../custom.css';
import NavBar from './navbar';

import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
  

export default class DogProfile extends React.Component {
    render(){
        return(
            
            <div>
                <NavBar/>
                <div color="414546">
                <Card inverse>
        <CardImg width="10%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=108%C3%970&w=58&h=26.5&bg=c1cdd1&txtclr=414546" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText align="center" txtclr="black">
          
              <h2 >Name</h2>
          </CardText>
          

    {/* <div className = "container"> */}
    <div className="row">
    <div className="col-md-4" align="center" >
    
    <p>profile picture</p>
            <img src="good.jpg" alt="good" width="300" height="300" border="green" color="red" background-color="green"/>
            <p>other images</p>
    
  </div>
  <div className="col-md-8" align="center">
  
  <div class="content-box">
  {/* content of the box */}
  </div> 
  <br></br>
  <div class="content1-box">
  {/* description  */}
  </div> 
  
  </div>
  </div>
  {/* </div> */}


          <CardText>
            
          </CardText>
        </CardImgOverlay>
      </Card>
                </div>
            </div>
        );
    }
}