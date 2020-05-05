import {h} from 'hyperapp'
import actions from '../actions/test.js'
import cardStandalone from '../components/cardStandalone'
import header from './header'

export default state =>
    h('div', {}, [
        header(),
        cardStandalone({
            src: 'http://diximac.herokuapp.com/client/cards/ourCards/JulesFouchy_PetitesPlanetes.png',
            author: {
                name: 'Jules Fouchy',
                link: 'https://julesfouchy.github.io/MyProjectsOverview/'
            }
        })
    ])