// import async / await
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//

import genState from './state.js'
import mainView from './views/mainView.js'

import { app } from 'hyperapp'
import logger from "hyperapp-v2-basiclogger"

import { ecFetchDatabase } from './actions/renderCards'

const tryFind = (identifier) => {
    const search = window.location.search
    const opt = identifier+'='
    let begin = search.indexOf(opt)
    if (begin !== -1) begin += opt.length
    const end = search.indexOf('&')
    return begin === - 1 ? ''
                    : end === - 1 ? search.substring(begin)
                      : search.substring(begin, end)
}

const cardID = tryFind('cardid')
const authorID = tryFind('authorid')

app(
    { 
        init: [
            genState(cardID, authorID),
            ecFetchDatabase()
        ],
        view: mainView,
        node: document.body,
        middleware: logger
    }
)