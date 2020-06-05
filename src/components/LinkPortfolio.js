import { h } from 'hyperapp'
import InstaLogo from '../img/insta-logo.png'

export default link => 
    h('a', {
        href: link,
    },
        h('span', {class: 'icon'}, '🎨')
        // h('img', {  
        //     src : InstaLogo,
        //     class: 'icon',
        //     alt: 'Instagram',
        // })
    )