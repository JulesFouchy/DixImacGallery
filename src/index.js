// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//

import { state } from './state.js'
import mainView from './views/mainView.js'

import { app } from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"

import { ecFetchDatabase } from './actions/renderCards'

app(
    { 
        init: [
            state,
            ecFetchDatabase()
        ],
        view: mainView,
        node: document.body,
        middleware: logger
    }
)