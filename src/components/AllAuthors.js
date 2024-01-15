import { h } from 'hyperapp'
import AuthorSection from './authorSection'

export default (props) => h('div', {}, 
    Object.values(props.authors)
        .sort( (a, b) => (new Date(b.dateLatestRelease)) - (new Date(a.dateLatestRelease)))
        .map( author => AuthorSection({
            author,
            bWeAreOnAuthorsPage: author.id === props.showOnlyThisAuthor,
            cards: author.cardIDs.map( id => ({
                card: props.cards[id],
                cardID: id,
            })),
            bFilteringCard: props.bFilteringCard,
            bFilteringAuthors: props.bFilteringAuthors,
        }))
)