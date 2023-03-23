import React from 'react'
import './Product.css';
import { useState } from 'react';


const Product = () => {

    const [companyId, setCompanyId] = useState(0);
    const [productName, setProductName] = useState("");
    const [productId, setProductId] = useState("");
    const [image, setImage] = useState("");
    const [description,setDescription]=useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      // here put data in object of product from block chain 
      console.log(`your company id ${companyId} and product name ${productName}and product id ${productId} `);
      
    }
  

  return (
    <>
    <div className='product'>
          <h1 className='heading'>Add product</h1>
        <div >

          <form onSubmit={handleSubmit} className='form-product'>


            <div className='div-product'>
              <label className='label-product'>company id</label>
              <input type="text"
                placeholder='company id'
                value={companyId}
                className="input-box"
                onChange={(event) => { setCompanyId(event.target.value) }}
              />
            </div>

            <div className='div-product'>
              <label className='label-product'>Product name</label>
              <input type="text"
                placeholder='Product name'
                value={productName}
                className="input-box"
                onChange={(event) => setProductName(event.target.value)}
              />
            </div>

            <div className='div-product'>
                <p> <label className='label-product'>Product Id</label></p>
             
              <input type="text"
                placeholder='Product Id'
                value={productId}
                className="input-box"
                onChange={(event) => setProductId(event.target.value)} />
            </div>


            <div className='div-product'>
              <label className='label-product'>Description</label>
              <input type="text"
               placeholder=' Description' 
               className="input-box"
               value={description}
               onChange={(event) => setDescription(event.target.value)}/>

                
            </div>

            <div className='div-product'>
              <label className='label-product'>Product url</label>
              <input type="text"
                placeholder='product id'
                value={image}
                className="input-box"
                onChange={(event)=>setImage(event.target.value)}
              />
            </div>
            <button type='submit' className='submit-product'>Submit</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Product
