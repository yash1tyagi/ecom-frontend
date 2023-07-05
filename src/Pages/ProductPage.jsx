import React, { useContext, useEffect, useState, cache } from 'react'
import { Link, useParams } from 'react-router-dom'
import CustomerContex from '../Context/Customer/CustomerContext'
import { useNavigate } from "react-router-dom";
import OrderCheckOutPage from './OrderCheckOutPage';
import SimilarProduct from '../Componants/SimilarProduct';

const ProductPage = () => {
  const context = useContext(CustomerContex)
  const { id } = useParams()
  const { viewOneProduct, product, addToCart, OrderProduct } = context
  const [text, SetText] = useState("")
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    viewOneProduct(id)
  }, [])
  let navigate = useNavigate();
  // console.log(quantity);
  const addCart = (async (e) => {
    if (localStorage.getItem('Customer-token')) {
      
   
    if (product.sizeRequire == true) {
      if (text == "") {
        alert("Size is Require")
      }
      else {
        addToCart(id, quantity, text)
        alert("Successfull")
        // console.log("If is working")
      }
    }
    else if (product.sizeRequire == false) {
      addToCart(id, quantity, text)
      alert("Successfull")
      console.log({id , quantity})
    }
    else {
      alert("Not added")
    } 
  }
  else{
    navigate('/login')
  }
  })

  const size = product.availableSize || []
  // console.log(size)


  const handleClick = ((value) => {
    console.log(value);
    SetText(value)

  })

  // ORder Items
  const [view, SetView] = useState(false)
  const orderClick = (() => {
    if (localStorage.getItem('Customer-token')) {
      if (product.sizeRequire == true) {
        if (text == "") {
          alert("Size is Require")
        }
        else {
          SetView(true)
        }
      }
      else{
        SetView(true)
      }
 
    // console.log(order)
    }
    else{
      navigate('/login')
    }
  })

  // conform Order
  const totalPrice = quantity * product.productPrice
  const confirmOrderClick = (() => {
    OrderProduct(id, quantity, text, totalPrice)
    SetView(false)
    // console.log("Working");
  })



const items = [
  {

  }
]

  return (
    <div>
      {
        view?<div className='absolute  h-60 w-full flex justify-center items-center'>
        <OrderCheckOutPage item={items} totaPrice = {totalPrice} confirmOrderClick={confirmOrderClick} />
      </div>:""
      }
  
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">{product.productName}</h1>
          </div>
          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className=" mt-4">
                <img
                  alt="Tee"
                  src={product.productImage}
                  className=""
                />
              </div>

            </div>
            <div className="">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold">Color</legend>

                  <div className="mt-2 flex flex-wrap gap-1">
                    <label htmlFor="color_green" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_green"
                        name="color"
                        className="peer sr-only"
                        checked
                      />

                      <span
                        className="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                      ></span>
                    </label>

                    <label htmlFor="color_blue" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_blue"
                        name="color"
                        className="peer sr-only"
                      />

                      <span
                        className="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                      ></span>
                    </label>

                    <label htmlFor="color_pink" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_pink"
                        name="color"
                        className="peer sr-only"
                      />

                      <span
                        className="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                      ></span>
                    </label>

                    <label htmlFor="color_red" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_red"
                        name="color"
                        className="peer sr-only"
                      />

                      <span
                        className="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                      ></span>
                    </label>

                    <label htmlFor="color_indigo" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_indigo"
                        name="color"
                        className="peer sr-only"
                      />

                      <span
                        className="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                      ></span>
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-lg font-bold">Size</legend>

                  <div className="mt-2 flex flex-wrap gap-1">
                    {
                      size.map((element) => {
                        return <label htmlFor="material_cotton" className="cursor-pointer">
                          <input
                            type="radio"
                            id=""
                            name="size"
                            className="peer sr-only"
                            checked
                          />

                          <span
                            className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100" onClick={() => handleClick(element)}
                          >
                            {element}
                          </span>
                        </label>
                      })

                    }



                  </div>
                </fieldset>

                <div className="rounded border bg-gray-100 p-4">
                  <p className="text-sm flex flex-row justify-around">
                    <span className="block">Your size</span>
                    <span className="block">{text == "" ? "?" : text}</span>
                    {/* <a href="" className="mt-1 inline-block underline"> Find out more </a> */}
                  </p>
                </div>
                <div className="rounded border bg-gray-100 p-4">
                  <p className="text-sm flex flex-row justify-around">
                    <span className="block">Quantity</span>
                    <span className="block">{quantity}</span>
                    <div className='flex flex-col'>
                      <div onClick={() => { setQuantity(quantity + 1) }}>
                        <svg className='w-6 h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg></div>
                      <div onClick={() => { quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1) }}>
                        <svg className='w-6 h-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></div>
                    </div>
                    {/* <a href="" className="mt-1 inline-block underline"> Find out more </a> */}
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">{product.productPrice}</p>
                </div>

                <div onClick={addCart}
                  type="submit"
                  className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white cursor-pointer text-center"
                >
                  Add to cart
                </div>

                <button
                  type="button"
                  className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                  onClick={orderClick}
                >
                  Order Now
                </button>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam
                  eos iusto repellat blanditiis voluptate aspernatur, quae nemo
                  exercitationem cum debitis! Sint consectetur laborum tempora
                  repellat odit. Impedit quasi reprehenderit harum illum sequi
                  provident soluta cum quisquam odit possimus? Officia illum saepe
                  magnam nostrum, officiis placeat iure itaque cumque voluptate?
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <SimilarProduct productName= {product.productName}/>
    </div>
  )
}

export default ProductPage













// {
//   order ?<div className=' absolute  h-full w-5/6 flex justify-center items-center'> <div className="absolute max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

//     <div className="p-5">
//       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Addres</h5>
//       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I am yash tyagi and i am  a web
//         devlaper</p>
//       <hr />
//       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Product</h5>
//       <div>
//         <div className='flex flex-row justify-around'>
//             <div>Product Name</div>
//             <div>{product.productName}</div>
//         </div>
//         <div className='flex flex-row justify-around'>
//             <div>Quantity</div>
//             <div>{quantity}</div>
//         </div>
//         <div className='flex flex-row justify-around'>
//             <div>Total Amount</div>
//             <div>{product.productPrice*quantity}</div>
//         </div>
//       </div>
//       <hr/>
//       <div>Payment Type</div>
//       <div>Cash on Dilery</div>
//     </div>
//     <div onClick={confirmOrderClick}
//             type="submit"
//             className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white cursor-pointer text-center"
//           >
//             Confirm order
//           </div>
//   </div> </div> : ""
// }


