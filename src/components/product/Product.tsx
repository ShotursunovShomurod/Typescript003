import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}

interface ProductState {
  data: Product[] | null;
  currentPage: number;
  totalProducts: number;
  totalPages: number;
  limit: number;
  isLoading: boolean;
}

const API_URL: string = "https://dummyjson.com/products/";

class Product extends Component<{}, ProductState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: null,
      currentPage: 1,
      totalProducts: 0,
      totalPages: 0,
      limit: 8,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchProducts(this.state.currentPage);
  }

  fetchProducts = (page: number) => {
    const { limit } = this.state;
    const skip = (page - 1) * limit;

    this.setState({ isLoading: true });

    axios
      .get(`${API_URL}?limit=${limit}&skip=${skip}`)
      .then((res) => {
        this.setState({
          data: res.data.products,
          totalProducts: res.data.total,
          totalPages: Math.ceil(res.data.total / limit),
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  handlePageChange = (page: number) => {
    if (page < 1 || page > this.state.totalPages) return;
    this.setState({ currentPage: page }, () => {
      this.fetchProducts(page);
    });
  };

  renderPagination = () => {
    const { currentPage, totalPages } = this.state;
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center space-x-2 mt-4">
        <button
          onClick={() => this.handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md border border-gray-400 text-gray-700 ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          BACK
        </button>
        <span className="text-lg font-semibold text-white">
          {currentPage} : {totalPages}
        </span>
        <button
          onClick={() => this.handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md bg-green-500 text-white ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-green-600"
          }`}
        >
          NEXT
        </button>
      </div>
    );
  };

  render() {
    const { data, isLoading, totalPages } = this.state;


    const loadingCards = Array.from({ length: 8 }, (_, index) => (
        <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 opacity-60 animate-pulse"
        >
            <div className="w-full h-56 bg-gray-700"></div>
            <div className="p-6">
                <div className="h-6 bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-600 rounded"></div>
            </div>
        </div>
    ));

    if (isLoading) {
        return (
            <div className="bg-slate-900 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {loadingCards}
            </div>
        );
    }

    return (
        <div className="bg-slate-900 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data?.map((product: Product) => (
                    <div
                        key={product.id}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            className="w-full h-56 object-contain"
                            src={product.images[0]}
                            alt={product.title}
                        />
                        <div className="p-6">
                            <Link
                                to={`/product/${product.id}`}
                                className="text-yellow-400 hover:text-yellow-500 font-semibold transition-colors duration-300"
                            >
                                <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                                    {product.title}
                                </h2>
                            </Link>
                            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                {product.description}
                            </p>
                            <h3 className="text-lg text-gray-400 font-semibold">
                                ${product.price}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>


            {totalPages > 1 && this.renderPagination()}
        </div>
    );
}

}

export default Product;
