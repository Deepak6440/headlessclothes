import React from 'react'
import MiddleFooter from './MiddleFooter/MiddleFooter'
import PrimaryFooter from './PrimaryFooter/PrimaryFooter'
import CopyRight from './CopyRight/CopyRight'

import "../../assets/js/vendor/jquery-3.6.0.min.js"
import "../../assets/js/vendor/bootstrap-bundle.js"
import "../../assets/js/vendor/waypoints.min.js"
import "../../assets/js/vendor/venobox.min.js"
import "../../assets/js/vendor/odometer.min.js"
import "../../assets/js/vendor/meanmenu.js"
import "../../assets/js/vendor/smooth-scroll.js"
import "../../assets/js/vendor/countdown.js"
import "../../assets/js/vendor/swiper.min.js"
import "../../assets/js/vendor/nice-select.js"
import "../../assets/js/main.js"

export const Footer = () => {
  return (
    <footer className="footer-section bg-grey pt-60">
            <div className="container">
            <MiddleFooter />
            <PrimaryFooter />
    </div>
    <CopyRight />
    </footer>
  )
}
