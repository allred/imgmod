import React, { Component } from 'react'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {}
    this.getImages = this.getImages.bind(this)
  }
  componentDidMount() {
    this.getImages()
  }
  fetch(endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getImages() {
    this.fetch('api/images')
    .then(images => {
      this.setState({images: images})
    })
  }
  getImagesUnmoderated() {
    this.fetch('api/images?filter_status=unmoderated')
    .then(images => {
      this.setState({images: images})
    })
  }
  getImagesApproved() {
    this.fetch('api/images?filter_status=approved')
    .then(images => {
      this.setState({images: images})
    })
  }
  getImagesRefused() {
    this.fetch('api/images?filter_status=refused')
    .then(images => {
      this.setState({images: images})
    })
  }
  render() {
    let images = this.state.images 
    return images ? (
      <div>
        <h2>Dashboard</h2>
        <h3>{images? images.length : 0} Images </h3>
        Filter:
          <button onClick={() => this.getImages()}>All</button>
          <button onClick={() => this.getImagesUnmoderated()}>Unmoderated</button>
          <button onClick={() => this.getImagesApproved()}>Approved</button>
          <button onClick={() => this.getImagesRefused()}>Refused</button>
      {images ? images.map((img) =>
        <div key={img.id}>{img.id}<img key={img.id} src={img.url} alt="" /></div>
      ): <div></div>}
      </div>
    )
    : <div>
        <h2>Dashboard</h2>
        <h3>0 Images </h3>
      </div>
  }
}

export default Dashboard
