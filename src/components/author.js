import { h } from 'hyperapp'
import LinkInsta from './LinkInsta'
import LinkPortfolio from './LinkPortfolio'

export default author => {
    return h('div', {class: 'author'}, [
        h('h2', {class: 'name'}, author.name),
        author.link && LinkPortfolio(author.link),
        author.linkInsta && LinkInsta(author.linkInsta),
    ])
}