import React from 'react'

const UserContainerHeader = () => {
    return (
        <header id="header">
		<div class="inner_header">
			<h1 class="logo">
			<a href="https://uyoungse.tistory.com/" title="우영세" class="link_logo">
			<span class="blind">우영세</span>
			<span class="title_text">우영세</span>
			</a>
			</h1>
			<button type="button" class="btn_menu"><span class="icon-Menu"></span><span class="icon-Close"></span><span class="blind">메뉴</span></button>
			<button class="btn_search"><span class="icon-Search"></span><span class="blind">검색</span></button>
			<div class="area_search thema_apply">
				<form action="" method="get">
					<legend><span class="blind">컨텐츠 검색</span></legend>
					<label for="search" class="screen_out">블로그 내 검색</label>
					<input id="search" type="text" name="search" title="Search" placeholder="Search" value="" class="inp_search" onkeypress="if (event.keyCode==13) { try { window.location.href='/search' + '/' + looseURIEncode(document.getElementsByName('search')[0].value); document.getElementsByName('search')[0].value=''; return false; } catch (e) {} }"/>
					<button type="button" title="검색어 삭제" class="btn_search_del"></button>
				</form>
			</div>
		</div>
		</header>
    )
}

export default UserContainerHeader;