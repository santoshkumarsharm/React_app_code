import React from 'react'
import "./Subscribe.css"
const Subscribe = () => {
    return (
        <div className='bottom_img' >
           <div className="container" style={{zIndex:"9999"}}>
           <div>
                <p className="bt_h_text">Subscribe to get the Latest News</p>
            </div>
            <div className='mt-5'>
                <p className="bt_text">Don’t miss out on our latest news, updates, tips and special offers</p>
            </div>

            <div className='div_inp my-5' >
            <div class="input-group mb-3 inp_text">
  <input type="text" class="form-control" placeholder="Enter your mail" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append ">
    <span class="input-group-text btn_h" id="basic-addon2">Suscribe</span>
  </div>
</div>
            </div>
           </div>
        </div>
    )
}

export default Subscribe