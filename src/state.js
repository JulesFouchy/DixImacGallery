// export type State = {
//     text: string,
//     cardSrc0: string,
//     cardsList: Object,
//     authorsList: Object,
// }

//export const state:State = {
export default (cardIDFilter) => ({
    cardsList: {},
    authorsList: {},
    cardIDFilter: cardIDFilter,
    authorFilter: '',
    isAuthorInputFocused: false,
    showOnlyThisAuthor: null,
})