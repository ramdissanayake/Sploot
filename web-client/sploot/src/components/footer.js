import React from 'react';
import '../custom.css';
// import '../footer.scss'

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <footer class=" footer container-fluid text-center">
            <div class="panel-heading">
              <b>
              Sploot! Animal Rescue
              Made with 
              </b><br></br>
              <span>
    Made with <i class="fa fa-heart pulse"></i> at <a 
    href="https://ucsc.cmb.ac.lk">UCSC</a>
</span>
            </div>
            <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
            <a href="https://www.freepik.com/free-photos-vectors/people">People vector created by pikisuperstar - www.freepik.com</a>          
             <p><a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a></p>
             <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>
             
             </footer>
            );
    }
}