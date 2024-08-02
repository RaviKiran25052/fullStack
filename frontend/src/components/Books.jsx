import React, { useState } from 'react'
import axios from 'axios'

const Books = () => {
    const [name, setName] = useState('')
    const [desp, setDesp] = useState('')
    const [price, setPrice] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2024/books/add', {name, desp, price})
        .then((res)=> alert(res.data.message))
        .catch((err) => alert("fuckkkkkkk...!"))
    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit} method="post" className='formCont'>
                <div className="formInptCont">
                    <label htmlFor="bookName">Name:</label>
                    <input type="text" name="bookName" onChange={(e)=>setName(e.target.value)} id="bookName" />
                </div>
                <div className="formInptCont">
                    <label htmlFor="bookDesp">Description:</label>
                    <input type="text" name="bookDesp" onChange={(e)=>setDesp(e.target.value)} id="bookDesp" />
                </div>
                <div className="formInptCont">
                    <label htmlFor="bookPrice">Price</label>
                    <input type="number" name="bookPrice" onChange={(e)=>setPrice(e.target.value)} id="bookPrice" />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Books