import React, { useContext } from 'react'
import { userContext } from '../context/UserContext';
import { Link } from 'react-router-dom'

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '25px',
    padding: '4%'
};

const removeBtnStyle = {
    color: 'red',
    fontWeight: 'bold',
    borderBottom: '10px solid red'
};

const imgStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    width: '120px',
    height: '120px',
};

function Card({ product, onRemove }) {

    return (
        <div style={cardStyle}>
            <Link to={`${product._id}`}>
                <div style={imgStyle}>
                    {/* <img src={product.picture.large} className={`logo`} alt={'img'} /> */}
                </div>
            </Link>

            <h3>{`${product.name} - ${product.price} `}</h3>
            {/* <h6>{`${product.category} `}</h6> */}
            {/* <p> {product.description} </p> */}

            <button style={removeBtnStyle} onClick={() => onRemove(product._id)}>
                Remove icon
            </button>
        </div>
    )
}

export default Card