import React from 'react'
import "./Header.css"
import logo from "../../Img/Logo.png"
import MainBtn from '../../Common/Button/MainBtn'
const Header = () => {
    return (
        <div className="bg_img">
            <nav className="navbar navbar-expand-lg bg-body-tertiary container pt-5 ps-5 ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className='img nav-img' src={logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav gap-5 mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Contact Us</a>
                            </li>

                        </ul>
                        <div className='d-flex justify-content-lg-center align-items-center gap-5' >
                            <div><a href="http://" className='nav-sign-btn' target="_blank" rel="noopener noreferrer">Sign In</a></div>
                            <div>
                                <MainBtn name={"SingUp"} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header