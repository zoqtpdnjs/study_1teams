import React from 'react'

function Menu(){
    return (
        <div className='left_area'>
            <div className='left_box_list'>
                <div className='left_box user'>
                    <ul>
                        <li className='left_list drop' id="user_left">
                            <a href='#'><span>사용자 관리</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu;