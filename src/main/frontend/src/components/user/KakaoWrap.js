import React from 'react'
import Navigation from 'components/user/Navigation'
import KakaoContent from 'components/user/KakaoContent'
import DaumFoot from 'components/user/DaumFoot'

const KakaoWrap = () => {
    const authenticate = false;

    return (
        <div id="kakaoWrap" className="tistory_type1">
            <Navigation authenticate={authenticate} />
            <hr className="hide" />
            <KakaoContent />
            <hr className="hide" />
            <DaumFoot />
        </div>
    )
}

export default KakaoWrap;