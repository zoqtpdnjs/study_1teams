import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const LogoutPage = ({authenticate}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        if(authenticate == true){
            dispatch({type:"LOGOUT_SUCCESS"});
            alert('로그아웃하였습니다')
        }
        navigate('/');
    };
    
    return (
        <div>
            <p>로그아웃 페이지입니다.</p>
            <p>authentiacte 테스트</p>
            <p><button onClick={() => logout()}>로그아웃 하기 버튼 클릭</button></p>
        </div>
    )
}

export default LogoutPage;