import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <div className="container" >
                <div className="row">
                    <div className="col-xxl-6">
                        <Link to="/">HOME </Link>
                    </div>
                    <div className="col-xxl-6 link">
                        <Link to="/showPro">Show Products</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}