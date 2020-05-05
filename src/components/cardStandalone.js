import { h } from 'hyperapp'
import author from './author'

export default props =>
    h('div', {class: 'card'}, [
        h('img', {src: props.src}),
        author(props.author)
    ])