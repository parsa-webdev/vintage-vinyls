export const addItemToCart = (id, item, price, count) => ({
    type: 'ADD_TO_CART',
    newItem: {
        id,
        item,
        price,
        count
    }
})
export const increaseCount = (id, count) => ({
    type: 'ADD_TO_COUNT',
    id,
    count
})
export const decreaseCount = (id, count) => ({
    type: 'REMOVE_FROM_COUNT',
    id,
    count
})
export const deleteItem = (id) => ({
    type: 'REMOVE_FROM_CART',
    id
})
export const changeCategory = (category) => ({
    type: 'CHANGE_CATEGORY',
    category
})


