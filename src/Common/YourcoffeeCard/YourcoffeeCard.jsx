import React from 'react'
import "./YourcoffeeCard.css"
import img1 from "../../Img/c (1).png"
export const YourcoffeeCard = ({data}) => {
  return (
    <div className={`card ${data.id == 1 ? "card_style1" : "card_style2"} p-5 mb-5 mx-2`} >
        <div className='d-flex justify-content-center align-items-center' >
            <img src={data.imgs} alt="" />
        </div>
        <div className='mt-4' >
            <p className='ycc-h-text' >{data.titel}</p>
        </div>
        <div>
            <p className='ycc-text' >
                {data.des}
            </p>
        </div>
    </div>
  )
}
