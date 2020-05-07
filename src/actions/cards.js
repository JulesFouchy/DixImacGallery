// import {request} from "@hyperapp/http"

const eFetchJSONData = (dispatch, options) => {
    fetch(options.url)
        .then(response => response.json())
        .then(data => dispatch(options.onresponse, data))
        .catch(() => dispatch(options.onresponse, {}))
}

export default () => [ // ecFetchCards
    eFetchJSONData,
    {
        url: `http://diximac.herokuapp.com/api/cards`,
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
        }), o), {})
    }),
    ecFetchAuthors()
]

const ecFetchAuthors = () => [
    eFetchJSONData,
    {
        url: `http://diximac.herokuapp.com/api/authors`,
        onresponse: aParseAndSetAuthorsListFromDB,
    }
]

const aParseAndSetAuthorsListFromDB = (state, data) => ({
    ...state,
    authorsList: data.reduce( (o, author) => ((o[author._id] = {
        name: author.name,
        link: author.link,
        cardIDs: author.cardIDs,
    }), o), {})
})

// const aSetCardSrc = (state, props) => ({
//     ...state,
//     authorsList: [
//         ...state.authorsList,
//         [0]: 'jules'
//     ]
// })

const eComputeCardSrd = (dispatch, options) => {

}

const aLoadCardRenderInfoFromDB = (state, cardID) => [
    state,
    [
        request,
        {
            url: `http://diximac.herokuapp.com/api/cardRenderInfo/${cardID}`,
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