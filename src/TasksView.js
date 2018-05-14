import React, {Component} from 'react'
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";


class TasksView extends Component {

    state = {
        tasks: []
    }

    removeTask = taskId => {
        this.setState(
            ({tasks}) => ({
                tasks: tasks.filter(
                    task => task.id !== taskId
                )
            })
        )
    }

    addTask = (taskName, taskDescription) => {
        this.setState(
            ({tasks}) => ({
                tasks: tasks.concat({
                    id: tasks.length === 0 ? 1 : Math.max(...tasks.map(task => task.id)) + 1,
                    name: taskName,
                    description: taskDescription
                })
            })
        )
    }


    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <TaskForm addTask={this.addTask}/>
                <TasksList
                    tasks={this.state.tasks}
                    removeTasks={this.removeTask}/>
            </div>
        )
    }

    componentDidMount() {
        const tasksAsTextInJSONFormat = localStorage.getItem('storedTasks')
        const tasksFromLocalStorage = JSON.parse(tasksAsTextInJSONFormat)

        this.setState({
            tasks: tasksFromLocalStorage || []
        })
    }

    componentDidUpdate() {
        const tasks = this.state.tasks

        localStorage.setItem('storedTasks', JSON.stringify(tasks))
    }


}

export default TasksView