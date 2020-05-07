// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//

import {state} from './src/state.js'
import actions from './src/actions/test.js'
import view from './src/view/view.js'

import {app} from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"

import ecFetchDatabase from './src/actions/cards'

app(
    { 
        init: [
            state,
            ecFetchDatabase()
        ],
        view,
        node: document.body,
        middleware: logger
    }
)