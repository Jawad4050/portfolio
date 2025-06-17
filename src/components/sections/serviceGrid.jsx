import React from 'react'
import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Front-End Web Development"} description={"Build modern, high-performance websites using HTML, CSS, JavaScript, Tailwind CSS, and React or Next.js."} />
                        <Card id={2} icon={<RiQuillPenLine size={60} />} title={"Figma to Next.Js"} description={"Convert Figma designs into responsive, pixel-perfect Next.js websites with clean code."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Responsive UI/UX Design"} description={"Design and develop fully responsive, user-friendly interfaces optimized for all devices and screen sizes."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}