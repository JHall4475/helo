import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
    
    render() {
         console.log('Dashboard props', this.props)
        const{username, profilepic}=this.props
        return(
            <div>
                Dashboard
            <p>username: {username}</p>
            <img src={profilepic} alt=''></img>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        username: state.username,
        profilepic: state.profilePicture
    }
}

export default connect(mapStateToProps)(Dashboard);
