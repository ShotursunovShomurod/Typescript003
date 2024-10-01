import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

interface Products {
    id: number;
    images: string[];
    title: string;
    price: number;
}

const API_URL: string = "https://dummyjson.com/products/";

const Product: FC = () => {
    const [data, setData] = useState<Products[] | null>(null);

    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => setData(res.data.products))
            .catch((res) => console.log(res));
    }, []);

    let productsItem: JSX.Element[] | undefined = data?.map((product: Products): JSX.Element => (
        <div key={product.id} className="flex bg-gray-700 p-4">
            <img className="w-[100px] object-contain" src={product.images[0]} alt="" />
            <div className="ml-4">
                <h2 className="text-yellow-100">{product.title}</h2>
                <h3>{product.price} $</h3>
                <Link to={`/product/${product.id}`} className="text-blue-400 underline">
                    View Details
                </Link>
            </div>
        </div>
    ));

    return (
        <div className="flex-wrap gap-3 grid grid-cols-4">
            {productsItem}
        </div>
    );
};

export default Product;
