import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navigation from 'components/user/Navigation'
import KakaoContent from 'components/user/KakaoContent'
import DaumFoot from 'components/user/DaumFoot'

const KakaoWrap = ({authenticate}) => {
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