import { h } from 'hyperapp'
import AuthorSection from './AuthorSection'

export default (props) => h('div', {}, 
    Object.values(props.authors)
        .sort( (a, b) => (new Date(b.dateLatestRelease)) - (new Date(a.dateLatestRelease)))
        .map( author => AuthorSection({
            author,
            cards: author.cardIDs.map( id => ({
                card: props.cards[id],
                cardID: id,
            }))
        }))
)