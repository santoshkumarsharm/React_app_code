import React from 'react'
import "./Footer.css"
import ind from "../../Img/ins.png"
import yt from "../../Img/yt.png"
import fc from "../../Img/fc.png"
import tw from "../../Img/te.png"
const Footer = () => {
  return (
    <div className='foo_bg_img' >
        <div className='container pt-5  mt-5' >
            <div className="row pt-5 mt-5">
                <div className="col-lg-3 col-sm-12 col-md-12">
                    <div>
                        <div>

                            <p className="logo_text">Bean Scene</p>
                        </div>
                        <div >
                            <p className="footar_text_1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div>
                            <div className='d-flex gap-5' >
                                <div>
                                    <img src={fc} alt="" />
                                </div>
                                <div>
                                    <img src={ind} alt="" />
                                </div>
                                <div>
                                    <img src={yt} alt="" />
                                </div>
                                <div>
                                    <img src={tw} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12 link_div ps-lg-5">
                    <div>
                        <p className="link_h">About</p>
                    </div>
                    <div className='mt-lg-5' >
                        <a rel="stylesheet" href="" > Menu </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > Features </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > News & Blogs </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > Help & Supports </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12 link_div">
                    <div>
                        <p className="link_h">Company</p>
                    </div>
                    <div className='mt-lg-5'>
                        <a rel="stylesheet" href="" > How we work </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > Terms of service </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > Pricing </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > FAQ </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-12 link_div">
                    <div>
                        <p className="link_h">Contact Us</p>
                    </div>
                    <div className='mt-lg-5'>
                        <a rel="stylesheet" href="" > Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016 </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > +1 202-918-2132 </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > beanscene@mail.com </a>
                    </div>
                    <div>
                        <a rel="stylesheet" href="" > www.beanscene.com </a>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Footer