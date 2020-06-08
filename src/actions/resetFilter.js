import partsOfStateToSaveInHistory from '../helper/partsOfStateToSaveInHistory'

export default (state) => {
    const newState = {
        ...state,
        showOnlyThisAuthor: null,
        authorFilter: '',
        cardIDFilter: '',
    }
    window.history.pushState(partsOfStateToSaveInHistory(newState), '', window.location.pathname)
    return newState
}