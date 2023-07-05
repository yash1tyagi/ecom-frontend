import React, { useState } from 'react'

const Forms = (props) => {
    const { item, text, SetText , Submit } = props
    const onchange = ((e) => {
        SetText({ ...text, [e.target.name]: e.target.value })
    })
    return (
        <div>
            <form onSubmit={Submit}>
                {
                    item.map((elements) => {
                        return <div className="mb-6" key={elements.label}>

                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{elements.label}</label>
                            <input type={elements.type} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name={elements.name} onChange={onchange} />

                

                        </div>
                    })
                }
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default Forms


