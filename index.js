// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//

import {state} from './src/state.ts'
import actions from './src/actions/test.js'
import view from './src/view/view.ts'

import {app} from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"

import eLoadAuthorsFromDB from './src/actions/cards'

app(
    { 
        init: [
            state,
            eLoadAuthorsFromDB()
        ],
        view,
        node: document.body,
        middleware: logger
    }
)