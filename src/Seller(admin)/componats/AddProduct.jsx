import React, { useContext, useState } from 'react'
// import Forms from "../../Componants/Form"
import SellerContex from '../sellerContext/SellerContext';
export const AddProduct = () => {
    const [text, SetText] = useState('')
    const [picLoading, setPicLoading] = useState(false);
    const [pic, setPic] = useState();
    const context = useContext(SellerContex)
    const {addProduct} = context
// Cenver String to Array (Avalivable Size input fild)
    const canvertStringToArray = ((x) => {
        if (x == undefined) {
            x = ''
        }
        const a = []
        for (let index = 0; index < x.length; index++) {
            if (x[index] == ',') {
                continue
            }
            a.push(x[index])

        }
        return a
    })


    const onchange = ((e) => {
        SetText({ ...text, [e.target.name]: e.target.value })
    })


    const submit = (async (e) => {
        e.preventDefault();
        const a = canvertStringToArray(text.availableSize)
        if (text.sizeRequire == undefined) {
            text.sizeRequire = false
        }
        else if (text.sizeRequire == 'No') {
            text.sizeRequire = false
        }
        else {
            text.sizeRequire = true
            if (text.availableSize == '' || text.availableSize == undefined) {
                alert('please add avaliable size')
            }
        }
        text.availableSize = a
        addProduct(text)
        // console.log(text)
    })



// Image uplad
  const imgPost = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
        alert("Please Upload Product Image")
      return;
    }
    console.log(pics);
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/dvq4ophvw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          text.productImage = data.url.toString();
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
 
      setPicLoading(false);
      return;
    // }
  };



    return (
        <div className='flex justify-center flex-col mt-4' >
            <div className='text-2xl text-center'>Add Product</div>
            <div className='flex justify-center w-full mt-4'>
                <div className='w-1/2' >
                    <form onSubmit={submit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='productName' onChange={onchange} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='productPrice' onChange={onchange} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Categoey</label>
                            {/* <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='productCategory' onChange={onchange} /> */}
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='productCategory' onChange  = {onchange} defaultValue='No'>
                            <option selected >Product Category</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Footware">Footware</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Mobile Asscessories">Mobile Asscessories</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Books">Books</option>
                            <option value="Others">Others</option>
                        </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                            <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='productImage'  onChange={(e) => imgPost(e.target.files[0])} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='productDescription' onChange={onchange} />
                        </div>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size require</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='sizeRequire' onChange  = {onchange} defaultValue='No'>
                            <option selected >Size require</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
    
                        </select>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Available Size</label>
                            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='availableSize' onChange={onchange} />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" isLoading={picLoading}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
