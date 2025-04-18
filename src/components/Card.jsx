import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ title, description, image, id }) => {

    const navigate = useNavigate();
    return (
        <div >
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => navigate(`/product/${id}`)}>See more</button>
                </div>
            </div>
        </div>
    )
}

export default Card