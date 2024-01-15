import { h } from 'hyperapp'
import resetFilter from '../actions/resetFilter'

const bold = (text) => h('b', {}, text)

export default (bTheresSomethingToReset) => h('header', {}, [
    h('h1', bTheresSomethingToReset ? {
        onclick: resetFilter,
        class: 'clickable'
    } : {}, 'DixImac Gallery'),
    h('a', {href: 'https://diximac.onrender.com/', id: 'linkToDiximac'}, [bold('▷'), ' Play DixImac ', bold('◁')]) // ▶ ◀
])