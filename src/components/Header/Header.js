import React from 'react'

const Header = (prop)=>{
    const {picture} = prop;
    return (
        <div >
            <h1>{picture.title}</h1>
            <span>{picture.date}</span>    
        </div>
        

    )
}

export default Header;