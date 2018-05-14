import React, {Component} from 'react'

class TaskForm extends Component {
    state = {
        taskName: '',
        taskDescription: '',
        fromError: null
            }



    handleSubmit = event => {
        event.preventDefault()

        if (this.state.taskName.trim() === '') {
           this.setState({
               formError: new Error('Musisz coś napisać ziom')
           })
            return
        }

        this.props.addTask(this.state.taskName, this.state.taskDescription)

        this.setState({
            taskName: '',
            taskDescription: '',
                  })


    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='taskName'
                    value={this.state.taskName}
                    onChange={this.handleChange}/>
                <input
                    name='taskDescription'
                    value={this.state.taskDescription}
                    onChange={this.handleChange}/>
                <button>Add</button>
            </form>
        )
    }
}

export default TaskForm