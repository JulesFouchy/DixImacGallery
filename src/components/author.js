import { h } from 'hyperapp'
import createAction_GoToGalleryOfAuthor from '../actions/GoToGalleryOfAuthor'
import LinkPortfolio from './LinkPortfolio'
import LinkInsta from './LinkInsta'
import LinkFB from './LinkFB'

const WithLinkToAuthor = (authorName, authorID) => {
    return h('span', {
        class: 'clickable',
        onclick: createAction_GoToGalleryOfAuthor(authorID)
    }, authorName)
}

export default author => {
    return h('div', {class: 'authorWrapper'}, [
        h('h2', {class: 'author'}, [
            WithLinkToAuthor(author.name, author.id),
            author.link       && LinkPortfolio(author.link),
            author.linkInsta  && LinkInsta(author.linkInsta),
            author.linkInsta2 && LinkInsta(author.linkInsta2),
            author.linkFB     && LinkFB(author.linkFB),
        ]),
    ])
}