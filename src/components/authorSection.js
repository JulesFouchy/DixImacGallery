import { h } from 'hyperapp'
import author from './author'
import card from'./card'

export default props => {
    return h('div', {class: 'authorSection'}, [
        author(props.author),
        //...props.cards.map( cardData => card(cardData) )
    ])
}