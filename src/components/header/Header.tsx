import  { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg py-5">
                <nav className="container mx-auto p-6 flex justify-between items-center">
                    <div className="text-3xl font-bold text-yellow-400">
                        <Link to={"/"}>
                            MOSh
                        </Link>
                    </div>

                    <ul className="hidden md:flex space-x-8 text-lg font-semibold text-white">
                        <li><a href="#home" className="hover:text-yellow-400 transition duration-300 ease-in-out">Home</a></li>
                        <li><a href="#about" className="hover:text-yellow-400 transition duration-300 ease-in-out">About</a></li>
                        <li><a href="#services" className="hover:text-yellow-400 transition duration-300 ease-in-out">Services</a></li>
                        <li><a href="#contact" className="hover:text-yellow-400 transition duration-300 ease-in-out">Contact</a></li>
                    </ul>

                    <div className="md:hidden text-white text-3xl cursor-pointer">
                        <i className="fas fa-bars"></i>
                    </div>
                </nav>

                <ul className="md:hidden bg-gray-900 text-white p-4 space-y-4 shadow-md">
                    <li><a href="#home" className="block hover:text-yellow-400 transition duration-300 ease-in-out">Home</a></li>
                    <li><a href="#about" className="block hover:text-yellow-400 transition duration-300 ease-in-out">About</a></li>
                    <li><a href="#services" className="block hover:text-yellow-400 transition duration-300 ease-in-out">Services</a></li>
                    <li><a href="#contact" className="block hover:text-yellow-400 transition duration-300 ease-in-out">Contact</a></li>
                </ul>
            </header>
        );
    }
}

export default Header;