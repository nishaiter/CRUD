import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function Deletepro(){
    let navigate=useNavigate();
    let record= useParams();
    // console.log(record.pid);
    var productId=record.pid;

    useEffect(()=>{
        axios.delete('http://localhost:4000/products/'+productId).then(res=>{
            console.log(res);
            navigate('/showpro')
        }).catch(err=>{
            console.log(err);
        })
    },[])

    return(
        <></>
    )
}