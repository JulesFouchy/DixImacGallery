import { h } from 'hyperapp'
import author from './Author'
import card from'./Card'

export default props => {
    return h('div', {class: 'authorSection'}, [
        author(props.author),
        //...props.cards.map( cardData => card(cardData) )
    ])
}