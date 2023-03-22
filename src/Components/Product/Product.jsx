import React from 'react'
import './Product.css';
import { useState } from 'react';


const Product = () => {

    const [companyId, setCompanyId] = useState(0);
    const [productName, setProductName] = useState("");
    const [productId, setProductId] = useState("");
    const [image, setImage] = useState("");
    
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
              <label className='lable-product'>company id</label>
              <input type="text"
                placeholder='company id'
                value={companyId}
                onChange={(event) => { setCompanyId(event.target.value) }}
              />
            </div>

            <div className='div-product'>
              <label className='lable-product2'>Product name</label>
              <input type="text"
                placeholder='Product name'
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
              />
            </div>

            <div className='div-product'>
              <label className='lable-product'>Product Id</label>
              <input type="text"
                placeholder='Product Id'
                value={productId}
                onChange={(event) => setProductId(event.target.value)} />
            </div>


            <div className='div-product'>
              <label className='lable-product'>Description</label>
              <input type="text" placeholder=' Description' />
            </div>

            <div className='div-product'>
              <label className='lable-product'>Product url</label>
              <input type="text"
                placeholder='company id'
                value={image}
                onChange={(event) => setImage(event.target.value)}
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
