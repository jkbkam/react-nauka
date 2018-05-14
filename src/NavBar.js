import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {

    render() {
        return (

            <nav>
                <p><Link to ="/">Home</Link></p>
                <p><Link to ="/counters">Counters</Link></p>
                <p><Link to ="/about">About</Link></p>
                <p><Link to ="/tasks">Tasks</Link></p>
                <p><Link to ="/magicnumbers">Magic Number</Link></p>
            </nav>
        )
    }
}

export default NavBar