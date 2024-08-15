import React from 'react'
import "./NewblendCard.css"
import img1 from "../../Img/s (2).png"
import MainBtn from '../Button/MainBtn'
const NewblendCard = ({data}) => {
    return (
        <div>
            <div className="card New_b_card">
                <img src={data?.imgs} alt="" className="img-fluid" />
                <div className='pt-4' >
                    <p className='n-c-text-1' >{data.name}</p>
                </div>
                <div>
                    <p className='n-c-text-2' >{data.text}</p>
                </div>
                <div>
                    <p className='n-c-text-3 mb-5 pb-4' >{data.price}</p>
                </div>

<div className="btn-div">
    <MainBtn name={"Order Now"} />
</div>
            </div>
        </div>
    )
}

export default NewblendCard