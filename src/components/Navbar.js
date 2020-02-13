import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({ cart }) {
    const [sidebar, setSidebar] = useState(false)
    const sidebarToggle = () => {
        setSidebar(!sidebar)
    }
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <>Vintage Vinyls</>
                        </Link>

                    </div>
                    <nav>
                        <Link to="/">
                            <>home</>
                        </Link>
                        <Link to="/menu">
                            <>menu</>
                        </Link>

                        <Link to="/cart" className="cartNum">
                            <>cart <span >{cart}</span></>
                        </Link>
                        <div onClick={sidebarToggle} className={sidebar ? 'hamburger hamburger--spin is-active' : 'hamburger hamburger hamburger--spin'}>

                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>

                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div id="sidebar" className={sidebar ? 'sidebarActive' : 'sidebar'}>
                        <Link to="/">
                            <>home</>
                        </Link>
                        <Link to="/menu">
                            <>menu</>
                        </Link>

                        <Link to="/cart" className="cartNum">
                            <>cart <span >{cart}</span></>
                        </Link>
                    </div>
                </div>

            </header>
        </div>
    )
}
