import React from 'react'

const UserContainerPaging = () => {
    return (
		<div class="area_paging">
			<div class="inner_paging thema_apply">
				<a class="link_page link_prev no-more-prev"><span class="icon-Keyboard-Arrow---Left"></span><span class="blind">이전</span></a>
				<div class="paging_num">
					<a href="/?page=1" class="link_num"><span class="selected">1</span></a>
					<a href="/?page=2" class="link_num"><span class="">2</span></a>
					<a href="/?page=3" class="link_num"><span class="">3</span></a>
					<a href="/?page=4" class="link_num"><span class="">4</span></a>
					<a href="/?page=5" class="link_num"><span class="">5</span></a>
				</div>
				<a href="/?page=2" class="link_page link_next "><span class="blind">다음</span><span class="icon-Keyboard-Arrow---Right"></span></a>
			</div>
		</div>
    )
}

export default UserContainerPaging;