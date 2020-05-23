// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//

import genState from './state.js'
import mainView from './views/mainView.js'

import { app } from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"

import { ecFetchDatabase } from './actions/renderCards'

const search = window.location.search
let begin = search.indexOf('cardid=')
if (begin !== -1) begin += 'cardid='.length
const end = search.indexOf('&')
const cardID = begin === - 1 ? ''
                : end === - 1 ? search.substring(begin)
                  : search.substring(begin, end)

app(
    { 
        init: [
            genState(cardID),
            ecFetchDatabase()
        ],
        view: mainView,
        node: document.body,
        middleware: logger
    }
)