import {h} from 'hyperapp'
import actions from '../actions/test.js'
import authorSection from '../components/authorSection'
import header from './header'

import cardRenderer from '../cardRenderer'
import eLoadAuthorsFromDB from '../actions/cards'

export default state =>
    h('div', {
    }, [
        header(),
        h('p', {}, 'card src : ' + state.cardSrc0),
        h('div', {}, JSON.stringify(state.authorsList)),
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