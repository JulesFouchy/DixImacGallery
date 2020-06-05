import { h } from 'hyperapp'
import Author from './Author'
import Card from'./Card'

export default props => {
    return h('div', {class: 'authorSection'}, [
        Author(props.author),
        h('div', {class: 'cardsList'}, 
            props.cards
                .sort( (a, b) => (new Date(b.card.date)) - (new Date(a.card.date)))
                .map( card => Card(card) )
        )
    ])
}