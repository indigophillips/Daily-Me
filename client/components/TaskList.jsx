import React from 'react'
import Task from './Task'
import { getAllTasks, addTask, updateTask, deleteTask } from '../apiClient'


class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      task: '',
      error: null,
      id: null,
      isHidden: true
    }
    this.addNewTask = this.addNewTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
  }

  componentDidMount() {
    this.reloadTasks()
  }

  reloadTasks(){
    getAllTasks()
      .then(tasks => {
        this.setState({ tasks })
      })
  }

  addNewTask(e) {
    e.preventDefault()
    this.setState({ error: null })
    const newTask = { task: this.state.task }
    addTask(newTask)
      .then(() => {
        this.reloadTasks()
      })
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  editTask(task) {
    this.setState({ error: null })
    updateTask(task)
      .catch(err => this.setState({ error: err.message }))
  }

  deleteThisTask(task) {
    this.setState({ error: null })
    deleteTask(task.id)
      .then(() => {
        this.reloadTasks()
      })
  }

  updateTask(event) {
    this.setState({
      task: event.target.value.substr(0, 50)
    })
  }

  render() {
    return (
      <div className="task">
        <h2>Tasks of the day</h2>
        <form onSubmit={this.addNewTask}>
          <input type="text" placeholder="Type task here" name="task" id="task" onChange={this.updateTask.bind(this)} />
          <input type="submit" id="taskSubmit" value="Add task" />
        </form>
        <ul>
          {this.state.tasks.map(task => {
            return <li key={task.id}>
              <Task task={task} onClick={this.deleteThisTask} onChange={this.reloadTasks.bind(this)} />
            </li>
          })}
        </ul>
      </div>
    )
  }

}


export default TaskList