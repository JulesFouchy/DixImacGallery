// import {request} from "@hyperapp/http"

const fetchJSONData = (dispatch, options) => {
    fetch(options.url)
        .then(response => response.json())
        .then(data => dispatch(options.onresponse, data))
        .catch(() => dispatch(options.onresponse, {}))
  }

export default () => [
    fetchJSONData,
    {
        url: `http://diximac.herokuapp.com/api/authors`,
        onresponse: (state, data) => ({
                ...state,
                authorsList: data
            }),
    }
]

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