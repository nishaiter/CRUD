import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function Addpro(){
    let navigate=useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:4000/products',data).then(res=>{
            console.log("res");
            console.log(res);
            navigate('/showPro');
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <div className="container">
        <div className="row">
            <div className="text-center display-6 show">Add Products</div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group my-2">
                <label for="exampleInputEmail1">Name</label>
                <input {...register("name", {required: true, minLength: 5 })} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name"/>
                
                {errors.name?.type === 'required' && "Product name is required"}
                {errors.name?.type === 'minLength' && "Product name Length:5"}

            </div>
            <div class="form-group my-2">
                <label for="exampleInputPassword1">Price</label>
                <input {...register("price",{ required: true})} type="text" class="form-control" id="exampleInputPassword1" placeholder="Price"/>

                {errors.price?.type === 'required' && "Product price is required"}

            </div>
            <div class="form-group my-2">
                <label for="exampleInputPassword1">Discount</label>
                <input {...register("discount",{ required: true, min: 0, max:100 })} type="text" class="form-control" id="exampleInputPassword1" placeholder="Discount"/>

                {errors.discount?.type === 'required' && "Product discount is required"}
                {errors.discount?.type === 'min' && "Product discount:0"}
                {errors.discount?.type === 'max' && "Product discount:100"}

            </div>
            <div class="form-group my-2">
                <label for="exampleInputPassword1">Image Path</label>
                <input {...register("path",{ required: true })} type="text" class="form-control" id="exampleInputPassword1" placeholder="Image Path"/>

                {errors.path?.type === 'required' && "Product path is required"}

            </div>
            <button className="mt-3" type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
        
    )
}