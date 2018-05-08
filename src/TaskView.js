import React, {Component} from 'react'

class TaskView extends Component {

    state = {
        taskName: 'zupa',
        taskDescription: 'foo',
        tasks: [
            {
                id: 1,
                name: 'wewefwefw',
                description: 'wefwefwf'
            },
            {
                id: 2,
                name: 'wewefwefw',
                description: 'wefwefwf'
            }
        ]
    }


    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.taskName, this.state.taskDescription)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div>
                <h1> pokaż taska</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.taskName}
                        onChange={this.handleChange}/>
                    <input
                        value={this.state.taskDescription}
                        onChange={this.handleTaskDescriptionChange}/>
                    <button>Add</button>
                </form>

                <ul>
                    <li>1 Task</li>
                    <li>2 Task</li>
                </ul>
            </div>
    )
    }
    }
    export default TaskView