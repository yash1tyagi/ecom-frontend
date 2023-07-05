import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState();
    const handleChange = ((e)=>{
        setSearch({...search,[e.target.name]: e.target.value})

    })
    const handleClick = ((e)=>{
        e.preventDefault()
        localStorage.getItem('Customer-token')?
        navigate(`/viewProduct/${search.search}`):
        navigate(`/login`)
        setSearch('')
        // console.log(search.search)
    })
  return (
    <div>
        <form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange = {handleChange} name='search'/>
        <button on onClick={handleClick} type="submit" className="text-black absolute right-2.5 bottom-2.5 ">
        <svg aria-hidden="true" className="w-5 h-5 mb-1.5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
    </div>
</form>
    </div>
  )
}

export default SearchBox