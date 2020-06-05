import { h } from 'hyperapp'
import Header from './Header'
import AllAuthors from '../components/AllAuthors'
import { filterCardsByID, filterAuthorsByCardID, filterAuthorsByName, filterAuthorsByID } from '../helper/filter'
import Filter from './Filter'
import objToArray from '../helper/objToArray'
import kvToObjWithID from '../helper/kvToObjWithID'

export default state =>
    h('div', {
        id: 'main',
        onclick: (state, event) => {
            const newState = {...state}
            const myClass = event.target.classList[0]
            if (myClass !== 'dropdownInput' && myClass !== 'dropdownContentElement') {
                newState.isAuthorInputFocused = false
            }
            return newState
        }
    }, [
        Header(),
        Filter(
        {
            authorFilter: state.authorFilter,
            cardIDFilter: state.cardIDFilter,
            getArtistFromCardID: (cardID) => kvToObjWithID(
                Object.entries(state.authorsList)
                .find(kv => kv[1].cardIDs.includes(cardID))
            ),
            authors: objToArray(filterAuthorsByName(state.authorsList, state.authorFilter)),
            isAuthorInputFocused: state.isAuthorInputFocused,
            showOnlyThisAuthor: state.showOnlyThisAuthor
        }),
        state.cardIDFilter !== ''
        ? AllAuthors({
            authors: filterAuthorsByCardID(state.authorsList, state.cardIDFilter),
            cards: filterCardsByID(state.cardsList, state.cardIDFilter),
        })
        : state.showOnlyThisAuthor !== null
        ? AllAuthors({
            authors: filterAuthorsByID(state.authorsList, state.showOnlyThisAuthor),
            cards: state.cardsList,
        })
        : AllAuthors({
            authors: state.authorsList,
            cards: state.cardsList,
        })
    ])