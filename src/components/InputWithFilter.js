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
                            onclick: () => {
                                // go to author.id
                            }
                        },
                        author.name
                    )
                )
            )
        ]
    )

// window.onclick = (event) => {
//     if (!(event.target.matches('.dropdownButton') || event.target.matches('#ddText') || event.target.matches('#ddIcon'))) {
//         const dropdowns = document.getElementsByClassName('dropdownContent')
//         for (let i = 0; i < dropdowns.length; i++) {
//             const openDropdown = dropdowns[i]
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show')
//             }
//         }
//         setIconDown()
//     }
// }
