import { h } from 'hyperapp'
import AuthorSection from './AuthorSection'

export default (props) => h('div', {}, 
    Object.values(props.authors).map( author => AuthorSection({
        author: {
            name: author.name,
            link: author.link,
        },
        cards: author.cardIDs.map( id => ({
            card: props.cards[id],
            cardID: id,
        }))
    }))
)