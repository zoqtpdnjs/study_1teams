import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
    const [id, setId] = useState("ycy1022");
    const [password, setPassword] = useState("q1w2e3r4!!");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const loginUser = async() => {
        console.log(id, password);
        const isLoginSuccess = true;
        const result = ""
        // 로그인 api 연동 필요
        // let url = `http://localhost:8080/????????`;
        // let response = await fetch(url);
        // let data = await response.json();

        if(isLoginSuccess){
            dispatch({type:"LOGIN_SUCCESS", payload:{id}});
            alert('로그인에 성공하였습니다')
            navigate('/')
        }else{
            dispatch({type:"LOGIN_FAILURE"});
            alert('로그인에 실패하였습니다')
        }
    }
    return (
        <div>
            <p>로그인 페이지입니다.</p>
            <p>authentiacte 테스트</p>
            <p><button onClick={() => loginUser()}>로그인 하기 버튼 클릭</button></p>
        </div>
    )
}

export default LoginPage;