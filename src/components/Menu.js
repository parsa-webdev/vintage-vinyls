import React from 'react'
import { connect } from 'react-redux'
import { changeCategory } from '../actions/menuActions'
import MenuItem from '../components/MenuItem'
function Menu({ menuItems, category, catChange }) {
    const getUnique = (items, value) => {
        return [...new Set(items.map((i) => i[value]))]
    }
    let categories = getUnique(category, 'category')
    categories = ['All Artists', ...categories]

    return (
        <div className="menu">
            <h1>Vinyls</h1>
            <div className="selectDiv">

                <select onChange={(e) => catChange(e.target.value)}>
                    {
                        categories.map((i) => {
                            return <option key={i} value={i}>{i}</option>

                        })
                    }
                </select>
            </div>
            <div className="allItems">

                {menuItems.map((i) => {
                    return <div key={i.id}>
                        <MenuItem i={i} />
                    </div>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.MenuReducer.menuItems,
        category: state.MenuReducer.filteredMenu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        catChange: (category) => { dispatch(changeCategory(category)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)