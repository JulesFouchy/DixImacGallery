import { h } from 'hyperapp'
import Author from './author'
import Card from'./card'

export default props => {
    const bShowBig = (props.cards.length < 2 && props.bFilteringAuthors) || props.bFilteringCard

    return h('div', {class: 'authorSection'}, [
        Author(props.author, props.bWeAreOnAuthorsPage),
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