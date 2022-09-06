import './App.css';
import Header from './Components/Header';
import UrlShortner from './Components/UrlShortner';
import ReactGa from 'react-ga'

const TRACKING_ID="G-LQ0083ERCY"
ReactGa.initialize(TRACKING_ID)

function App() {
  return (
    <div>
      <Header/>
      <UrlShortner/>
    </div>
  );
}

export default App;
