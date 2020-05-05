import { h } from 'hyperapp'

export default props => {
    console.log(props)
    return h('div', {class: 'author'}, [
        h('p', {class: 'name'}, props.name),
        h('a', {href: props.link}, props.link)
    ])
}