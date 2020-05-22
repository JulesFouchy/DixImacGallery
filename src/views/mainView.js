import { h } from 'hyperapp'
import Header from './Header'
import AllAuthors from '../components/AllAuthors'
import { filterCardsByID, filterAuthorsByCardID, filterAuthorsByName } from '../helper/filter'
import Filter from './Filter'

export default state =>
    h('div', {}, [
        Header(),
        Filter({value: state.authorFilter}),
        state.cardIDFilter === ''
        ? AllAuthors({
            authors: filterAuthorsByName(state.authorsList, state.authorFilter),
            cards: state.cardsList,
        })
        : AllAuthors({
            authors: filterAuthorsByCardID(state.authorsList, state.cardIDFilter),
            cards: filterCardsByID(state.cardsList, state.cardIDFilter),
        })
    ])