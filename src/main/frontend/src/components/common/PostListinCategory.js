import React from 'react'
import PostList from "components/common/PostList";
import 'css/common/PostList.css'

const PostListinCategory = () => {
    return (
        <div id="postListCategory" className="another_category another_category_color_gray">
            <h4>이 카테고리의 다른 글</h4>
            <PostList/>
        </div>
    )
}

export default PostListinCategory;