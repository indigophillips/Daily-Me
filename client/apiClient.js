import request from 'superagent'

export {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
}

function getAllTasks() {
  return request
    .get('/api/v1/tasks')
    .then(resp => {
      return resp.body
    })
    .catch(err => {
      console.error(err)
    })
}

function addTask(task) {
  return request
    .post('api/v1/tasks')
    .send(task)
    .catch(err => {
      console.error(err)
    })
}

function updateTask (task) {
  return request.put(`api/v1/tasks`)
    .send(task)
    .catch(err => {
      throw Error('Cannot PUT a Post!')
    })
}

function deleteTask (taskId) {
  return request.del('api/v1/tasks').send({ id: taskId })
  .catch(err => {
    console.error(err)
  })
}
