import { h } from 'hyperapp'
import InputWithFilter from '../components/InputWithFilter'

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
                }),
        }),
        props.authorFilter !== '' && h('button', 
        {
            onclick: (state) => ({...state, authorFilter: '', cardIDFilter: ''})
        }, 'See the whole gallery')
    ])
    : h('span', {}, [
        h('button', {
            onclick: (state) => ({...state, authorFilter: props.getArtistFromCardID(props.cardIDFilter).name, cardIDFilter: ''})
        }, 'Other cards from this artist'),
        h('button', {
            onclick: (state) => ({...state, authorFilter: '', cardIDFilter: ''})
        }, 'See the whole gallery'),
    ])