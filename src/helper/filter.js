const filterCardsByID = (cardsObj, id) => {
    const o = {}
    o[id] = cardsObj[id]
    return o
}

const filterAuthorsByCardID = (authorsObj, id) => {
    const authorID = Object.entries(authorsObj).find(kvPair => kvPair[1].cardIDs.includes(id))[0]
    const o = {}
    o[authorID] = authorsObj[authorID]
    o[authorID].cardIDs = o[authorID].cardIDs.filter( cardID => cardID === id )
    return o
}

module.exports = {
    filterCardsByID,
    filterAuthorsByCardID,
}