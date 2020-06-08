import { h } from 'hyperapp'

export default () => h('header', {}, [
    h('h1', {}, 'DixImac Gallery'),
    h('a', {href: 'http://diximac.herokuapp.com/'}, 'Play DixImac')
])