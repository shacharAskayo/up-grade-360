import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='main-header'>
            <Link to='/'>
                <img src="https://app-getwild.ussl.co.il/wp-content/uploads/2021/08/%D7%9C%D7%95%D7%92%D7%95-UPGRADE360-18.d110a0.webp" alt="" />
            </Link>
            <nav className='main-nav'>
                <Link to='/about'>אודותינו</Link>
                <Link to='/questions'>שאלות ותשובות</Link>
                <Link to='/tracks'>מסלולים</Link>
                <Link to='/contect'>צור קשר</Link>
            </nav>
            <button>למעבר לפאנל ניהול</button>
        </div>
    )
}
