import './css/Common.css';
import './css/App.css';
import './css/Top.css';
import Navigation from './components/Navigation'
import KakaoContent from './components/KakaoContent'

function App() {
  return (
      <div id="kakaoWrap" className="tistory_type1">
        <Navigation />
        <hr className="hide" />
        <KakaoContent />
      </div>
  );
}

export default App;
