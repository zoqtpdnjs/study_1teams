import React from 'react'

const Navigation = () => {
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
                    <div className="logn_tistory">
                        <h2 className="screen_out">로그인정보</h2>
                        <a href="https://www.tistory.com/auth/login" className="btn_tistory btn_log_info">시작하기</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;