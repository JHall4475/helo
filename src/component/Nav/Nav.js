import React from 'react';



function Nav() {
    

    return (
        

        <div>
            <button onClick={() => this.goToHome('../Dashboard')}>Home</button>
            <button>New Post</button>
            <button>Logout</button>
        </div>
    )
}

export default Nav;