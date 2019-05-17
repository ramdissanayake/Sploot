import React from 'react';
import '../home.css';

export default class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid">

            {/* Header */}
                <div id="homeheader" className="row">

                    <div className="col-md-12 title wow  ">
                         <h1 className="tracking-in-contract">Sploot!</h1><p className="tracking-in-contract">Animal Rescue</p>
                    </div>


                    <div className="col-md-row">
                   
                    {/* <div className="col-md-2">
                    <div class="blue-btn">
  <a class="first-link" href="">
    Get Started
  </a>
  <a href="">
  Learn More
  </a>
</div> */}

                  
                    <div className="col-md-3 col-sm-3 col-xs-5">
                    <img  src="/images/panels/google-play-badge.png"/>
                    </div>
                    
                    </div>

                    <div id="homeheaderimg" className="wow fadeIn">
                    </div>
                </div>

            {/* About Sploot */}
                <div id="about" className="row">
                <div className="col-md-12">
                About Sploot
            
                </div>    
                </div>

            </div>
























        )
    }
}