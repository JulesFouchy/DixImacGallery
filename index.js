import {state} from './src/state.ts'
import actions from './src/actions/test.js'
import view from './src/view/view.ts'

import {app} from 'hyperapp'
import hyperappLogger from './lib/hyperappLogger'

app(
    { 
        init: state,
        view,
        node: document.body
    },
    hyperappLogger(process.env.NODE_ENV==='development')
)