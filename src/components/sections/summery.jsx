import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <div className="about-image-part rounded-4 h-100">
                            <img src={"/images/user-img.png"} className='h-100 rounded-4' alt="About Me" />
                        </div>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Jawad Shahid, a Front End Developer.
                                </h2>
                                <p>I’m a front-end developer with a strong focus on responsive web development, UI/UX design, and interactive user experiences. Over the years, I’ve had the opportunity to work across various industries, helping clients bring their digital ideas to life with clean, maintainable code and pixel-perfect interfaces.</p>
                                <p>Contrary to popular belief, front-end development isn’t just about writing code—it’s about understanding users, design systems, and performance optimization. With a deep appreciation for both design and functionality, I strive to bridge the gap between visuals and code to craft seamless digital products that truly engage users.</p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery