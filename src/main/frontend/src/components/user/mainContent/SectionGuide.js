import React from 'react'

const SectionGuide = () => {
    return (
        <div className="section_content section_guide">
            <h2 className="screen_out">이용 가이드</h2>
            <div className="inner_section">
                <strong className="tit_guide">더 잘 쓰고 싶어요?</strong>
                <div className="info_guide">
                    <a href="https://notice.tistory.com/1797" target="_blank" className="link_guide">당신의 티스토리에 다양한 <em>플러그인</em>을 <br/>사용할 수 있어요.</a>
                    <a href="https://notice.tistory.com/2444" target="_blank" className="link_guide">사이트 보안을 위해 더 안전한&nbsp;<br/><em>암호화 접속</em>을 사용해보세요.</a>
                    <a href="https://notice.tistory.com/2400" target="_blank" className="link_guide">콘텐츠를 고정된 메뉴로 유지하고 싶다면 <br/><em>페이지</em>를 이용해보세요.</a>
                    <a href="https://notice.tistory.com/1784" target="_blank" className="link_guide">나만의 <em>도메인</em>을 연결해보세요.<br/>당신의 티스토리에 엣지가 생길거예요.</a>
                    <a href="https://notice.tistory.com/2384" target="_blank" className="link_guide"><em>로그인 보안</em>기능으로 당신의 정보와<br/>콘텐츠를 안전하게 지키세요!&nbsp;</a>
                </div>
            </div>
        </div>
    )
}

export default SectionGuide;