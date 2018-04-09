import React, { Component } from 'react'
const queryString = require('query-string')

class Moderator extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    this.getImagesNew()
    this.getImagesRecentlyModerated()
  }
  fetch(endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getImagesNew() {
    this.fetch('api/images?filter_status=unmoderated&limit=1')
    .then(images => {
      this.setState({images_new: images})
    })
  }
  getImagesRecentlyModerated() {
    this.fetch('api/images?filter_status=moderated&order=updated_at_desc&limit=5')
    .then(images => {
      this.setState({images_recently_moderated: images})
    })
  }
  moderateImage(id, status) {
    let params = queryString.parse(this.props.location.search)
    let user = params.user ? params.user : "unknown"
    return fetch('api/images/' + id, {
      method: 'PUT',
      body: JSON.stringify({"status": status, "moderator": user}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
  }
  moderateNew(id, status) {
    this.moderateImage(id, status)
    this.getImagesNew()
    this.getImagesRecentlyModerated()
  }
  moderateRecentlyModerated(id, status) {
    this.moderateImage(id, status)
    this.getImagesNew()
    this.getImagesRecentlyModerated()
  }
  render() {
    let images_new = this.state.images_new
    let images_recently_moderated = this.state.images_recently_moderated
    let params = queryString.parse(this.props.location.search)
    let user = params.user ? params.user : "unknown"
    return (
      <div>
        <h2>Moderator - User: {user}</h2>
        <h3>New Images</h3>
        {images_new ? images_new.map((img) =>
          <div key={img.id}>
            {img.id}
            <img key={img.id} src={img.url} alt="" />
            <button onClick={() => this.moderateNew(img.id, "approved")}>Approve</button>
            <button onClick={() => this.moderateNew(img.id, "refused")}>Refuse</button>
            - {img.status ? img.status : "unmoderated"}
          </div>
        )
        : <div>no images found</div>
        }
        <h3>Recently Moderated</h3>
        {images_recently_moderated ? images_recently_moderated.map((img) =>
          <div key={img.id}>
          <img key={img.id} src={img.url} alt="" />
            <button onClick={() => this.moderateRecentlyModerated(img.id, "approved")}>Approve</button>
            <button onClick={() => this.moderateRecentlyModerated(img.id, "refused")}>Refuse</button>
          - {img.status ? img.status : "unmoderated"} by {img.moderator} at {img.updated_at}
          </div>
        )
        : <div>no recently moderated images found</div>
        }
      </div>
    )
  }
}

export default Moderator
