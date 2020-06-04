import { h } from 'hyperapp'

export default (props) =>
    h('div',
        {
            class: 'dropdownList',
        },
        [
            h('input',
                {
                    class: 'dropdownInput',
                    //hidden: props.hidden,
                    onfocus: (state) => ({
                        ...state,
                        isAuthorInputFocused: true,
                    }),
                    // onblur: (state) => [
                    //     state,
                    //     // hide the list *after a little delay*
                    //     // because otherwise the button disappears before its onclick event is processed
                    //     [
                    //         (dispatch, props) => setTimeout(() => dispatch(props.action), props.interval),
                    //         {
                    //             action: (state) => ({
                    //                 ...state,
                    //                 isAuthorInputFocused: false,
                    //             }),
                    //             interval: 100,
                    //         }
                    //     ]
                    // ],
                    ...props.paramsObj,
                }
            ),
            h('div', 
            {
                class: 'dropdownContent' + (props.bShowDropdown ? ' showDropdown' : ''),
                id: 'myDropdown',
            },
                props.authors.map( author =>
                    h('div',
                        {
                            class: 'dropdownContentElement',
                            onclick: (state) => props.onClick({
                                ...state,
                                isAuthorInputFocused: false,
                            }, author)
                        },
                        author.name
                    )
                )
            )
        ]
    )