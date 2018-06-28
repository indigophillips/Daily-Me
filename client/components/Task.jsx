import React from 'react'

class Task extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: [
        {
          id: 1,
          task: 'task 1'
        },
        {
          id: 2,
          task: 'task 2'
        }
      ]
    }
  }

  editTask(){

  }

  deleteTask() {

  }

  render() {
    return (
      <div className="task">
        <h2>Tasks of the day</h2>
        <input type="text" placeholder="Type task here" name="task" id="task" />
        <input type="submit" id="taskSubmit" value="Add task" />
        <ul>
          {this.state.tasks.map(task => {
            return <li key={task.id}>{task.task} <input type="submit" id="editTask" value="Edit" /> <input type="submit" id="deleteTask" value="Delete" /></li>
          })}
        </ul>
      </div>
    )
  }

} 

export default Task