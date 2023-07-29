import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../../css/admin/Login.css';
import axios from 'axios';
function Login() {
    const [account, setAccount] = useState("");
    const [passwd, setPasswd] = useState("");
    const navigate = useNavigate();
    const LoginProcess = () => {
        if(!account){
            return alert("아이디를 입력하세요.");
        }else if(!passwd){
            return alert("비밀번호를 입력하세요.");
        }else{
            let user = {
                account : account,
                passwd : passwd
            }
            axios.
                post("http://localhost:8080/auth/login", user)
                .then(res => {
                    navigate("/");
                });
        }
    }

    return (
        <div id="kakaoWrap">
            <div id="kakaohead" className="kakao_head">
                <div className="inner_header">
                    <h1>
                        <a href="/" id="kakaoServiceLogo" className="link_logo">
                            <span className="img_common_tistory tit_tistory "></span>
                        </a>
                    </h1>
                </div>
            </div>
            <div id="kakaoContent">
                <div className="content_login content_login_type1">
                    <div className="inner_login">
                        <div className="login_tistory login_type1">
                            <div className="img_common_tistory txt_tistory_v1">TISTORY</div>
                            <form method="post" id="authForm" action="https://www.tistory.com/auth/login"
                                  data-tiara-layer="login_form">
                                <input type="hidden" name="redirectUrl" value="https://www.tistory.com/"></input>
                                <fieldset>
                                    <legend className="screen_out">로그인 정보 입력폼</legend>
                                    <div className="box_login">
                                        <div className="inp_text">
                                            <label htmlFor="loginId" className="screen_out">아이디</label>
                                            <input type="email" id="loginId" name="loginId" placeholder="ID" value={account} onChange={(e) => setAccount(e.currentTarget.value)}/>
                                        </div>
                                        <div className="inp_text">
                                            <label htmlFor="loginPw" className="screen_out">비밀번호</label>
                                            <input type="password" id="loginPw" name="password" placeholder="Password" value={passwd} onChange={(e) => setPasswd(e.currentTarget.value)}/>
                                        </div>
                                    </div>
                                    <button type="button" className="btn_login"  onClick={() => LoginProcess()}>로그인</button>
                                    <div className="login_append">
                                        <div className="inp_chk" data-tiara-layer="keep_state"
                                             data-tiara-action-name="로그인 상태 유지 클릭">
                                            <input type="checkbox" id="keepLogin" className="inp_radio" name="keepLogin"></input>
                                            <label htmlFor="keepLogin" className="lab_g">
                                                <span className="txt_lab">로그인 상태 유지</span>
                                            </label>
                                        </div>
                                        <span className="txt_find">
						                	<a href="/member/find/loginId" className="link_find txt_lab">아이디</a>/
							                <a href="/member/find/password" className="link_find txt_lab">비밀번호 찾기</a>
					                	</span>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
