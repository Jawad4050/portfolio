import Image from 'next/image'
import React from 'react'
import { projectsData } from '@/utlits/fackData/projectData';

const SingleProject = ({params}) => {
    const detailPage = projectsData.find(b => b.slug === params.slug);

    if (!detailPage) {
        
    }
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>{detailPage.category}</p>
                        <h1>{detailPage.title}</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={detailPage.mainImage} alt="image" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>{detailPage.details.year}</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{detailPage.details.client}</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>{detailPage.details.services}</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>{detailPage.details.project}</h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            {detailPage.description.map((descp,i)=>(
                                <p key={i}>{descp}</p>
                            ))}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    {detailPage.gallery.map((img,i)=>(
                        <div className="col-lg-6">
                            <div className="single-image wow fadeInUp delay-0-2s">
                                <Image key={i} width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={img} alt="gallery" />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject