import {
  BrowserRouter as Router,
  Routes, //
  Route,  //path의 경로에 렌더링 해줌
  Link //라우터에서 다른 라우터로 새로고침 필요 없이 갈 수 있게 해줌
} from "react-router-dom";

import './App.css';
import Main from './components/main';
import Test from './components/test';
import Result from './components/result';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result" element={<Result />} />
    </Routes>
    </Router>
  );
}

export default App;
