import {h} from 'hyperapp'
import actions from '../actions/test.js'
import authorSection from '../components/authorSection'
import header from './header'

import cardRenderer from '../cardRenderer'
import eLoadAuthorsFromDB from '../actions/cards'

import Card from '../components/card'

export default state =>
    h('div', {
    }, [
        header(),
        h('p', {}, 'card src : ' + state.cardSrc0),
        h('div', {}, Object.entries(state.cardsList).map( kvPair => Card({
            card: kvPair[1],
            cardID: kvPair[0]
        }))),
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