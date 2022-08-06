import React, { useState } from 'react'
import Lists from './Lists'
import './urlShortner.css'

const URL = "https://api.shrtco.de/v2/shorten?url="

const UrlShortner = () =>{
    const [input,setInput] =  useState("")
    const [urlList,setUrlList] = useState([])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        let response = await shortURL(URL+input)
        setUrlList((prev)=>{ return [...prev,{originalURL:input, shortURL:response.result.full_short_link}]})



    }
    const shortURL = async (input) => {
        let res = await fetch(input)
        let resJson = res.json()
        return resJson
    }

    return (
        <>
        <div className="form">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Shorten your URL link' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
            <button style={{backgroundColor: "#35c2e9", width: "100%"}} type="submit">Shorten</button>
            </form>
        </div>
        <div className='urlLists'>
            <Lists lists={urlList} />
        </div>
        </>
    )
}


export default UrlShortner;