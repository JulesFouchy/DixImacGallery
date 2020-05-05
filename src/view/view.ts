import {h} from 'hyperapp'
import actions from '../actions/test.js'
import authorSection from '../components/authorSection'
import header from './header'

export default state =>
    h('div', {}, [
        header(),
        authorSection({
            author: {
                name: 'Jules Fouchy',
                link: 'https://julesfouchy.github.io/MyProjectsOverview/'
            },
            cards: [
                {
                    src: 'http://diximac.herokuapp.com/client/cards/ourCards/JulesFouchy_PetitesPlanetes.png',
                },
                {
                    src: 'http://diximac.herokuapp.com/client/cards/originalCards/1.jpg',
                },
            ],
        })
    ])