import React from 'react'
import "./Featured.scss"
import TrustedBy from '../trustedBy/TrustedBy'
const Featured = () => {
    return (
        <div className='featured'>
            <div className="container">
                <div className="left">
                    <h1 className='h1'>Find the perfect <i>freelance</i> services for your business</h1>
                    <div className="search">
                        <div className="searchInputs">
                            <img src="./img/search.png" alt="" />
                            <input type="text" placeholder='Try building mobile app' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>AI Services</button>
                        <button>Logo Design</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>


            </div>
        </div>
    )
}

export default Featured