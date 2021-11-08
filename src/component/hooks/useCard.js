import React, { useEffect, useState } from 'react';

const useCard = product => {

    const [card, setCard] = useState([])
    useEffect(() => {
        if (product.length) {

        }
    }, [product])


    return [card, setCard]
};

export default useCard;