import kvarrToObj from './kvarrToObj'

const filterCardsByID = (cardsObj, id) => {
    const o = {}
    o[id] = cardsObj[id]
    return o
}

const filterAuthorsByCardID = (authorsObj, id) => {
    const authorIDSearch = Object.entries(authorsObj).find(kvPair => kvPair[1].cardIDs.includes(id))
    if (authorIDSearch !== undefined) {
        const authorID = authorIDSearch[0]
        const o = {}
        o[authorID] = {...authorsObj[authorID]}
        o[authorID].cardIDs = o[authorID].cardIDs.filter( cardID => cardID === id )
        return o
    }
    return {}
}

const filterAuthorsByName = (authorsObj, nameStr) => {
    const nameStrUp = nameStr.toUpperCase()
    const arrFiltered = Object.entries(authorsObj).filter(
        kv => kv[1].name.toUpperCase().includes(nameStrUp)
    )
    return kvarrToObj(arrFiltered)
}

const filterAuthorsByID = (authorsObj, id) => Object.entries(authorsObj)
    .filter(
        kv => kv[0] === id
    )
    .map( kv => ({
        id: kv[0],
        ...kv[1]
    }))

module.exports = {
    filterCardsByID,
    filterAuthorsByCardID,
    filterAuthorsByName,
    filterAuthorsByID,
}