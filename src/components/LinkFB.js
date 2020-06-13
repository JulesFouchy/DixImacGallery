import { h } from 'hyperapp'
import FBLogo from '../img/fb-logo.png'

export default link => 
    h('a', {
        href: link,
    },
        h('img', {  
            src : FBLogo,
            class: 'icon',
            alt: 'Facebook',
            title: 'Facebook',
        })
    )