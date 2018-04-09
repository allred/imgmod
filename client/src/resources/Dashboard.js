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
  render() {
    let images = this.state.images 
    console.log(images)
    return images ? (
      <div>
        <h2>Dashboard</h2>
        <h3>Stats</h3>
        <h3>{images.length} Images <button></button></h3>
      {images.map((img) =>
        <div>{img.id}<img key={img.id} src={img.url} alt="" /></div>
      )}
      </div>
    )
    : (
      <div>No images found</div>
    )
  }
}

export default Dashboard
