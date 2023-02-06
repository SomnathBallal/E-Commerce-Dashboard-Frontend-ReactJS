import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");

    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.log(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    }

    const UpdateProduct = async () => {
        console.log(name, price, category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({name, price, category, company}),
            headers:{
                "Content-Type" : "application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json();
        console.log(result);
        navigate("/")
    }


    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="tex" placeholder="Enter Product Name" className="inputBox" onChange={(e) => { setName(e.target.value) }} value={name} />

            <input type="tex" placeholder="Enter Product Price" className="inputBox" onChange={(e) => { setPrice(e.target.value) }} value={price} />

            <input type="tex" placeholder="Enter Product Category" className="inputBox" onChange={(e) => { setCategory(e.target.value) }} value={category} />

            <input type="tex" placeholder="Enter Product Company" className="inputBox" onChange={(e) => { setCompany(e.target.value) }} value={company} />
            <button className="appButton" onClick={UpdateProduct}>Update Product</button>

        </div>
    )
}

export default UpdateProduct;