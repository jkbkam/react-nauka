import React, {Component, Fragment} from 'react'


class Counter extends Component {
    state = {
        value: 0,
        title: "Super Counter"
}
handleClick = () => this.setState({
    value: Math.min(this.state.value + 1, 50)
})

    handleReset = () => this.setState ({
        value: this.props.initialValue
    })

    handleDecrement = () => this.setState ({
        value: Math.max(this.state.value - 1, 0 )
    })

    static getDerivedStateFromProps (nextProps, prevState) {
        return {value: nextProps.initialValue}
    }

    render() {
        return (
            <Fragment>
                <h1>{this.state.value}</h1>
                <h2>{this.state.title}</h2>
                <p>
                    <button onClick={this.handleClick}>Increment</button>
                    <button onClick={this.handleClick}>Reset</button>
                    <button onClick={this.handleClick}>Decrement</button>
                </p>
            </Fragment>
        )
    }
}

export default Counter