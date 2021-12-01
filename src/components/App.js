import React, { useEffect, useState } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'

const App = () => {

    const [productsState, setProductsState] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductsState(newProductsState)
            })
    },[])
    return (
        
        <div> 

            {productsState.length > 0 ? <SearchBar productData={productsState} /> : "Loading..."}
            

            {/* <CountButton incrementBy={5} buttonColor={"blue"} /> */}

        </div>
        
    )
}

export default App