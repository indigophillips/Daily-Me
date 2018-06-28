import React from 'react'
import { updateTask } from '../apiClient'

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task.task
    }
  }

  updateTask(event) {
    this.setState({
      task: event.target.value.substr(0, 50)
    })
  }

  editTask() {
    this.setState({ error: null })
    const task = {
      task: this.state.task,
      id: this.props.task.id
    }
    updateTask(task)
    .then(this.props.onChange)
      .catch(err => this.setState({ error: err.message }))
  }


  render() {
    return (
      <form className="hidden" onSubmit={this.editTask.bind(this)} >
        <input type="text" value={this.state.task} onChange={this.updateTask.bind(this)} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


export default EditTask