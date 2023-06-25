import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="top_area">
                <p className="left_top">
                    <a href='#'>
                        <span>Tistory</span>
                        <span className='admin_bg'>Admin</span>
                    </a>
                </p>
                <ul>
                    <li className='top_menu'>
                        <a href='#'>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;