import {Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'css/user/Common.css';
import 'css/user/App.css';
import 'css/user/Top.css';
import LoginPage from 'components/user/Login'
import LogoutPage from 'components/user/LogoutPage'
import KakaoWrap from 'components/user/KakaoWrap'

function App() {
  const authenticate = useSelector((state) => state.auth.authenticate);

  console.log("로그인 여부 : ", authenticate);
  return (
    <Routes>
      <Route path="/" element={<KakaoWrap authenticate={authenticate}/>} />
      <Route path="/auth/login" element={<LoginPage/>} />
      <Route path="/oauth/logout" element={<LogoutPage authenticate={authenticate} />} />
    </Routes>
  );
}

export default App;
