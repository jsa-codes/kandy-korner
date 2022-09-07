import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductForm.css"


export const ProductForm = () => {

    const [productTypes, setProductTypes] = useState([])

    const [product, update] = useState({
            productName: "",
            productTypeId: "",
            unitPrice: ""
            
        })

        

    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then((productTypeArray) => {
                setProductTypes(productTypeArray)
            }

            )
        }, 
        []
    )
    

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the button");

        const productToSendToAPI = {
            productName: product.productName,
            productTypeId: parseInt(product.productTypeId),
            unitPrice: product.unitPrice
        }
            
        // Perform the fetch() to POST the object to the API (ALL post operations happen with this URL)
        // The default method on a fetch call is "GET"
        // This is a POST (or Create) operation which requires a second argument
        // The second argument in this fetch call is represented by the comma after the URL and the {} and is our "options"
        // "Content-type" is a type of header
        // The json server wants to know it is being passed json, and this is how we specify it with an HTTP header
        // Last is the body of the request itself...is the information that the client wants the API to save
        // We can't send a raw JS object, we have to stringify it with JSON.stringify
            return fetch(`http://localhost:8088/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productToSendToAPI)
            })
                .then(response => response.json())
                .then(() => {
                    navigate("/products")
                })


    }     

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Product to List</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Product Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of product"
                        value={product.productName}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.productName = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Type:</label>
                        <select onChange={
                            (event) => {
                                const copy = {...product}
                                copy.productTypeId = event.target.value
                                update(copy)
                            }
                        }>
                   {
                    productTypes.map(
                        (type) => {
                            return <option value={type.id}>{type.type}</option>
                        }
                    )
                   }
                       
                        
                        
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Price:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        value={product.unitPrice}
                        onChange={
                            (event) => {
                                const copy = {...product}
                                copy.unitPrice = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )
}


