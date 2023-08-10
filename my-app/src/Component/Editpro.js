import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function Editpro(){
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[price,setprice]=useState('');
    const[discount,setdiscount]=useState('');
    const[path,setpath]=useState('');


let record= useParams();
// console.log(record);
var productId=record.pid;

useEffect(()=>{
    axios.get('http://localhost:4000/products/'+productId).then(res=>{
        console.log(res.data);
        setName(res.data.name);
        setprice(res.data.price);
        setdiscount(res.data.discount);
        setpath(res.data.path);
    }

    ).catch(err=>{
        console.log(err);
    })
},[])
const update=(ev)=>{
    ev.preventDefault();
    // console.log(ev);
    var finalObj={
        name:name,
        price:price,
        discount:discount,
        path:path
    }
    console.log(update);
    axios.put('http://localhost:4000/products/'+productId, finalObj).then(res=>{
    navigate('/showpro');
    })
}

    return(
        <div className="container mt-4"> 
            <h1>Edit Form</h1>
            <form onSubmit={(ev)=>{update(ev)}}>
            <div class="form-group my-2">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" value={name} class="form-control" onChange={(ev)=>{setName(ev.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name"/>
                
                

            </div>
            <div class="form-group my-2">
                <label for="exampleInputPassword1">Price</label>
                <input  type="text" value={price} class="form-control" onChange={(ev)=>{setprice(ev.target.value)}} id="exampleInputPassword1" placeholder="Price"/>

               

            </div>
            <div class="form-group my-2">
                <label for="exampleInputPassword1">Discount</label>
                <input  type="text" value={discount} class="form-control" onChange={(ev)=>{setdiscount(ev.target.value)}} id="exampleInputPassword1" placeholder="Discount"/>

                

            </div>
            <div class="form-group my-2">
                <label for="exampleInputPassword1">Image Path</label>
                <input  type="text" value={path} class="form-control" onChange={(ev)=>{setpath(ev.target.value)}} id="exampleInputPassword1" placeholder="Image Path"/>

                
            </div>
            <button className="mt-3" type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}