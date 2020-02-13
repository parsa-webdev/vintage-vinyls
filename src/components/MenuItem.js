import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemToCart } from '../actions/menuActions'
import ATCBtn from './ATCBtn'

function MenuItem({ i, addToCart }) {

    return (
        <div key={i.id}>
            <h3>{i.item}</h3>
            <Link to={`/menu/${i.id}`}>

                {i.img ? <img src={require(`../img/${i.img}.jpg`)} alt="" /> : 'loading'}

            </Link>
            <ATCBtn i={i} addToCart={addToCart} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, item, price, count) => { dispatch(addItemToCart(id, item, price, count)) },
    }
}

export default connect(null, mapDispatchToProps)(MenuItem)

