import { h } from 'hyperapp'
import { ecRenderAndSetSrc } from '../actions/renderCards'

export default (props) => h('span', {class: 'cardWrapper'}, 
    h('img', 
        {
            class: 'card',
            src: props.card.src
        }
    ),
    props.card.generationMethod !== 0
        && h('button', {onclick: state => [state, ecRenderAndSetSrc(props.card, props.cardID)]}, 'c')
)