import { h } from 'hyperapp'
import Header from './Header'
import AllAuthors from '../components/AllAuthors'
import { filterCardsByID, filterAuthorsByCardID, filterAuthorsByName, filterAuthorsByID } from '../helper/filter'
import Filter from './Filter'
import objToArray from '../helper/objToArray'
import kvToObjWithID from '../helper/kvToObjWithID'
import getBgDaytimeClass from '../helper/getBgDaytimeClass'

export default state =>
    h('div', {
        id: 'main',
        class: getBgDaytimeClass(),
        onclick: (state, event) => {
            const newState = {...state}
            const myClass = event.target.classList[0]
            if (myClass !== 'dropdownInput' && myClass !== 'dropdownContentElement') {
                newState.isAuthorInputFocused = false
            }
            return newState
        }
    }, [
        Header(state.showOnlyThisAuthor !== null || state.cardIDFilter !== ''),
        Filter(
        {
            authorFilter: state.authorFilter,
            cardIDFilter: state.cardIDFilter,
            getArtistFromCardID: (cardID) => kvToObjWithID(
                Object.entries(state.authorsList)
                .find(kv => kv[1].cardIDs.includes(cardID))
            ),
            authors: objToArray(filterAuthorsByName(state.authorsList, state.authorFilter))
                .sort( (a, b) => (new Date(b.dateLatestRelease)) - (new Date(a.dateLatestRelease))),
            isAuthorInputFocused: state.isAuthorInputFocused,
            bButtonBackToGallery: state.showOnlyThisAuthor !== null || state.cardIDFilter !== ''
        }),
        state.cardIDFilter !== ''
        ? AllAuthors({
            authors: filterAuthorsByCardID(state.authorsList, state.cardIDFilter),
            cards: filterCardsByID(state.cardsList, state.cardIDFilter),
            bFilteringCard: state.cardIDFilter !== '',
            bFilteringAuthors: state.showOnlyThisAuthor !== null,
            showOnlyThisAuthor: state.showOnlyThisAuthor,
        })
        : state.showOnlyThisAuthor !== null
        ? AllAuthors({
            authors: filterAuthorsByID(state.authorsList, state.showOnlyThisAuthor),
            cards: state.cardsList,
            bFilteringCard: state.cardIDFilter !== '',
            bFilteringAuthors: state.showOnlyThisAuthor !== null,
            showOnlyThisAuthor: state.showOnlyThisAuthor,
        })
        : AllAuthors({
            authors: state.authorsList,
            cards: state.cardsList,
            bFilteringCard: state.cardIDFilter !== '',
            bFilteringAuthors: state.showOnlyThisAuthor !== null,
            showOnlyThisAuthor: state.showOnlyThisAuthor,
        })
    ])