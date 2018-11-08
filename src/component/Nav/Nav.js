import React from 'react';
import connect from 'react-redux';
import {Link, withRouter} from 'react-router-dom';




function Nav(props) {
    if(props.location.pathname !== '/'){
        return (
            <div>
            <Link className="home" to='/dashboard'>
            <span>Dashboard</span>
            </Link>
            <Link className="new-post" to='/post'>
            <span>New Post</span>
            </Link>
            <Link className="logout" to='/'>
            <span>Logout</span>
            </Link>
            </div>
        )
 }else{
     return null;
 }
}



const mapStateToProps = (state) =>{
    return {

    }
}

export default withRouter(Nav);