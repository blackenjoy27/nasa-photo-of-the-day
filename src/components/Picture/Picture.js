import React from 'react'
import styled from "styled-components"


const PictureDiv = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${pr=> pr.theme.themeColor};
    color: ${pr=>pr.theme.fontColor};
`
const ImgContent = styled.img`
    width:50%;
    margin: auto;
    
    &:hover{
        border-radius:50px;
        width:70%;
        transition: all 1s ease-in-out;
    }
    transition: all 1s ease-in-out;
`
const Explanation = styled.p`
    font-size:1rem;
    width:70%;
    margin:1rem auto;
    font-size:1.15rem;
    color: ${pr=>pr.theme.expColor};

    &:hover{
        font-size:1.25rem;
        transition:all 1s ease-in-out;
    }
    transition:all 1s ease-in-out;
`
const HeaderDiv = styled.div`
    display:flex;
    justify-content:center;
    
`

const Picture = (prop)=>{
    const {picture} = prop;
    
    return (
        <PictureDiv>
            <HeaderDiv>
                <h1>{picture.title}</h1>
                <h6>{picture.date}</h6>    
            </HeaderDiv>
           
            <ImgContent src={picture.url} alt={picture.explanation}></ImgContent>
            <Explanation>{picture.explanation}</Explanation>

            {picture.copyright && <h6>Copyright © 2021 by {picture.copyright}</h6>}
        </PictureDiv>
    )
}

export default Picture; 