import { h } from 'hyperapp'
import InputWithFilter from '../components/InputWithFilter'
import partsOfStateToSaveInHistory from '../helper/partsOfStateToSaveInHistory'
import resetFilter from '../actions/resetFilter'

const createAction_GoToGalleryOfAuthor = (author) => (state) => {
    const newState = {
        ...state,
        showOnlyThisAuthor: author.id,
        authorFilter: '',
        cardIDFilter: '',
    }
    window.history.pushState(partsOfStateToSaveInHistory(newState), '', window.location.pathname+'?authorid='+author.id)
    return newState
}

const button_ResetFilter = () => h('button', 
    {
        onclick: resetFilter,
    }, 
    'See the whole gallery')

export default (props) => h('div', {id: 'filterSection'}, [
        InputWithFilter(
        {
            paramsObj: {
                oninput: (state, event) => ({ ...state, authorFilter: event.target.value }),
                placeholder: 'Filter authors by name',
                value: props.authorFilter,
            },
            authors: props.authors,
            bShowDropdown: props.isAuthorInputFocused,
            onClick: (state, author) => createAction_GoToGalleryOfAuthor(author)(state),
        }),
        props.bButtonBackToGallery
            && button_ResetFilter()
    ])