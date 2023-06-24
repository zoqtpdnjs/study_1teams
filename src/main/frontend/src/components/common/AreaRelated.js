import React from 'react'
import List_Related from "components/common/List_Related";
import 'css/common/AreaReated.css'

const AreaRelated = () => {
    return (
        <div id='areaRelated' className='area_related'>
            <strong className="tit_related">'React' Related Articles</strong>
            <List_Related/>
            <a href="" className="link_more">more</a>
        </div>
    )
}

export default AreaRelated;