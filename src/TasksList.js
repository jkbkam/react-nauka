import React, {Component} from 'react'

class TasksList extends Component {
    render() {
        return (
            <div>

                <ul>

                    {
                        this.props.tasks.map(
                            task => (
                                <li key={task.id}>
                                    {task.name} : {task.description}
                                    <button onClick={() => this.props.removeTask(task.id)}>Jebs</button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default TasksList