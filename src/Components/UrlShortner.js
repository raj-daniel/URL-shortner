import React, { useState, useEffect } from "react";
import Lists from "./Lists";
import "./urlShortner.css";
import ReactGa from "react-ga";
const URL = "https://api.shrtco.de/v2/shorten?url=";

const UrlShortner = () => {
    const [input, setInput] = useState("");
    const [urlList, setUrlList] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await shortURL(URL + input);
        setUrlList((prev) => {
            return [
                ...prev,
                {
                    originalURL: input,
                    shortURL: response.result.full_short_link,
                },
            ];
        });
        ReactGa.event({
            category: "button click",
            action: "test",
            label: "click",
            value: 1,
        });
    };
    const shortURL = async (input) => {
        let res = await fetch(input);
        let resJson = res.json();
        return resJson;
    };

    useEffect(() => {
        ReactGa.pageview(window.location.pathname);
    }, []);

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Shorten your URL link"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    ></input>
                    <button
                        style={{ backgroundColor: "#35c2e9", width: "100%" }}
                        type="submit"
                    >
                        Shorten
                    </button>
                </form>
            </div>
            <div className="urlLists">
                <Lists lists={urlList} />
            </div>
        </>
    );
};

export default UrlShortner;
