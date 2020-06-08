import { h } from 'hyperapp'
import LinkPortfolio from './LinkPortfolio'
import LinkInsta from './LinkInsta'
import LinkFB from './LinkFB'

export default author => {
    return h('div', {class: 'authorWrapper'}, [
        h('h2', {class: 'author'}, [
            author.name,
            author.link && LinkPortfolio(author.link),
            author.linkInsta && LinkInsta(author.linkInsta),
            author.linkFB && LinkFB(author.linkFB),
        ]),
    ])
}