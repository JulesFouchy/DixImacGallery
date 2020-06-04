import { h } from 'hyperapp'
import InputWithFilter from '../components/InputWithFilter'

const button_ResetFilter = () => h('button', 
    {
        onclick: (state) => ({
            ...state,
            authorFilter: '',
            cardIDFilter: '',
            showOnlyThisAuthor: null,
        })
    }, 
    'See the whole gallery')

const button_GoToGalleryOfAuthor = (author) => h('button', 
    {
        onclick: (state) => ({
            ...state,
            showOnlyThisAuthor: author.id,
            authorFilter: author.name,
            cardIDFilter: '',
        })
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
            onClick: (state, author) => ({
                    ...state,
                    showOnlyThisAuthor: author.id,
                    authorFilter: author.name,
            }),
        }),
        props.showOnlyThisAuthor !== null 
            && button_ResetFilter()
    ])
    : h('span', {}, [
        button_GoToGalleryOfAuthor(props.getArtistFromCardID(props.cardIDFilter)),
        button_ResetFilter(),
    ])