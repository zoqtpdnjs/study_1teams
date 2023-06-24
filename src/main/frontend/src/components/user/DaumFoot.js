import React from 'react'
import WrapQuestion from 'components/user/WrapQuestion'

const DaumFoot = () => {

    const footerList = [
        {   
            id: 1,
            tit_question: "Story로 뭉쳐",
            list_question: [
                {
                    id : 1,
                    href : "/skin",
                    list : "스킨"
                },
                {
                    id : 2,
                    href : "/community/forum",
                    list : "포럼"
                },
                {
                    id : 3,
                    href : "/category",
                    list : "스토리"
                }
            ]
        },
        {   
            id: 2,
            tit_question: "사용하다 궁금할 땐",
            list_question: [
                {
                    id : 1,
                    href : "/guide/api/manage/register",
                    list : "오픈 API"
                },
                {
                    id : 2,
                    href : "https://tistory.github.io/document-tistory-skin/",
                    list : "스킨가이드"
                },
                {
                    id : 3,
                    href : "https://cs.kakao.com/requests?service=175&amp;locale=ko",
                    list : "고객센터"
                }
            ]
        },
        {   
            id: 3,
            tit_question: "정책이 궁금할 땐",
            list_question: [
                {
                    id : 1,
                    href : "/info/contract",
                    list : "이용약관"
                },
                {
                    id : 2,
                    href : "https://www.kakao.com/policy/privacy?lang=ko",
                    list : "카카오 개인정보처리방침"
                },
                {
                    id : 3,
                    href : "/info/privacy",
                    list : "티스토리 개인정보처리방침"
                },
                {
                    id : 4,
                    href : "https://www.kakao.com/policy/safeguard",
                    list : "청소년보호정책"
                },
                {
                    id : 5,
                    href : "/info/openApi",
                    list : "오픈API 이용약관"
                },
                {
                    id : 6,
                    href : "/info/emailPolicy",
                    list : "Email 수집거부정책"
                }
            ]
        },
        {   
            id: 4,
            tit_question: "도움이 필요할 땐",
            list_question: [
                {
                    id : 1,
                    href : "https://www.kakao.com/policy/right",
                    list : "권리침해신고"
                },
                {
                    id : 2,
                    href : "https://cs.kakao.com/conflict",
                    list : "상거래 피해 구제신청"
                }
            ]
        },
    ];

    return (
        <div id="daumFoot" className='footer_comm'>
            <div className='inner_foot'>
                <div className="cont_tistory">
                    <strong className="img_common_tistory txt_tistory">TISTORY</strong>
                    <p className="desc_footer">
                        티스토리는 카카오에서 
                        <em>♥</em>을 담아 만듭니다.<br/>
                        © Kakao Corp.
                    </p>
                    <div className="search_tistory" id="footerSearchContainer">
                        <h2 className="screen_out">검색</h2>
                        <form action="//search.daum.net/search" target="_blank" role="search" method="get">
                            <fieldset>
                                <legend className="screen_out">티스토리 검색</legend>
                                <div className="inp_text">
                                    <input type="text" id="footerSearchInput" placeholder="검색어입력" title="검색" name="q"/>
                                </div>
                                <button type="submit" className="img_common_tistory btn_search">검색</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className='question_tistory'>
                    <h2 className="screen_out">문의목록</h2>
                    {footerList.map((footer) => {
                        return(
                            <WrapQuestion footer={footer} key={footer.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DaumFoot;