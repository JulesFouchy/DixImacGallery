import { h } from 'hyperapp'
import resetFilter from '../actions/resetFilter'

export default (bTheresSomethingToReset) => h('header', {}, [
    h('h1', bTheresSomethingToReset ? {
        onclick: resetFilter,
        class: 'clickable'
    } : {}, 'DixImac Gallery'),
    h('a', {href: 'http://diximac.herokuapp.com/'}, '▷ Play DixImac ◁')
])