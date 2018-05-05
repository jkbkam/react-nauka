import React from 'react'

class Counter extends React.Component {

    state = {
        value: 0
    }

handleIncrementClick = () => this.setState({
    value: this.state.value + 1
})

handleDecrementClick = () => this.setState({
        value: this.state.value -1
})

    handleResetClick = () => this.setState({
        value : this.props.initialValue
    })

    static getDerivedStateFromPorops (nextProps, prevState) {
        return {vaule: nextProps.initialValue}
    }

    render () {


        return (
<div>
    <h1>{this.state.value}</h1>
    <p>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
        <button onClick={this.handleResetClick}>Reset</button>
    </p>
</div>
        )
    }
}

export default Counter