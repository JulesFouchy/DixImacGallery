import { h } from 'hyperapp'
import { ecRenderAndSetSrc } from '../actions/renderCards'
import partsOfStateToSaveInHistory from '../helper/partsOfStateToSaveInHistory'

const createAction_GoToCard = (cardID) => (state) => {
    const newState = {
        ...state,
        showOnlyThisAuthor: null,
        authorFilter: '',
        cardIDFilter: '' + cardID,
    }
    window.history.pushState(partsOfStateToSaveInHistory(newState), '', window.location.pathname+'?cardid='+cardID)
    return newState
}

export default (props) => h('div', {class: 'cardWrapper'}, [
        h('img',
            {
                class: 'card' + (props.bFilteringCard ? ' bigCard' : ' clickable'),
                src: props.card.src,
                onclick: !props.bFilteringCard && createAction_GoToCard(props.cardID),
            }
        ),
        props.card.generationMethod !== 0
            && h('button', {
                class: 'regenerateButton',
                onclick: state => [state, ecRenderAndSetSrc(props.card, props.cardID)]
            }, 'This card is random, press to see another version')
    ]
)