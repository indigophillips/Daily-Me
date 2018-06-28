import React from 'react'
import Url from './Url'

class Widget1 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'hi',
      description: '',
      url: 'https://www.google.com/',
      urlToImage: 'https://resources.stuff.co.nz/content/dam/images/1/q/k/p/o/d/image.related.StuffLandscapeSixteenByNine.620x349.1qkr01.png/1530221568670.jpg'
    }
  }

  render () {
    const url = this.state.url
    const urlToImage = this.state.urlToImage
    const styleImage = 'url("' + urlToImage + '")'

    return (
      <div className="newsBox" style={{backgroundImage: styleImage}}>
        <div className="title">
          {this.state.title}
        </div>
        <div className="description">
          {this.state.description}
        </div>
        <div className="url">
          <Url url={url} />
        </div>
      </div>
    )
  }
}

export default Widget1
