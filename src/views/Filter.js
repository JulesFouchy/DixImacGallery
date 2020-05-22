import { h } from 'hyperapp'

export default (props) => h('div', {}, [
    props.cardIDFilter === ''
    ? h('span', {}, [
        h('input',
        {
            oninput: (state, event) => ({ ...state, authorFilter: event.target.value }),
            placeholder: 'Filter authors by name',
            value: props.authorFilter,
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
])