import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import useFetchById from '../hooks/useFetchById';

const url = 'https://randomuser.me/api/?uuid=';

function ProductsPage() {

    const { id } = useParams();

    const { entity: product } = useFetchById(url, id);

    return (
        product && <Card product={product} />
    )
}

export default ProductsPage