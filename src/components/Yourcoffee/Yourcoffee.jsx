import React from 'react'
import "./Yourcoffee.css"
import { YourcoffeeCard } from '../../Common/YourcoffeeCard/YourcoffeeCard'
import img1 from "../../Img/c (1).png"
import img2 from "../../Img/c (2).png"
import img3 from "../../Img/c (3).png"
import img4 from "../../Img/c (4).png"
import MainBtn from '../../Common/Button/MainBtn'
const Yourcoffee = () => {
    const data = [
        {
            id:"1",
            titel:"Supreme Beans",
            des:"Beans that provides great taste",
            imgs:img1
        },
        {
            id:"2",
            titel:"High Quality",
            des:"We provide the highest quality",
            imgs:img2
        },
        {
            id:"3",
            titel:"Extraordinary ",
            des:"Coffee like you have never tasted",
            imgs:img3
        },
        {
            id:"4",
            titel:"Affordable Price",
            des:"Our Coffee prices are easy to afford",
            imgs:img4
        }
    ]
  return (
    <div className='container mt-lg-5 pt-lg-5 px-lg-5' >
        <div className='pt-lg-5 mt-lg-5' >
            <div>
                <p className='yc-h-text' >Why are we different?</p>
            </div>
            <div>
                <p className='yc-text-1' >We don’t just make your coffee, we make your day!</p>
            </div>
        </div>

        <div>
            <div className="row mt-5 pt-5">
                {
                    data?.map((res)=>{
                        return(

                <div className="col-lg-3 col-sm-12 col-md-12">
                    <YourcoffeeCard data={res} />
                </div>
                        )
                    })
                }
               
            </div>
        </div>


        <div>
            <div>
                <p className='yc-text-2'>Great ideas start with great coffee, Lets help you achieve that</p>
            </div>

            <div>
                <p className='yc-text-3'>Get started today.</p>
            </div>

            <div className='d-flex justify-content-center' >
                <MainBtn name={"Join Us"} />
            </div>
        </div>
    </div>
  )
}

export default Yourcoffee