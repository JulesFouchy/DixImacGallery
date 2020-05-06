import {h} from 'hyperapp'
import actions from '../actions/test.js'
import authorSection from '../components/authorSection'
import header from './header'
import {request} from "@hyperapp/http"

import cardRenderer from '../cardRenderer'

const HttpTestRequest = state => [
    state,
    request({
      url: 'http://localhost:2000/api/cardRenderInfo/5eb2822fb112fb5cc4f4eb73',
      action: (state, data) => { cardRenderer(JSON.parse(data)).then(data => console.log(data)) ; return {...state, cardSrc0: ''}},
      error: () => console.log('ERRORROEORORO')
    })
  ]

export default state =>
    h('div', {
        oncreate: HttpTestRequest
    }, [
        header(),
        h('button', {onclick: HttpTestRequest}, 'BOUTON'),
        h('p', {}, 'card src : ' + state.cardSrc0),
        authorSection({
            author: {
                name: 'Jules Fouchy',
                link: 'https://julesfouchy.github.io/MyProjectsOverview/'
            },
            cards: [
                {
                    src: state.cardSrc0,
                },
                {
                    src: 'http://diximac.herokuapp.com/client/cards/originalCards/1.jpg',
                },
            ],
        })
    ])