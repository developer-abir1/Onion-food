import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://mocki.io/v1/08ad5b0c-0b8f-4cb0-9453-31e50d11d2ae')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
};

export default useProduct;