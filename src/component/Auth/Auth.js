import React, {Component} from 'react';
import axios from 'axios';
class Auth extends Component {

    state={
     username:'',
     password:'',   
    }
    
onInputChangeUsername = (e) => {
    this.setState({username: e.target.value})
}

onInputChangePassword =(e) => {
    this.setState({password: e.target.value})
}

registerNewUser(){
    axios.post(`http://localhost:8080/api/register`, {
        username: this.state.username,
        password: this.state.password,
    })
    .then((response) => {
        console.log(response.data)
        this.props.history.push('/dashboard')
        //need to figure out the nav back to dashboard
    })
}

login(){
    axios.post(`http://localhost:8080/api/login`, {
        username: this.state.username,
        password: this.state.password
    })
    .then((response) => {
        console.log(response.data)
        this.props.history.push('/dashboard')
        // need to navigate to the dashboard view
    })
}

// goToDashboard(path){
//     this.props.history.push(path);
// }



    render() {
        return(
            <div>
                <p>Auth</p>
                <input
                onChange={this.onInputChangeUsername}
                value={this.state.username}
                type="text"
                placeholder="Username"
                ></input>

                <input
                onChange={this.onInputChangePassword}
                value={this.state.password}
                type="password"
                placeholder="Password"
                ></input>
                <br></br>

                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.registerNewUser()}>Register</button>
            </div>
        )
    }
}
export default Auth;
