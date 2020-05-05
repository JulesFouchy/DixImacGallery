export default {
    changeText: (state, event) => {
        console.log(event)
        return {
            ...state,
            text: state.text + 'a'
        }
    }
}