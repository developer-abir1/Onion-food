import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://mocki.io/v1/88ac7391-294f-4699-a20f-eaaec2e50832')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])






    return [product, setProduct]
};

export default useProduct;