import React from 'react';
import User from './users/auth'
import Header from './headerpg';
export default class Login extends React.Component{
    render(){
        var user = new User()
        return(<div className="loginbar"> 
            {/* <Header/> */}
            <form onSubmit={
                (e)=>user.auth(e)
            }>
            <div className="row">
                <div className="col-md-9">
                <input name="username" type="text" placeholder="Username"></input>
                <input name="pw" type="password" placeholder="Password"></input>
            <button class="btn loginbtn" type="submit">Login</button>
            {/* <button class="btn loginbtn" >Signup</button> */}
            <button class="btn loginbtn btn-link">Forgot Password?</button>
                

                {/* <div className="col-md-12"> */}

                {/* </div> */}
                {/* <div className="col-md-6"> */}
            {/* <button class="btn loginbtn" onClick={(e)=>user.logout(e)}>Logout</button> */}
                {/* </div> */}
                </div>
             

            </div>
 
            </form>


        </div>
        )
    }
} 