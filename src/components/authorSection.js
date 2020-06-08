import { h } from 'hyperapp'
import Author from './Author'
import Card from'./Card'

export default props => {
    const bShowBig = (props.cards.length < 2 && props.bFilteringAuthors) || props.bFilteringCard

    return h('div', {class: 'authorSection' + (bShowBig ? ' withBG' : '')}, [
        Author(props.author),
        h('div', {class: 'cardsList'}, 
            props.cards
                .sort( (a, b) => (new Date(b.card.date)) - (new Date(a.card.date)))
                .map( card => Card({
                    ...card,
                    bFilteringCard: props.bFilteringCard,
                    bShowBig,
                }) )
        )
    ])
}