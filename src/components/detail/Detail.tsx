import { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL: string = "https://dummyjson.com/products/";

interface ProductDetail {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}

interface DetailState {
  product: ProductDetail | null;
  isLoading: boolean;
  isPurchased: boolean;
}

class Detail extends Component<{ id: string }, DetailState> {
  constructor(props: { id: string }) {
    super(props);
    this.state = {
      product: null,
      isLoading: true,
      isPurchased: false,
    };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}${this.props.id}`)
      .then((res) => {
        this.setState({ product: res.data, isLoading: false });
      })
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }

  handlePurchase = () => {
    this.setState({ isPurchased: true });
    setTimeout(() => {
      this.setState({ isPurchased: false });
    }, 2000);
  };

  render() {
    const { product, isLoading, isPurchased } = this.state;

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-yellow-400 border-solid"></div>
          <p className="text-white text-2xl mt-4">Loading...</p>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen text-white py-10">
        <div className="container mx-auto p-6">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg mb-6">
              <img
                className="w-full h-[400px] object-contain transform group-hover:scale-110 transition duration-500 ease-in-out"
                src={product!.images[0]}
                alt={product!.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition duration-500 ease-in-out"></div>
              <h2 className="absolute bottom-4 left-4 text-4xl font-bold text-white group-hover:text-yellow-400 transition duration-300 ease-in-out">
                {product!.title}
              </h2>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <p className="text-xl font-semibold mb-4 text-yellow-300">
                Price: ${product!.price}
              </p>
              <p className="text-lg text-gray-300 mb-6">
                {product!.description}
              </p>
              <button
                onClick={this.handlePurchase}
                className={`px-6 py-3 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out ${
                  isPurchased
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:shadow-xl'
                }`}
                disabled={isPurchased}
              >
                {isPurchased ? 'Purchased!' : 'Buy Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const DetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <Detail id={id!} />;
};

export default DetailWrapper;