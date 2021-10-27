import React from 'react';
import useCard from '../../hooks/useCard';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../localStore/localStore';
import ProductDitels from '../ProductDitels/ProductDitels';
import TotalValue from '../totalValue/TotalValue';

const ProductData = (props) => {
    const [product] = useProduct()
    const [card, setCard] = useCard(product);



    const handleRemoveItem = product => {
        const removeProduct = card.filter(pd => pd._id !== product)

        setCard(removeProduct)
        removeFromDb(product)
    }

    return (
        <div className=" flex  ">

            <div className=" md:w-3/4  sm:w-2/5   ">
                <div className="  ">
                    {
                        card.map((item, index) => <ProductDitels
                            key={index}
                            item={item}
                            handleRemoveItem={handleRemoveItem}

                        ></ProductDitels>)
                    }
                </div>
            </div>
            <div className="    flex justify-center  border-l-2  ">
                <div className="ml-5  m-2">


                    <TotalValue card={card}></TotalValue>

                </div>

            </div>


        </div>
    );
};

export default ProductData;