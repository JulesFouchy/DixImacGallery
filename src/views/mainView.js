import { h } from 'hyperapp'
import header from './header'
import AllAuthors from '../components/AllAuthors'
import { filterCardsByID, filterAuthorsByCardID } from '../helper/filter'

export default state =>
    h('div', {}, [
        header(),
        state.cardIDFilter === ''
        ? AllAuthors({
            authors: state.authorsList,
            cards: state.cardsList,
        })
        : AllAuthors({
            authors: filterAuthorsByCardID(state.authorsList, state.cardIDFilter),
            cards: filterCardsByID(state.cardsList, state.cardIDFilter),
        })
    ])