import React from 'react'
import {string} from 'prop-types'

const Header = props => {
    const {branding} = props
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="narbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
    branding: string.isRequired
}


export default Header;