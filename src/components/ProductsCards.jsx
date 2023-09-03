import React, { useEffect, useState } from 'react'
import Card from './Card';
import { server } from '../environment/env-variables';

function ProductsCards() {
    const url = server + '/api/products';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchproducts = async () => {
            let data = [];
            try {
                const res = await fetch(url);
                data = await res.json();
            } catch (error) {
                console.error(error);
            };
            setProducts(data);
        };
        fetchproducts();
    }, []);

    const handleRemove = (id) => {
        setProducts(p => p.filter(x => x._id !== id))
    };

    return (
        <>
            {
                products && products.map(product => {
                    return (
                        <Card
                            key={product._id}
                            product={product}
                            onRemove={handleRemove}
                        />
                    )
                })
            }
        </>
    );
}

export default ProductsCards