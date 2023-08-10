import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Addpro(){
    const[api,SetApi]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/products').then((res)=>{
            console.log(res.data);
            SetApi(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="text-center display-6 show">Show All Products</div>
                {
                api && api.map(obj =>
                    <div className="col-md-3 photo">
                        <img src={obj.path} className="img-responsive"/>
                        <h2>{obj.price}</h2>
                        <p>{obj.name}</p>
                        <p>
                            <button>Add to cart</button>
                        </p>
                        <p>
                            <Link to={'/editpro/'+obj.id}>Edit</Link>
                            &nbsp; &nbsp;
                            <Link to={'/deletepro/'+obj.id}>Delete</Link>
                        </p>
                    </div>
                )

                }
            </div>
        </div>
        
    )
}