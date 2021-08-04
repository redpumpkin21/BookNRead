import React from 'react'
import Hamburger from '../Componets/Hamburger'
import Search from '../Componets/Search'
import Carousel1 from '../Componets/Carousel1'

const Header = () => {
    return(
        <nav>
            <Carousel1 />
        <Hamburger /> 
        <Search />
        
        </nav>
    )
}
export default Header