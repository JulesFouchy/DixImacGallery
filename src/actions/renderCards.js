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
            cardIDs: author.cardIDs,
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

const renderAndSetSrc = (dispatch, card, cardID) => {
    cardRenderer(card)
        .then(src =>
            dispatch(aSetCardSrc, {cardID, src})
        )
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