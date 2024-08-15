import React from 'react'
import "./NewBlend.css"
import NewblendCard from '../../Common/NewblendCard/NewblendCard'
import img1 from "../../Img/s (1).png"
import img2 from "../../Img/s (2).png"
import img3 from "../../Img/s (3).png"
import img4 from "../../Img/s (4).png"

const NewBlend = () => {
  const data = [
    {
      id:"1",
      name:"Cappuccino",
      text:"Coffee 50% | Milk 50%",
      price:"$8.50",
      imgs:img2
    },
    {
      id:"2",
      name:"Chai Latte",
      text:"Coffee 50% | Milk 50%",
      price:"$8.50",
      imgs:img3
    },
    {
      id:"3",
      name:"Macchiato",
      text:"Coffee 50% | Milk 50%",
      price:"$8.50",
      imgs:img4
    },
    {
      id:"4",
      name:"Expresso",
      text:"Coffee 50% | Milk 50%",
      price:"$8.50",
      imgs:img2
    }
  ]
  return (
    <div className='bg_img_m_div px-lg-5'>
        <div className='pt-lg-5' >
          <div className='div_item_center pt-lg-5' >
            <p className='h-text-nb pt-lg-5 pt-4' >Enjoy a new blend of coffee style</p>
          </div>
          <div className='div_item_center' >
            <p className='text-nb' >Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
          </div>
        </div>

       <div className="container mt-5">
       <div className='row m-0 p-0 g-0 ' >
        {
          data?.map((res)=>{
            return(

              <div className="col-lg-3 col-sm-12 col-md-6 p-0 px-lg-4  "><NewblendCard  data={res} /></div>
            )
          })
        }
         
        </div>
       </div>
    </div>
  )
}

export default NewBlend