import fetch from 'node-fetch'

const API = 'http://api.deckbrew.com/mtg/cards'

function getPerfectMatchData (json, cardname) {
  return json.filter((data) => data.name.toUpperCase() === cardname.toUpperCase())[0]
}

function fetchEditionData (cardname) {
  return new Promise((resolve, reject) => {
    fetch(`${API}?name=${cardname}`)
      .then((res) => res.json())
      .then((json) => {
        const { editions } = getPerfectMatchData(json, cardname)
        const editionData = {}

        if (!editions) {
          return reject(new Error(`InvalidCardname ${cardname}`))
        }

        for (let i in editions) {
          const { set, image_url, artist } = editions[i]
          console.log(set, image_url, artist)
          editionData[set] = editionData[set] || []
          editionData[set] = [...editionData[set], {
            imageUrl: image_url,
            artist
          }]
        }

        resolve(editionData)
      })
  })
}

export default fetchEditionData
