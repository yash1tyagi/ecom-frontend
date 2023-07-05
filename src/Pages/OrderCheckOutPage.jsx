import React from 'react'

const OrderCheckOutPage = (props) => {
    const { item, totaPrice, confirmOrderClick } = props
    // const items = item || []
    return (
        // <div>HEllo</div>
        <div className="flex flex-col justify-start items-start bg-gray-50 w-5/6 md:w-1/2 p-6 md:p-14">
            <button onClick={confirmOrderClick}>Close</button>
            <div>
                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Total items</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">{item.length}</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">{totaPrice}</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">100</p>
                </div>
                <div className="flex justify-between w-full items-center">
                    <p className="text-lg leading-4 text-gray-600">Sub total</p>
                    <p className="text-lg font-semibold leading-4 text-gray-600">{totaPrice + 100}</p>
                </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
                <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total</p>
                <p className="text-lg font-semibold leading-4 text-gray-800">{totaPrice + 100}</p>
            </div>
            <div className='mt-10 flex justify-center w-full'>
            <button className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" onClick={confirmOrderClick}>
            Confirm Order
            </button>
            </div>
         
        </div>
    )
}

export default OrderCheckOutPage