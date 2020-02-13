import React from 'react'
import { connect } from 'react-redux'
import { increaseCount, decreaseCount, deleteItem } from '../actions/menuActions'

function Cart({ cart, addCount, removeCount, delItem }) {
    return (
        <div className="cart">
            <h1>CART</h1>
            {cart.length === 0 ? <div className="empty"><h2>The Cart Is Currently Empty</h2> </div> :
                <div className="items">
                    <table>
                        <thead>

                            <tr>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart.map((i) => {
                                    return <tr key={i.id} className="each">
                                        <td> <h3>{i.item}</h3>  <button onClick={() => delItem(i.id)}>&times;</button></td>
                                        <td><h3>{i.price}</h3></td>
                                        <td className="counter">  <button onClick={() =>
                                            removeCount(i.id, i.count)
                                        }>-</button>
                                            <h3>{i.count}</h3>
                                            <button onClick={() => addCount(i.id, i.count)}>+</button></td>
                                        <td><h3>{i.price * i.count}</h3></td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <div className="total">Checkout Total : {cart.reduce((a, c) => (a + (c.price * c.count)), 0)}
                    </div>
                    <div className="checkout">
                        <button>CHECKOUT</button>
                    </div>
                </div>

            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.MenuReducer.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCount: (id, count) => { dispatch(increaseCount(id, count)) },
        removeCount: (id, count) => { dispatch(decreaseCount(id, count)) },
        delItem: (id) => { dispatch(deleteItem(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
