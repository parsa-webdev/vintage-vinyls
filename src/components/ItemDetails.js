import React from 'react'
import { connect } from 'react-redux'
import ATCBtn from './ATCBtn'
import { addItemToCart } from '../actions/menuActions'
function ItemDetails({ match, menuItems, addToCart }) {
    const filteredMenu = menuItems.filter((i) => i.id === Number(match.params.id))

    return (
        <div>
            {filteredMenu.length > 0 ? filteredMenu.map((i) => {
                return <div className="itemDetails" key={i.id}>
                    <div className="left">
                        <div className="img">
                            <img src={require(`../img/${i.img}.jpg`)} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <h2>{i.item}</h2>
                        <h3>By: {i.category}</h3>
                        <h4>Label: <span>{i.label}</span> </h4>
                        <h4>Released: <span>{i.released}</span></h4>
                        <h4>Country: <span>{i.country}</span></h4>
                        <h4>Price: <span className="price">${i.price}</span></h4>
                        <ATCBtn i={i} addToCart={addToCart} />
                    </div>
                </div>
            }) : <p>Item not found</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.MenuReducer.menuItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, item, price, count) => { dispatch(addItemToCart(id, item, price, count)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)