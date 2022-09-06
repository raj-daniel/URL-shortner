import "./App.css";
import Header from "./Components/Header";
import UrlShortner from "./Components/UrlShortner";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        ReactGA.initialize('G-LQ0083ERCY');
        ReactGA.pageview(window.location.pathname + window.location.search);
    });
    return (
        <div>
            <Header />
            <UrlShortner />
        </div>
    );
}

export default App;
