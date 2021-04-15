import React from 'react'
import Header from "../Header/Header";
import Contents from "../Contents/Contents"
import Footer from "../Footer/Footer"

const Picture = (prop)=>{
    const {picture} = prop;

    return (
        <div className="App-header">
            <Header picture ={picture}/>
            <Contents picture={picture}/>
            <Footer picture={picture}/>
        </div>
    )
}

export default Picture; 