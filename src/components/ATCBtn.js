import React from 'react'

export default function ATCBtn({ i, addToCart }) {
    return (
        <div>
            <button className={i.insideCart ? 'added' : 'btn'} onClick={() => { return i.insideCart ? null : addToCart(i.id, i.item, i.price, i.count) }
            }>
                {i.insideCart ? 'Added To Cart' : 'Add To Cart'}</button>
        </div>
    )
}
