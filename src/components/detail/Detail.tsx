import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

interface ProductDetail {
    id: number;
    images: string[];
    title: string;
    description: string;
    price: number;
}

const API_URL: string = "https://dummyjson.com/products/";

const Detail: FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const [product, setProduct] = useState<ProductDetail | null>(null);

    useEffect(() => {
        axios
            .get(`${API_URL}${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!product) return <div>Loading</div>;

    return (
        <div className="container  bg-gray-800 text-white">
            <div className="max-w-3xl mx-auto">
                <img className="w-full h-[300px] object-cover mb-4" src={product.images[0]} alt={product.title} />
                <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                <p className="text-xl mb-4">Price: {product.price} $</p>
                <p className="mb-6">{product.description}</p>
            </div>
        </div>
    );
};

export default Detail;
