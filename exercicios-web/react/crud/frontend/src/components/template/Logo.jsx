import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react'

export default props =>
<aside className="logo">
    <Link to="/" className="logo">
        <img src={logo} alt="logo" />
    </Link>
</aside>
