import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(
      () => {
        // Go get ALL of the tickets (We are logged in as an employee by default)
        // Employees can see all tickets
        fetch(`http://localhost:8088/products`)
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
  );

  
}