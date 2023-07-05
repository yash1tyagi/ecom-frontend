import React, { useContext } from 'react'
import CustomerContex from './Context/Customer/CustomerContext' ;
import { Link } from 'react-router-dom';
const Gallary = (props) => {
    const context = useContext(CustomerContex)
    const {onClick} = context
    const { items, title} = props
    const item = items || []
    return (
        // <div>
        //     {
        //         item.map((element)=>{
        //             if (element == undefined) {
        //                 element = {}
        //             }
        //             else{
        //                 console.log(element.productName)
        //             }
                   
        //         })
        //     }
        // </div>
        <div>
            <div className="mt-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</div>
            <div className=''>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* <div className="flex border border-red-700  overflow-y-auto gap-4"> */}
                    {
                        item.map((element) => {
                            if (element === undefined) {
                                element = {}
                            }
                            else{
                            return <Link  to={ localStorage.getItem("Customer-token")?'/productPage/'+element._id: "/login"} key={element._id} className='scroll-ml-6 snap-start'>

                                <img className="md:h-96 md:max-w-80 h-48 max-w-40 rounded-lg" src={element.productImage} alt="" />
                                <div>
                                    <div className='text-center text-lg'>{element.productName}</div>
                                </div>
                            </Link>}
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Gallary