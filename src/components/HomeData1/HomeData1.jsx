import React from 'react'
import "./HomeData1.css"
import img1 from "../../Img/Mask group.png"
import MainBtn from "../../Common/Button/MainBtn.jsx"

const HomeData1 = () => {
  return (
    <div className='mt-5 pt-5 container px-5' >
        <div className='mt-5 pt-5' >
       <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-12 mt-5 pt-lg-5">
            <div className='pt-lg-5'>
                <p className='h-text' >Discover the best coffee</p>
            </div>
            <div>
                <p className='p-text' >Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
            </div>
            <div className='mt-5' >
                <MainBtn name={"Learn More"} />
            </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12 px-5">
            <img className='img img-cup ms-lg-5' src={img1} alt="" />
        </div>
       </div>
        </div>
    </div>
  )
}

export default HomeData1