import React from 'react'

class Counter extends React.Component {

    state = {
        value: 0
    }

    componentDidMount() {
        setTimeout( () => this.setState({
            value : 1

        }), 1000)

    }

    render () {

console.log('malujemy counter')

        return (
<div>
    <h1>{this.state.value}</h1>
    <p>
        <button onClick={() => this.setState({value : this.state.value + 1})}>Increment</button>
    </p>
</div>
        )
    }
}

export default Counter