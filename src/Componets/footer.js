import React from 'react'
import Forms from './Forms'
const Footer = () => {
    const divStyle = {
        backgroundColor: '#3E5962',
        color: 'white'
    }
    return (
        <>
        <Forms />
        <div className= 'copyright' style ={divStyle}>Created by Chris Johnson, warning copyright infringments will be prosicuted</div>
        </>
    )
}
export default Footer