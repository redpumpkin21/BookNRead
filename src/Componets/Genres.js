import { findByLabelText } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import Best from './Genre/Best'
import Cooking from './Genre/Cooking'
import Fiction from './Genre/Fiction'
import History from './Genre/History'
import Mystery from './Genre/Mystery'
import New from './Genre/New'
import ScifiFan from './Genre/ScifiFan'
import SelfHelp from './Genre/SelfHelp'
import { FaBeer } from 'react-icons/fa';

const Genres = (props) => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'scroll',
        width: 'auto',
        gap: '15px'
    }
    return(
        <div className= 'Genres' style={divStyle}>
            <New />
            <Best />
            <Cooking />
            <Fiction />
            <History />
            <Mystery />            
            <ScifiFan />
            <SelfHelp />

        </div>
    )
    }

export default Genres