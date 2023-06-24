import React from 'react'


const List_Related = () => {
    return (
        <div>
            <ul className='list_related'>
                <li className='text_type'>
                    <a className='link_related'>
                        <span className='txt_related'> 첫번째 게시물</span>
                        <span className='date_related'>2023.06.23</span>
                        <span className='frame_related'></span>
                    </a>
                </li>
                <li className='text_type'>
                    <a className='link_related'>
                        <span className='txt_related'> 두번째 게시물</span>
                        <span className='date_related'>2023.06.24</span>
                        <span className='frame_related'></span>
                    </a>
                </li>
                <li className='text_type'>
                    <a className='link_related'>
                        <span className='txt_related'> 세번째 게시물</span>
                        <span className='date_related'>2023.06.25</span>
                        <span className='frame_related'></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default List_Related;
