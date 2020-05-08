import { h } from 'hyperapp'
import Author from './Author'
import Card from'./Card'

export default props => {
    return h('div', {class: 'authorSection'}, [
        Author(props.author),
        props.cards.map( card => Card(card) )
    ])
}