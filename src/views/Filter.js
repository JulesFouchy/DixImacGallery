import { h } from 'hyperapp'

export default props => h('input', {
    oninput: (state, event) => ({ ...state, authorFilter: event.target.value }),
    placeholder: 'Filter authors by name'
})