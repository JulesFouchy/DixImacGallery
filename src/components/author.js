import { h } from 'hyperapp'
import LinkInsta from './LinkInsta'
import LinkPortfolio from './LinkPortfolio'

export default author => {
    return h('div', {class: 'author'}, [
        h('h2', {}, [
            author.name,
            author.linkInsta && LinkPortfolio(author.linkInsta),
            author.linkInsta && LinkInsta(author.linkInsta),
        ]),
    ])
}