import React from 'react'
import { Link } from 'react-router-dom'
import vinyl from '../img/vinyl.png'
import plug from '../img/plug2.svg'

export default function Home() {

    return (
        <div className="home">
            <div className="left" id="homeText">
                <div className="content">
                    <h1>Welcome To My Online Vinyl Store</h1>
                    <h2>Check Out Our Collections Dating Way Back To The 60s and Onwards.</h2>

                    <Link to="/menu">
                        <button>BROWSE</button>
                    </Link>
                </div>
            </div>
            <div className="right" id="spinningVinyl">
                <div>
                    <div className="img">
                        <div className="vinyl">
                            <img src={vinyl} alt="" />
                        </div>
                        <div className="plug">
                            <img src={plug} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
