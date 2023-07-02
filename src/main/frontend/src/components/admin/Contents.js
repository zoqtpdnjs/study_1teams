import React from 'react'

function Contents() {
    return (
        <div className='body'>
            <div className='page_area'>
                <form id='userForm'>
                    <div className='body_header'>
                        <div className='title'>
                            <h1>사용자 관리</h1>
                            <span className='count'>n</span>
                        </div>
                        <div className='sub_txt'>
                            사용자 현황을 확인하고 관리할 수 있습니다.
                        </div>
                    </div>
                    <div className='content_header'>
                        <div className="main_content_top_bt left">
                            <div className="search_top">
                                <select id="searchOption" name="searchOption" className="sel_box_s">
                                    <option value="name">이름</option>
                                    <option value="mailid">아이디</option>
                                </select>
                                <div className="new-search ">
                                    <div className="new-search-area">
                                        <input id="searchText" name="searchText" className="searchText"
                                               onKeyPress="manageUserList.doSearchEnter(event);"
                                               onKeyUp="ImUtils.checkSearchText();" placeholder="검색어를 입력해 주세요."
                                               type="text" value="" autoComplete="off"></input>
                                        <button type="button" id="searchTextRemoveBtn"
                                                onClick="manageUserList.doAllList();"
                                                className="cancel-btn" /*style="display: none"*/>
                                            <span>삭제</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* main_content_top_bt left end */}
                        <div className="main_content_top_bt right">
                            <ul>
                                <li className="content_head_bt">
                                    <div className="content_header_select">
                                        <select id="sel_receiver_enable" name="sel_receiver_enable"
                                                onChange="manageUserList.changeReceiver();">
                                            <option value="">계정상태(전체)</option>
                                            <option value="1">정상</option>
                                            <option value="4">사용정지</option>
                                            <option value="5">삭제대기</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="content_head_bt">
                                    <button type="button" className="btn head config d_cf" title="목록 설정"
                                            onClick="ddmenu.show(this, 'btn_ch_cfg');"><span
                                        className="bt_caption_r config">목록 개수</span></button>
                                    <div className="drop_menu cfg" id="btn_ch_cfg">
                                        <ul>
                                            <li><a href="#"
                                                   onClick="manageUserList.setList(15);"><span>15개</span></a></li>
                                            <li><a href="#"
                                                   onClick="manageUserList.setList(20);"><span>20개</span></a></li>
                                            <li><a href="#"
                                                   onClick="manageUserList.setList(30);"><span>30개</span></a></li>
                                            <li><a href="#"
                                                   onClick="manageUserList.setList(50);"><span>50개</span></a></li>
                                            <li><a href="#" onClick="manageUserList.setList(100);"><span>100개</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* content_header end */}
                    <div className="content_area">
                        <div className="view_area table bottom_nav">
                            <table id="u_list" className="tbl_list">
                                <caption className="blind">사용자 목록입니다.</caption>
                                <colgroup>
                                    {/* <col style="width: 68px;" />
                                        <col style="width: auto;" />
                                        <col style="width: 180px;"/>
                                        <col style="width: 130px;" />
                                        <col style="width: 130px;" />
                                        <col style="width: 250px;" />
                                        <col style="width: 90px;" />
                                        <col style="width: 130px;" /> */}
                                </colgroup>
                                <thead>
                                <tr>
                                    <th scope="col" className="list_ico"><label><input type="checkbox"
                                                                                       id="all_check"
                                                                                       onClick="ImFormUtils.select_all('userIds');"/><span
                                        className="blind">전체선택"</span></label></th>
                                    <th scope="col">
                                        <a href="javascript:;" onClick="manageUserList.setSortOpt(0);">
                                            <span className="txt strong title">아이디</span>
                                            <span className="blind">기준으로 정렬</span>
                                        </a>
                                    </th>
                                    <th scope="col"><a href="javascript:;"
                                                       onClick="manageUserList.setSortOpt(1);"><span
                                        className="txt strong title">이름</span></a>
                                    </th>
                                    <th scope="col"><a href="javascript:;"
                                                       onClick="manageUserList.setSortOpt(4);"><span
                                        className="txt strong title">가입일</span></a>
                                    </th>
                                    <th scope="col"><a href="javascript:;"
                                                       onClick="manageUserList.setSortOpt(5);"><span
                                        className="txt strong title">최종접속</span></a>
                                    </th>
                                    <th scope="col"><span className="txt strong title">계정 상태</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="list_ico"><label><input type="checkbox" name="userIds" value=""
                                                                           data-userid=""/><span
                                        className="blind">선택</span></label></td>
                                    <td>
                                        <a href="javascript:;" onClick="manageUserList.viewUser();"><span
                                            className="txt">아이디</span></a>
                                    </td>
                                    <td><a href="javascript:;"
                                           onClick="manageUserList.viewUser();"><span>이름이름</span></a></td>
                                    <td><span className="txt small" title="" pattern="yyyy-MM-dd HH:mm:ss"></span>
                                    </td>
                                    <td><span className="txt small" title="" pattern="yyyy-MM-dd HH:mm:ss"></span>
                                    </td>
                                    <td><span>정상</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="list_nav"></div>
                    </div>
                </form>
            {/* page_area end */}
            </div>
        {/* body end */}
        </div>
    )
}
export default Contents;