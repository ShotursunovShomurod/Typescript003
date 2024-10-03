import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-gray-900 text-gray-300 py-8">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-yellow-300 mb-4">MOSH</h2>
                        <p className="text-sm mb-4">
                            We provide the best products at affordable prices with a focus on customer satisfaction.
                        </p>
                        <p className="text-sm">&copy; 2024 All Rights Reserved.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
                            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
                            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
                            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#faq" className="hover:text-yellow-400">FAQ</a></li>
                            <li><a href="#blog" className="hover:text-yellow-400">Blog</a></li>
                            <li><a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-yellow-400">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-yellow-300 mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://facebook.com" className="hover:text-yellow-400" aria-label="Facebook">
                                    <i className="fab fa-facebook text-2xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" className="hover:text-yellow-400" aria-label="Twitter">
                                    <i className="fab fa-twitter text-2xl"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" className="hover:text-yellow-400" aria-label="Instagram">
                                    <i className="fab fa-instagram text-2xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-sm">&copy; 2024 All Rights Reserved | Company Name</p>
                </div>
            </footer>
        );
    }
}

export default Footer;