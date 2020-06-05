import cardRenderer from '../helper/cardRenderer'

const eFetchJSONData = (dispatch, options) => {
    fetch(options.url)
        .then(response => response.json())
        .then(data => dispatch(options.onresponse, data))
        .catch(() => dispatch(options.onresponse, {}))
}

const ecFetchDatabase = () => [
    eFetchJSONData, // Fetch Cards
    {
        url: `https://diximac.herokuapp.com/api/cards`,
        onresponse: aParseAndSetCardsListFromDB,
    }
]

const aParseAndSetCardsListFromDB = (state, data) => [
    ({
        ...state,
        cardsList: data.reduce( (o, card) => ((o[card._id] = {
            authorID: card.authorID,
            fileName: card.fileName,
            fileFolder: card.fileFolder,
            generationMethod: card.generationMethod,
            src: '',
            date: card.date,
        }), o), {})
    }),
    ecFetchAuthors()
]

const ecFetchAuthors = () => [
    eFetchJSONData,
    {
        url: `https://diximac.herokuapp.com/api/authors`,
        onresponse: aParseAndSetAuthorsListFromDB,
    }
]

const aParseAndSetAuthorsListFromDB = (state, data) => [
    {
        ...state,
        authorsList: data.reduce( (o, author) => ((o[author._id] = {
            name: author.name,
            link: author.link,
            linkInsta: author.linkInsta,
            cardIDs: author.cardIDs,
            dateLatestRelease: author.dateLatestRelease,
        }), o), {})
    },
    [
        eRenderCards,
        {
            cardsList: Object.entries(state.cardsList)
        }
    ]
]

const eRenderCards = (dispatch, options) => {
    options.cardsList.forEach( kvPair => {
        renderAndSetSrc(dispatch, kvPair[1], kvPair[0])
    })
}

const renderAndSetSrc = async (dispatch, card, cardID) => {
    try {
        const src = await cardRenderer(card)
        dispatch(aSetCardSrc, {cardID, src})
    }
    catch (err) {
        console.log('ERR WHILE RENDERING CARD')
        console.log(err)
        await setTimeout(renderAndSetSrc(dispatch, card, cardID), 1000)
    }
}

const aSetCardSrc = (state, props) => ({
    ...state,
    cardsList: {
        ...state.cardsList,
        [props.cardID]: {
            ...state.cardsList[props.cardID],
            src: props.src
        }
    }
})

// To set the src of only one card at a time
const ecRenderAndSetSrc = (card, cardID) => [
    (dispatch, options) => renderAndSetSrc(dispatch, options.card, options.cardID),
    {
        card,
        cardID
    }
]

// EXPORTS
module.exports = {
    ecFetchDatabase,
    ecRenderAndSetSrc,
}