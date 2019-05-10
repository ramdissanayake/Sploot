import React from 'react';
import User from '../components/users/auth'
import Header from '../components/headerpg';
export default class Login extends React.Component{
    render(){
        var user = new User()
        return(<div>
            {/* <Header/> */}
            <form onSubmit={
                (e)=>user.auth(e)
            }>

            <input name="username" type="text" ></input>
            <input name="pw" type="password"></input>
 
       <button type="submit">Login</button>

            </form>

            <button onClick={(e)=>user.logout(e)}>Logout</button>
        </div>
        )
    }
} 