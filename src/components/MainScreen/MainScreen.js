import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './MainScreen.css'
import Body1 from '../Body1/Body1'
import Footer from '../Footer/Footer'

const MainScreen = ({ spotify }) => {
    return (
        <div className="MainScreen">
            <div className="MainScreen_c1">
                <Sidebar spotify={spotify} />
                <Body1 spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default MainScreen