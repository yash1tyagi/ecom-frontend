import React from 'react'

const Tables = (props) => {
    const { items , itemsHead, deleteProduct} = props
    return (
        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {
                                itemsHead.map((element)=>{
                                     return  <th scope="col" className="px-6 py-3">
                                     {element.th}
                                 </th>   
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((element) => {
                                return  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={element._id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <img src={element.productImage} alt="" className='h-24 w-24 border rounded-full'/>
                                </th>
                                <td className="px-6 py-4">
                                    {element.productName}
                                    {/* {element._id} */}
                                </td>
                                <td className="px-6 py-4">
                                {element.productPrice}
                                </td>
                                <td className="px-6 py-4">
                                <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                </td>
                                <td className="px-6 py-4">
                                    {/* <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                    <button onClick={()=>{deleteProduct(element._id)}} type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                                </td>
                                <td className="px-6 py-4">
                                    {/* <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                    {element.td5}
                                </td>
                            </tr>
                            })
                        }
                       
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Tables