import React from 'react';
import UserContainerBoardList from './UserContainerBoardList';
import UserContainerPaging from './UserContainerPaging';

const UserContainerMain = () => {
    return (
		<main id="main">
		<div class="inner_index">
			<div class="category_list index_type_common index_type_horizontal">
				<h2 class="title_category">전체 글</h2>
			</div>
			<UserContainerBoardList/>
			<UserContainerPaging/>
		</div>
		</main>
    )
}

export default UserContainerMain;