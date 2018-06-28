import request from 'superagent'

export {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  getNewsApi
}

function getTasks () {
  return request
    .get('/api/v1/tasks')
    .then(resp => {
      return resp.body
    })
    .catch(err => {
      console.error(err)
    })
}

function addTask (task) {
  return request
    .post('/api/v1/tasks')
    .send(task)
    .catch(err => {
      console.error(err)
    })
}

function updateTask (task) {
  return request.put(`/api/v1/tasks`)
    .send(task)
    .catch(err => {
      throw Error('Cannot PUT a Post!')
    })
}

function deleteTask (taskId) {
  return request.del('/api/v1/tasks').send({ id: taskId })
    .catch(err => {
      console.error(err)
    })
}

// external api news

function getNewsApi () {
  return request
    .get('https://newsapi.org/v2/top-headlines?country=nz&apiKey=61a826273102483097cd398da8418fd3')
    .then(resp => {
      const {title, description, url, urlToImage} = resp.articles[0]
      return {title, description, url, urlToImage}
    })
    .catch(err => {
      console.error(err)
    })
}
