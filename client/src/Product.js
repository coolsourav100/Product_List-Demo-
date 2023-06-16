import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    let amount = 0
    const [price , setPrice] = useState(0)
    const [product , setProduct] = useState('')
    const [resData , setResData] = useState([])
    const [toggle , setToggle] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:3000/').then((res)=>{
            setResData(res.data)
        }).catch(err=>console.log(err))
    },[toggle])
    const priceOnChange =(e)=>{
setPrice(e.target.value)
    }
    const productOnChange =(e)=>{
setProduct(e.target.value)
    }
const submitHandler =(e)=>{
e.preventDefault();
axios.post('http://localhost:3000/',{price,product}).then((res)=>{
    setToggle(!toggle)
    console.log(res)}).catch((err)=>console.log(err))
setPrice(0)
setProduct('')
}
const deleteHandler=(id)=>{
axios.delete(`http://localhost:3000/${id}`).then(res=>{

    setToggle(!toggle)
    console.log(res)}).catch(err=>console.log(err))
}
console.log(resData)
  return (
    <div>
        <form onSubmit={submitHandler}><label>Selling Price</label>
            <input type='number' name='price' value={price} onChange={priceOnChange}/>
            <label>Selling Product</label>
            <input type='text' name='product' value={product} onChange={productOnChange}/>
            <button type='submit'>Add Product</button>
        </form>
        <ol>
        {resData?.map(item=>{
            amount+=item.price
            return(
                <li>Product Name : {item.product} Product price :{item.price} <button onClick={()=>deleteHandler(item.id)}>Delete</button></li>
                )
            })}
            </ol>
            <h3>Products </h3>
            <span>The Value Worth of Product Rs .{amount}</span>
    </div>
  )
}

export default Product