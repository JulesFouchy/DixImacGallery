import cardRenderer from '../cardRenderer'

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

const renderAndSetSrc = (dispatch, card, cardID) => {
    cardRenderer(card)
        .then(src =>
            dispatch(aSetCardSrc, {
                cardID: cardID,
                src: src,
            })
        )
}

const ecRenderAndSetSrc = (card, cardID) => [
    (dispatch, options) => renderAndSetSrc(dispatch, options.card, options.cardID),
    {
        card,
        cardID
    }
]

const eRenderCards = (dispatch, options) => {
    options.cardsList.forEach( kvPair => {
        const cardID = kvPair[0]
        const card = kvPair[1]
        renderAndSetSrc(dispatch, card, cardID)
    })
    // fetch(options.url)
    //     .then(cardSrc => console.log('cardSrc ' + cardSrc))
    //     // .then(data => dispatch(options.onresponse, data))
    //     .catch(() => dispatch(aSetCardSrc, {cardID: id, src: ''}))
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

const eComputeCardSrd = (dispatch, options) => {

}

const aLoadCardRenderInfoFromDB = (state, cardID) => [
    state,
    [
        request,
        {
            url: `https://diximac.herokuapp.com/api/cardRenderInfo/${cardID}`,
            action: (state, data) => { cardRenderer(JSON.parse(data)).then(data => console.log(data)) ; return {...state, cardSrc0: ''}},
            error: () => console.log('ERRORROEORORO')
        }
    ]
]

const aRenderCard = (state, cardRenderInfoAsString) => [
    state,
    [

    ]
]

// module.exports = {
//     eLoadAuthorsFromDB,
// }

module.exports = {
    ecFetchDatabase,
    ecRenderAndSetSrc,
}