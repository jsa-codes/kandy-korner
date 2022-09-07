import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Products.css"

export const ProductList = () => {

    // Setting Products to "Initial State"
    const [products, setProducts] = useState([])
    // Setting State to topPricedProducts
    const [topPriced, setTopPriced] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const navigate = useNavigate()
    
    

    useEffect(
      () => {
        // Go get ALL of the tickets (We are logged in as an employee by default)
        // Employees can see all tickets
        fetch(`http://localhost:8088/products?_expand=productType`)
        //Get the response back, parse the json data into an actual JS array
          .then(response => response.json())
          // Pass in a parameter to capture all of that data we got after all of the json processes are done
          .then((productArray) => {
            // Call the setter function ("setTickets")
            // Pass it what we want the new value to be
              setProducts(productArray)
          })
    // When this array is empty, you are observing initial component state
    }, []
  )

  


  useEffect(
    () => {
      // IF true...
      
        setFilteredProducts(products)
      
    }, [ products ]
  )

   useEffect(
    () => {
      // IF true...
      if (topPriced) {
        
        const topPricedProducts = products.filter(product => product.unitPrice > 10)
        setFilteredProducts(topPricedProducts)
      }
      else {
        setFilteredProducts(products)
      }
    }, [ topPriced ]
  )

  

     return <>

     {
        
         <>
         <button onClick={ () => {setTopPriced(true) } } >Top Priced Products</button>
         <button onClick={ () => {setTopPriced(false) } } >Show All Products</button>
         <button onClick={() => navigate("/product/create")}>Create Product</button>
         </>
         
        
    }
        <h2>All Products</h2>

        <article className='products'>
        {
            filteredProducts.map(
                (product) => {
                    return <section className="product" key={`product--${product.id}`}>
                    <header>Product: {product.productName}</header>
                    <p>Price: ${product.unitPrice}</p>
                    <footer>Candy Type: {product?.productType?.type}</footer>
                    </section>
                }
            )
        }
        </article>

        </>

   


  
}