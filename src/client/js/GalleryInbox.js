import React, { Component, PropTypes } from 'react'

class GalleryInbox extends Component {
  static get propTypes () {
    return {
      set: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired
      }).isRequired).isRequired
    }
  }

  render () {
    const cards = this.props.cards.map((card, i) => {
      return <img key={i} src={card.imageUrl} alt={card.artist} />
    })

    return (
      <div className='galleryinbox'>
        <h2>{this.props.set}</h2>
        {cards}
      </div>
    )
  }
}

export default GalleryInbox
