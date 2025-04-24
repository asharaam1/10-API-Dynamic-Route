import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ title, description, image, id }) => {

    const navigate = useNavigate();
    return (
        <div className="card w-74 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Product Image" className="rounded-t-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-gray-500">{description}</p>
                <div className="card-actions justify-between">
                    <button className="btn btn-primary" >Add to Cart</button>
                    <button className="btn btn-outline" onClick={() => navigate(`/product/${id}`)}>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Card