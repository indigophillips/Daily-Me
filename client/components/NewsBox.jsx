import React from 'react'
import Url from './Url'
import {getNewsApi} from '../apiClient'

class Widget1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      url: '',
      urlToImage: ''
    }
  }

  componentDidMount () {
    getNewsApi()
      .then(resp => {
        const {title, description, url, urlToImage} = resp
        this.setState({
          title,
          description,
          url,
          urlToImage
        })
      })
  }

  render () {
    const url = this.state.url
    const urlToImage = this.state.urlToImage
    const styleImage = 'url("' + urlToImage + '")'

    return (
      <div className="widgetBox" style={{backgroundImage: styleImage}}>
        <div className="overlay">
          <h2>News</h2>
          <div className="newsBox">
            <div className="newsTitle">
            <h3>{this.state.title}</h3>
            </div>
            <div className="newsDescription">
              {this.state.description}
            </div>
            <div className="newsUrl">
              <Url url={url} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Widget1
