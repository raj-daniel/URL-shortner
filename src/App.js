import "./App.css";
import Header from "./Components/Header";
import UrlShortner from "./Components/UrlShortner";
import ReactGA from "react-ga";

const TRACKING_ID = "G-LQ0083ERCY";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
    return (
        <div>
            <Header />
            <UrlShortner />
        </div>
    );
}

export default App;
