import React from "react"
import "./Contents.css"

const Contents = (prop)=>{
    const {picture}= prop;
    return(
        <div className="App-contents">
            <img src={picture.url} alt={picture.explanation} className="App-logo"></img>
            <p className="explanation">{picture.explanation}</p>
        </div>
    )
}

export default Contents;