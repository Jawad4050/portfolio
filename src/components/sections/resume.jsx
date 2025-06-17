import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2022 - Present'} title={'Front-end Developer'} institution={'Upwork / Fiverr '} />
                                    <Card year={'2021 - 2022'} title={'Front-end Developer'} institution={'Drudots Technologies'} />
                                    <Card year={'2019 - 2021'} title={'Front-end Developer - Graphic Designer'} institution={'Bitsource Techologies'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2020 - 2024'} title={'Bachelor Degree of Computer Science'} institution={'Virtual University'} />
                                    <Card year={'2019 - 2020'} title={'Higher secoundery Education'} institution={'ILM College'} />
                                    <Card year={'2017 - 2018'} title={'Intermediate'} institution={'Unique Ravians High School'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}