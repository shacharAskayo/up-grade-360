import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='main-header'>
            <a href='/#/'>
                <img src="https://app-getwild.ussl.co.il/wp-content/uploads/2021/08/%D7%9C%D7%95%D7%92%D7%95-UPGRADE360-18.d110a0.webp" alt="" />
            </a>
            <nav className='main-nav'>
                <a href='/#/about'>אודותינו</a>
                <a href='/#/questions'>שאלות ותשובות</a>
                <a href='/#/tracks'>מסלולים</a>
                <a href='/#/contect'>צור קשר</a>
            </nav>
            <button>למעבר לפאנל ניהול</button>
        </div>
    )
}
