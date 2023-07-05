import React, { useContext, useEffect } from 'react'
import Card from '../../card'
import SellerContex from '../sellerContext/SellerContext';
import Tables from '../../tables';
const ViewProduct = () => {
    const context = useContext(SellerContex)
    const {view, viewProduct, productDelete} = context
    useEffect(() => {
        viewProduct()
    })
    const tableHead = [
        {
            th : "Image"
        },
        {
            th : "Product Name"
        },
        {
            th  : "Product Price"
        },
        {
            th : "Update"
        },
        {
            th : "Delete"
        }
    ]
 const deleteProduct = ((id)=>{
    // e.preventDefault();
    // confirm('')
    if (window.confirm("You want to delete this item")==true) {
        productDelete(id)
    }
    // console.log(id)
   
 })
    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-center mt-5'>
            <div class="inline-flex rounded-md shadow-sm">
                <a href="#" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    View All Product
                </a>
                <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Veiw High Sale Product
                </a>
                <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    View Low sale Product
                </a>

            </div>
            </div>
            {/* <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>  */}
            <div className='flex justify-center mt-5'> 
            {/* <Card items = {view}/> */}
            <div className='w-1/2'>
            <Tables itemsHead = {tableHead} items = {view} deleteProduct = {deleteProduct}/>
            </div>
        </div>
        </div>
    )
}

export default ViewProduct