import { h } from 'hyperapp'
import InputWithFilter from '../components/InputWithFilter'

const createAction_GoToGalleryOfAuthor = (author) => (state) => {
    window.history.pushState({}, null, '/?authorid='+author.id)
    return {
        ...state,
        showOnlyThisAuthor: author.id,
        authorFilter: '',
        cardIDFilter: '',
    }
}

const button_ResetFilter = () => h('button', 
    {
        onclick: (state) => {
            window.history.pushState({}, null, '/')
            return {
                ...state,
                authorFilter: '',
                cardIDFilter: '',
                showOnlyThisAuthor: null,
            }
        }
    }, 
    'See the whole gallery')

const button_GoToGalleryOfAuthor = (author) => h('button', 
    {
        onclick: createAction_GoToGalleryOfAuthor(author)
    }, 
    'Other cards from this artist')

export default (props) => props.cardIDFilter === ''
    ? h('span', {}, [
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
        props.showOnlyThisAuthor !== null 
            && button_ResetFilter()
    ])
    : h('span', {}, [
        button_GoToGalleryOfAuthor(props.getArtistFromCardID(props.cardIDFilter)),
        button_ResetFilter(),
    ])