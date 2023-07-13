import React from 'react';

const UserTopLayout = () => {
    return (
        <div class="area_menu">
		<nav class="menu_navigation">
		<ul class="list_gnb">
			<li class="t_menu_home first"><a href="/" target="" class="link_gnb link_lnb">홈</a></li>
			<li class="t_menu_tag"><a href="/tag" target="" class="link_gnb link_lnb">태그</a></li>
			<li class="t_menu_guestbook last"><a href="/guestbook" target="" class="link_gnb link_lnb">방명록</a></li>
		</ul>
		<ul class="tt_category">
			<li class=""><a href="/category" class="link_tit link_lnb"> 분류 전체보기 <span class="c_cnt">(33)</span></a>
			<ul class="category_list list_gnb">
				<li class=""><a href="/category/Spring%20Boot%20%26%20JPA" class="link_item link_gnb link_lnb"> Spring Boot &amp; JPA <span class="c_cnt">(15)</span></a></li>
				<li class=""><a href="/category/React" class="link_item link_gnb link_lnb"> React <span class="c_cnt">(13)</span></a></li>
				<li class=""><a href="/category/AWS" class="link_item link_gnb link_lnb"> AWS <span class="c_cnt">(0)</span></a></li>
				<li class=""><a href="/category/%ED%9A%8C%EC%9D%98%EB%A1%9D" class="link_item link_gnb link_lnb"> 회의록 <span class="c_cnt">(4)</span></a></li>
				<li class=""><a href="/category/GIT" class="link_item link_gnb link_lnb"> GIT <span class="c_cnt">(1)</span></a></li>
			</ul>
			</li>
		</ul>
		</nav>
		<div class="m_sidebar pc_blind">
			<div class="about_me_mobile">
				<div class="box_sidebar about_me">
					<div class="inbox">
						<h3 class="title_sidebar">ABOUT ME</h3>
						<p class="text_about">
						</p>
					</div>
				</div>
			</div>
		</div>
		<ul class="list_sns">
			<li><a href="#" class="link_sns link_twitter" target="_blank"><span class="blind">트위터</span></a></li>
			<li><a href="#" class="link_sns link_insta" target="_blank"><span class="blind">인스타그램</span></a></li>
		</ul>
		<div class="box_visit">
			<dl class="data_today">
				<dt class="title_visit">Today</dt>
				<dd class="item_visit">0</dd>
			</dl>
			<dl class="data_yesterday">
				<dt class="title_visit">Yesterday</dt>
				<dd class="item_visit">0</dd>
			</dl>
			<dl class="data_total">
				<dt class="title_visit">Total</dt>
				<dd class="item_visit">187</dd>
			</dl>
		</div>
	</div>
    )
}

export default UserTopLayout;