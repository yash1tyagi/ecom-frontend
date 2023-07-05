import React, { useContext, useEffect } from 'react'
import Gallary from '../Gallary'
import CustomerContex from '../Context/Customer/CustomerContext'
import Spinner from './Spinner'
const Home = () => {
    const context = useContext(CustomerContex)
    const {view, viewProduct} = context
    useEffect(() => {
        viewProduct()
    })
   
    const filterFootware = view.filter((element)=>{
        return element.productCategory == "Footware"
    })
    const filterClothes = view.filter((element)=>{
        return element.productCategory == "Clothes"
    })
       const watche = view.filter((element)=>{
        return element.productName == "Watch"
    })
       const grocery = view.filter((element)=>{
        return element.productCategory == "Grocery"
    })
    const FewItems = ((a,b,c,d)=>{
        return [a,b,c,d]
    })
    const footwreFilter = FewItems(filterFootware[0],filterFootware[1],filterFootware[2],filterFootware[3])
    const watcheFilter = FewItems(watche[0],watche[1],watche[2],watche[3])
    const groceryFilter = FewItems(grocery[0],grocery[1],grocery[2],grocery[3])
    const clothesFilter = FewItems(filterClothes[0],filterClothes[1],filterClothes[2],filterClothes[3])

    // filterFootware.map((element)=>{
    //     console.log(element.productName)
    // })

    // console.log(view)
    return (
        <div>
            {view.length == 0 ?<Spinner/>:<div className='mt-5 flex justify-center flex-col'>
                <Gallary items = {footwreFilter} title= "Mens Footware" />
                <Gallary items = {clothesFilter} title= "Tranding Clothes" /> 
                 <Gallary items = {watcheFilter} title= "Watch" />
               <Gallary items = {groceryFilter} title= "Grocery" />
            </div>}
        </div>
    )
}

export default Home