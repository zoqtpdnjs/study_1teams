import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Navigation = ({authenticate}) => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/auth/login');
    };

    const goToLogout = () => {
        navigate('/oauth/logout');
    };

    const [showProfileBox, setShowProfileBox] = useState(false);
    const showProfileBoxEvent = () => {
        setShowProfileBox(!showProfileBox);
    };

    return (
        <div id="kakaoHead" role="banner" className="kakao_head head_type1">
            <div className="inner_header tistory">
                <h1>
                    <a href="" id="kakaoServiceLogo" className="#logo link_logo">
                        <span className="img_common_tistory tit_tistory tit_tistory_white">티스토리</span>
                        <span className="img_common_tistory tit_tistory tit_tistory_black"></span>
                    </a>
                </h1>
                <div id="kakaoGnb" role="navigation" className="gnb_tistory">
                    <h2 className="screen_out">
                        서비스 주요 메뉴
                    </h2>
                    <ul className="list_gnb">
                        <li className=""><a href="" className="#feed link_gnb">피드</a></li>
                        <li className=""><a href="" className="#story link_gnb">스토리</a></li>
                    </ul>
                </div>
                <div className="notice_tistory">
                    <h2 className="screen_out">공지사항</h2>
                    <span className="img_common_tistory ico_notice ico_white"></span>
                    <span className="img_common_tistory ico_notice ico_black"></span>
                    <a href="https://notice.tistory.com/2645" className="desc_notice" target="_blank">티스토리 댓글과 방명록이 새로워졌습니다.</a>
                </div>
                <div className="info_tistory">
                {authenticate == false ?   
                    <div className="logn_tistory">
                        <h2 className="screen_out">로그인정보</h2>
                        <a className="btn_tistory btn_log_info" onClick={goToLogin}>시작하기</a>
                    </div> :
                    <div className="profile_tistory">
                        <a className="link_alarm">
                            <span className="img_common_tistory ico_alarm ico_black">알림</span>
                        </a>
                        <a className="link_profile">
                            <img src="https://i1.daumcdn.net/thumb/C100x100/?scode=mtistory2&amp;fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F5463218%2Fattach%2F1dd57532d2d8477da72224c3faddea29" width="36" height="36" className="thumb_profile" alt="" 
                            onClick={showProfileBoxEvent}/>
                        </a>
                        <div className="header_layer layer_profile #sideToolBar" 
                            style={{display: showProfileBox ? "block":"none"}}>
                            <div className="inner_header_layer">
                                <h2 className="screen_out">개인정보</h2>
                                <div className="info_profile" data-tiara-layer="gnb_profile">
                                    <div className="wrap_account">
                                        <a href="https://www.tistory.com/member" className="txt_id txt_id_type2">하와이블루</a>
                                    </div>
                                    <span className="txt_email">xlthslrlx@nate.com</span>
                                    <a href="https://www.tistory.com/member" className="link_setting link_setting_type2">계정관리</a>
                                </div>
                                <div className="wrap_list #blogList" style={{maxHeight: "300px"}}>
                                    <div>
                                        <h3 className="tit_list_type">운영중인 블로그</h3>
                                        <div className="info_profile info_profile_type1">
                                            <a href="https://bluechanyeong.tistory.com" className="txt_id">내 이야기 꾸러미</a>
                                            <a href="https://bluechanyeong.tistory.com/manage/post" className="img_common_tistory link_edit">쓰기</a>
                                            <a href="https://bluechanyeong.tistory.com/manage" className="img_common_tistory link_setting">블로그 관리</a>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn_logout" onClick={goToLogout}>로그아웃</button>
                            </div>
                            <script type="text/javascript" src="//t1.daumcdn.net/tiara/js/v1/tiara.min.js"></script>
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Navigation;