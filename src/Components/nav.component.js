import React, { Component } from 'react'
export default class Nav extends Component{
    render(){
        return(
            <div>
                <nav id="navBar" className="navbar navbar-expand-lg ">
                    <div className="container-fluid" >
                        <a className="navbar-brand" href="#">GHRIET-DC  
                        <img src="" alt="" width="30" height="24"/>
                        </a>
                        <button id="navbtn navbtn1" className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    
                        <div className="justify-content-end collapse navbar-collapse " id="navbarSupportedContent">
                        
                        <ul className="navbar-nav"  >
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu animate__animated animate__fadeIn" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">None</a>
                            </li>
                        </ul>    
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}