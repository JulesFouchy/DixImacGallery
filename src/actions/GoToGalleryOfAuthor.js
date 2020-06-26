import partsOfStateToSaveInHistory from '../helper/partsOfStateToSaveInHistory'

export default (authorID) => (state) => {
    const newState = {
        ...state,
        showOnlyThisAuthor: authorID,
        authorFilter: '',
        cardIDFilter: '',
    }
    window.history.pushState(partsOfStateToSaveInHistory(newState), '', window.location.pathname+'?authorid='+authorID)
    return newState
}