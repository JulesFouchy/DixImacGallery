import { h } from 'hyperapp'

export default (props) => h('div', {}, [
    h('input',
    {
        oninput: (state, event) => ({ ...state, authorFilter: event.target.value }),
        placeholder: 'Filter authors by name',
        value: props.value,
    }),
    h('button', 
    {
        onclick: (state) => ({...state, authorFilter: '', cardIDFilter: ''})
    }, 'Reset filters')
])