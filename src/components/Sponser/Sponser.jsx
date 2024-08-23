import React from 'react'
import Sponser1 from "../../assets/img/Home/asset 21.png"
import Sponser2 from "../../assets/img/Home/asset 22.png"
import Sponser3 from "../../assets/img/Home/asset 23.png"
import Sponser4 from "../../assets/img/Home/asset 24.png"
import Sponser5 from "../../assets/img/Home/asset 25.png"
import Sponser6 from "../../assets/img/Home/asset 26.png"
import Sponser7 from "../../assets/img/Home/asset 27.png"
import Sponser8 from "../../assets/img/Home/asset 28.png"
import Sponser9 from "../../assets/img/Home/asset 29.png"
import Sponser10 from "../../assets/img/Home/asset 30.png"
const Sponser = () => {
  return (
   <>
    <div className="sponsor-section pt-100">
            <div className="container">
                <div className="row sponsor-wrap">
                    <div className="sponsor-item bd-right bd-bottom">
                        <a href="#"><img src={Sponser1} alt="img"/></a>
                    </div>
                    <div className="sponsor-item bd-right bd-bottom">
                        <a href="#"><img src={Sponser2} alt="img"/></a>
                    </div>
                    <div className="sponsor-item bd-right bd-bottom">
                        <a href="#"><img src={Sponser3} alt="img"/></a>
                    </div>
                    <div className="sponsor-item bd-right bd-bottom">
                        <a href="#"><img src={Sponser4} alt="img"/></a>
                    </div>
                    <div className="sponsor-item bd-bottom">
                        <a href="#"><img src={Sponser5} alt="img"/></a>
                    </div>
                    <div className="sponsor-item bd-right">
                        <a href="#"><img src={Sponser6} alt="img"/></a>
                    </div>
                    <div className="sponsor-item bd-right">
                        <a href="#"><img src={Sponser7} alt="img"/></a>
                    </div>
                    <div className="sponsor-item bd-right">
                        <a href="#"><img src={Sponser8} alt="img"/></a>
                    </div>
                    <div className="sponsor-item bd-right">
                        <a href="#"><img src={Sponser9} alt="img"/></a>
                    </div>
                    <div className="sponsor-item">
                        <a href="#"><img src={Sponser10} alt="img"/></a>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Sponser