import React from 'react'


const Footer = (prop)=>{
    const {picture} = prop;
    return (
        <h6>Copyright © 2021 by {picture.copyright}</h6>
    )
}
export default Footer;