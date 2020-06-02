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
                    onblur: (state) => ({
                        ...state,
                        isAuthorInputFocused: false,
                    }),
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
                            onclick: (state) => props.onClick(state, author)
                        },
                        author.name
                    )
                )
            )
        ]
    )

window.onclick = (event) => console.log(event.target)
