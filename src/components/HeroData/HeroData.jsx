import React from 'react'
import MainBtn from '../../Common/Button/MainBtn'
import "./HeroData.css"

const HeroData = () => {
    return (
        <div className='container pt-5 ps-5 mt-lg-5'>
            <div className="row mt-5 pt-lg-5">
                <div className="col-lg-6 col-sm-12 col-md-12">
                    <div>
                        <p className='titel_text' >We’ve got your morning covered with</p>
                    </div>
                    <div>
                        <p className='main_text' >Coffee</p>

                    </div>
                    <div>
                        <p className='p_text' >It is best to start your day with a cup of coffee. Discover the
                            best flavours coffee you will ever have. We provide the best
                            for our customers.</p>
                    </div>

                    <div className='mt-5 mb-5' >
                        <MainBtn name={"Order Now"} />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12"></div>
            </div>
        </div>
    )
}

export default HeroData
