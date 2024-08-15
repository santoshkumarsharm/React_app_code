import React from 'react'
import "./Amazingmorning.css"
import MainBtn from '../../Common/Button/MainBtn'
import img1 from "../../Img/cup.png"
export const Amazingmorning = () => {
    return (
        <div className='bg-img-gm ' >
            <div className='container p-5 ' >
                <div className="row m-0 p-0 g-0 pt-5 mt-5">
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div>
                            <p className='am-text1' >Get a chance to have an
                                Amazing morning</p>
                        </div>
                        <div>
                            <p className='am-text2' >We are giving you are one time opportunity to
                                experience a better life with coffee.</p>
                        </div>
                        <div className='my-5' >
                            <MainBtn name={"Order Now"} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12">
                        <div className="d-flex justify-content-center align-content">
                            <img  className='img_index' src={img1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
