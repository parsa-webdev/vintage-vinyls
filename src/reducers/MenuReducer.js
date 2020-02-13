// import uuid from 'uuid'

const initState = {
    menuItems: [
        {
            id: 11,
            img: 'pic1',
            item: 'The Madcap Laughs',
            released: '03 Jan 1970',
            label: 'Harvest ‎– SHVL 765',
            country: 'UK',
            price: '20',
            count: 1,
            insideCart: false,
            category: 'Syd Barret',
        },
        {
            id: 22,
            img: 'pic2',
            item: 'The Velvet Underground and Nico',
            released: '12 March 1967',
            label: 'Verve Records ‎– 823 290-1',
            country: 'US',
            price: '20',
            count: 1,
            insideCart: false,
            category: 'The Velvet Underground',
        },
        {
            id: 33,
            img: 'pic3',
            item: "The Freewheelin' Bob Dylan",
            released: '27 May 1963',
            label: 'Columbia',
            country: 'US',
            price: '30',
            count: 1,
            insideCart: false,
            category: 'Bob Dylan'
        },
        {
            id: 44,
            img: 'pic4',
            item: 'L.A. Woman',
            released: '19 April 1971',
            label: 'Elektra',
            country: 'US',
            price: '30',
            count: 1,
            insideCart: false,
            category: 'The Doors'
        },
        {
            id: 55,
            img: 'pic5',
            item: 'Rubber Soul',
            released: '3 December 1965',
            label: ' ‎Parlophone‎ ',
            country: 'UK',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'The Beatles'
        },
        {
            id: 66,
            img: 'pic6',
            item: 'The Stooges',
            released: '5 August 1969',
            label: 'Elektra',
            country: 'US',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'The Stooges'
        },
        {
            id: 77,
            img: 'pic7',
            item: 'Desertshore',
            released: 'December 1970',
            label: '28:51',
            country: 'US',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'Nico'
        },
        {
            id: 88,
            img: 'pic8',
            item: 'Kaleidoscope',
            released: '1 August 1980',
            label: 'PVC Records',
            country: 'UK',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'Siouxie and The Bansees'
        },
        {
            id: 99,
            img: 'pic9',
            item: 'Return of the Giant Slits',
            released: '1081',
            label: 'CBS Records International',
            country: 'UK',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'The Slits'
        },
    ],
    cart: [],
    filteredMenu: [
        {
            id: 11,
            img: 'pic1',
            item: 'The Madcap Laughs',
            released: '03 Jan 1970',
            label: 'Harvest ‎– SHVL 765',
            country: 'UK',
            price: '20',
            count: 1,
            insideCart: false,
            category: 'Syd Barret',
        },
        {
            id: 22,
            img: 'pic2',
            item: 'The Velvet Underground and Nico',
            released: '12 March 1967',
            label: 'Verve Records ‎– 823 290-1',
            country: 'US',
            price: '20',
            count: 1,
            insideCart: false,
            category: 'The Velvet Underground',
        },
        {
            id: 33,
            img: 'pic3',
            item: "The Freewheelin' Bob Dylan",
            released: '27 May 1963',
            label: 'Columbia',
            country: 'US',
            price: '30',
            count: 1,
            insideCart: false,
            category: 'Bob Dylan'
        },
        {
            id: 44,
            img: 'pic4',
            item: 'L.A. Woman',
            released: '19 April 1971',
            label: 'Elektra',
            country: 'US',
            price: '30',
            count: 1,
            insideCart: false,
            category: 'The Doors'
        },
        {
            id: 55,
            img: 'pic5',
            item: 'Rubber Soul',
            released: '3 December 1965',
            label: ' ‎Parlophone‎ ',
            country: 'UK',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'The Beatles'
        },
        {
            id: 66,
            img: 'pic6',
            item: 'The Stooges',
            released: '5 August 1969',
            label: 'Elektra',
            country: 'US',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'The Stooges'
        },
        {
            id: 77,
            img: 'pic7',
            item: 'Desertshore',
            released: 'December 1970',
            label: '28:51',
            country: 'US',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'Nico'
        },
        {
            id: 88,
            img: 'pic8',
            item: 'Kaleidoscope',
            released: '1 August 1980',
            label: 'PVC Records',
            country: 'UK',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'Siouxie and The Bansees'
        },
        {
            id: 99,
            img: 'pic9',
            item: 'Return of the Giant Slits',
            released: '1081',
            label: 'CBS Records International',
            country: 'UK',
            price: '40',
            count: 1,
            insideCart: false,
            category: 'The Slits'
        }
    ]
}

const MenuReducer = (state = initState, action) => {

    if (action.type === 'CHANGE_CATEGORY') {
        if (action.category === 'All Artists') {
            return {
                menuItems: state.filteredMenu,
                filteredMenu: state.filteredMenu,
                cart: state.cart
            }
        } else {
            const newMenu = state.filteredMenu.filter(i => i.category === action.category)
            return {
                menuItems: newMenu,
                filteredMenu: state.filteredMenu,
                cart: state.cart
            }
        }

    }
    if (action.type === 'ADD_TO_CART') {
        const updatedMenu = state.menuItems.map((i) => {
            return i.id === action.newItem.id ? { ...i, insideCart: true } : i
        })
        const oupdatedMenu = state.filteredMenu.map((i) => {
            return i.id === action.newItem.id ? { ...i, insideCart: true } : i
        })

        const inCart = [action.newItem, ...state.cart]
        return {

            menuItems: updatedMenu,
            filteredMenu: oupdatedMenu,
            cart: inCart
        }

    }
    if (action.type === 'ADD_TO_COUNT') {

        const updatedCart = state.cart.map(i => i.id === action.id ? { ...i, count: ((action.count) + 1) } : i)

        return {
            menuItems: state.menuItems,
            cart: updatedCart,
            filteredMenu: state.filteredMenu,
        }

    }
    if (action.type === 'REMOVE_FROM_COUNT') {

        const updatedCart = state.cart.map(i => i.id === action.id ? { ...i, count: ((action.count > 1 ? action.count - 1 : 1)) } : i)


        return {
            menuItems: state.menuItems,
            cart: updatedCart,
            filteredMenu: state.filteredMenu,
            category: state.category
        }

    }
    if (action.type === 'REMOVE_FROM_CART') {

        const updatedCart = state.cart.filter(i => i.id !== action.id)

        const updatedMenu = state.menuItems.map((i) => {
            return i.id === action.id ? { ...i, insideCart: false } : i
        })
        const oupdatedMenu = state.filteredMenu.map((i) => {
            return i.id === action.id ? { ...i, insideCart: false } : i
        })

        return {
            menuItems: updatedMenu,
            filteredMenu: oupdatedMenu,
            cart: updatedCart
        }

    }

    return state
}

export default MenuReducer