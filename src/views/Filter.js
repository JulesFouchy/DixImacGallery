import { h } from 'hyperapp'
import InputWithFilter from '../components/InputWithFilter'
import resetFilter from '../actions/resetFilter'
import createAction_GoToGalleryOfAuthor from '../actions/GoToGalleryOfAuthor'

const button_ResetFilter = () => h('button', 
    {
        onclick: resetFilter,
        title: 'Back to gallery',
    }, 
    '🡄')

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
            onClick: (state, author) => createAction_GoToGalleryOfAuthor(author.id)(state),
        }),
        props.bButtonBackToGallery
            && button_ResetFilter()
    ])