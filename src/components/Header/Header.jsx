import React from 'react'
import Topbar from './TopBar/Topbar'
import MiddleHeader from './MiddleHeader/MiddleHeader'
import PrimaryHeader from './PrimaryHeader/PrimaryHeader'
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/fontawesome.min.css"
import "../../assets/css/venobox.min.css"
import "../../assets/css/odometer.min.css"
import "../../assets/css/nice-select.css"
import "../../assets/css/swiper.min.css"
import "../../assets/css/main.css"



const Header = () => {
  return (
    <>
        <header className="header sticky-active">
            <Topbar />
            <MiddleHeader />
            <PrimaryHeader />
        </header>
   </>
  )
}

export default Header