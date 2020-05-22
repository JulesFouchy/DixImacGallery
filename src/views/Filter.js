import { h } from 'hyperapp'

export default () => h('input', {
    oninput: (state, event) => ({ ...state, authorFilter: event.target.value }),
    placeholder: 'Filter authors by name'
})