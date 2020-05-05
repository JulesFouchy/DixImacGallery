import { h } from 'hyperapp'

export default props => {
    return h('img', 
        {
            class: 'card',
            src: props.src
        })
}