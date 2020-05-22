// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//

import genState from './state.js'
import mainView from './views/mainView.js'

import { app } from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"

import { ecFetchDatabase } from './actions/renderCards'

app(
    { 
        init: [
            genState(window.location.search.substr(1)),
            ecFetchDatabase()
        ],
        view: mainView,
        node: document.body,
        middleware: logger
    }
)