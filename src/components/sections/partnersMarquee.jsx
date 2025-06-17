import React from 'react'
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2>Company I Worked With</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee>
                            <img src={"/images/client-logos/partner1.webp"} alt="" />
                            <img src={"/images/client-logos/partner2.png"} alt="" />
                            <img src={"/images/client-logos/partner3.svg"} alt="" />
                            <img src={"/images/client-logos/partner4.svg"} alt="" />
                            <img src={"/images/client-logos/partner3.svg"} alt="" />
                            <img src={"/images/client-logos/partner5.svg"} alt="" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee