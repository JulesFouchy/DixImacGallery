import { h } from 'hyperapp'
import InstaLogo from '../img/insta-logo.png'

export default link => 
    h('a', {
        href: link,
        class: 'icon',
    }, '🎨')