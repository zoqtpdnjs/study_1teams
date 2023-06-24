import 'css/user/Common.css';
import 'css/user/App.css';
import 'css/user/Top.css';
import Navigation from 'components/user/Navigation'
import KakaoContent from 'components/user/KakaoContent'
import DaumFoot from 'components/user/DaumFoot'

function App() {
  return (
      <div id="kakaoWrap" className="tistory_type1">
        <Navigation />
        <hr className="hide" />
        <KakaoContent />
        <hr className="hide" />
        <DaumFoot />
      </div>
  );
}

export default App;
