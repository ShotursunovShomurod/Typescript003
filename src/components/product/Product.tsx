import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

interface Products {
    id: number;
    images: string[];
    title: string;
    description: string;
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

    const productsItem: JSX.Element[] | undefined = data?.map((product: Products): JSX.Element => (
        <div key={product.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img className="w-full h-56 object-contain" src={product.images[0]} alt={product.title} />
            <div className="p-6">
                <Link to={`/product/${product.id}`} className="text-yellow-400 hover:text-yellow-500 font-semibold transition-colors duration-300">
                    <h2 className="text-2xl font-bold text-yellow-300 mb-2">{product.title}</h2>
                </Link>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {product.description}
                </p>
                <h3 className="text-lg text-gray-400 font-semibold">${product.price}</h3>
            </div>
        </div>
    ));

    return (
        <div className="grid grid-cols-1 bg-slate-900 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {productsItem}
        </div>
    );
};

export default Product;