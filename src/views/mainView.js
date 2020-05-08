import { h } from 'hyperapp'
import header from './header'
import AllAuthors from '../components/AllAuthors'

export default state =>
    h('div', {}, [
        header(),
        AllAuthors({
            authors: state.authorsList,
            cards: state.cardsList,
        })
    ])