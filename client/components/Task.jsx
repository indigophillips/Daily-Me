import React from 'react'
import { getAllTasks, addTask, updateTask, deleteTask } from '../apiClient';

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      task: '',
      error: null,
      id: null
    }
    this.addNewTask = this.addNewTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
    this.editTask = this.editTask.bind(this)
  }

  componentDidMount() {
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
        getAllTasks()
          .then(tasks => {
            this.setState({ tasks })
          })
      })
      .catch(err => this.setState({ errorMessage: err.message }))
  }

  editTask(e) {
    e.preventDefault()
    this.setState({ error: null })

    updateTask(this.state.task)
      .catch(err => this.setState({ error: err.message }))
  }

  deleteThisTask(task) {
    // e.preventDefault()
    this.setState({ error: null })
    //const id = this.props.id
    deleteTask(task.id)
      .then(() => {
        getAllTasks()
          .then(tasks => {
            this.setState({ tasks })
          })
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
            return <li key={task.id}>{task.task}
              <input type="submit" id="editTask" value="Edit" id="editTask" onClick={this.editTask.bind(this, task)} />
              <input type="submit" value="Delete" id="deleteTask" onClick={this.deleteThisTask.bind(this, task)} /></li>
          })}
        </ul>
      </div>
    )
  }

}


export default Task