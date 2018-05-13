import React, {Component} from 'react'


class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>0</h1>
                <p>
                    <button>Increment</button>
                </p>
            </React.Fragment>
        )
    }
}


export default Counter