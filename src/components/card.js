import { h } from 'hyperapp'
import { ecRenderAndSetSrc } from '../actions/renderCards'

export default (props) => h('div', {class: 'cardWrapper'}, [
        h('img',
            {
                class: 'card',
                src: props.card.src
            }
        ),
        props.card.generationMethod !== 0
            && h('button', {
                class: 'regenerateButton',
                onclick: state => [state, ecRenderAndSetSrc(props.card, props.cardID)]
            }, 'This card is random, press to see another version')
    ]
)