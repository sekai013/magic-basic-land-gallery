import React, { Component, PropTypes } from 'react'
import GalleryInbox from './GalleryInbox.js'
import fetchEditionData from './lib/fetchEditionData.js'

class Gallery extends Component {
  static get propTypes () {
    const BasicLandTypes = ['plains', 'island', 'swamp', 'mountain', 'forest']
    return {
      params: PropTypes.shape({
        type: PropTypes.oneOf(BasicLandTypes).isRequired
      }).isRequired
    }
  }

  componentWillMount () {
    this.setState({ isLoading: true })
    fetchEditionData(this.props.params.type)
      .then((editionData) => {
        this.setState({
          editionData,
          isLoading: false
        })
        console.log(editionData)
      })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ isLoading: true })
    fetchEditionData(nextProps.params.type)
      .then((editionData) => {
        this.setState({
          editionData,
          isLoading: false
        })
      })
  }

  render () {
    if (this.state.isLoading) {
      return <p>Now Loading...</p>
    }

    const inboxes = Object
                      .keys(this.state.editionData)
                      .map((set, i) => {
                        return <GalleryInbox
                                 key={i}
                                 set={set}
                                 cards={this.state.editionData[set]} />
                      })

    return (
      <div className='gallery'>
        {inboxes}
      </div>
    )
  }
}

export default Gallery
