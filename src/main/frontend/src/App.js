import {Routes, Route} from 'react-router-dom';
import 'css/user/Common.css';
import 'css/user/App.css';
import 'css/user/Top.css';
import LoginPage from 'components/user/LoginPage'
import LogoutPage from 'components/user/LogoutPage'
import KakaoWrap from 'components/user/KakaoWrap'

function App() {
  return (
    <Routes>
      <Route path="/" element={<KakaoWrap />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/oauth/logout" element={<LogoutPage />} />
    </Routes>
  );
}

export default App;
