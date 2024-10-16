import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Header({ onSearch, toggleTheme,data }) {
    const [searchInput, setSearchInput] = useState("");
    // const [display,setDisplay] = useState("hidden");

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <header className={`bg-orange-500 shadow-lg`}>
            <div className="container mx-auto flex items-center justify-between p-4">
                <nav className="hidden md:flex space-x-8">
                    <a href="/" className="text-black font-bold hover:text-orange-200 transition-colors duration-300">
                        Home
                    </a>
                    <a href="/products" className="text-black font-bold hover:text-orange-200 transition-colors duration-300">
                        Products
                    </a>
                    <a href="/about" className="text-black font-bold hover:text-orange-200 transition-colors duration-300">
                        About
                    </a>
                    <a href="/contact" className="text-black font-bold hover:text-orange-200 transition-colors duration-300">
                        Contact
                    </a>
                </nav>
                <div className="flex items-center space-x-4 ml-auto">
                <span className={`${data > 0 ? "flex items-center justify-center p-2 bg-blue-500 text-white rounded-full" : "hidden"}`}>{data}</span>

                    <ShoppingCart className="hover:text-orange-200 transition-colors duration-300" />
                    <div className="relative">
                        <input
                            type="text"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            placeholder="Search..."
                            className="border border-gray-300 rounded p-2"
                        />
                        
                    </div>
                    <button onClick={toggleTheme} className="relative w-8 h-8 flex items-center justify-center focus:outline-none">
                        <Search className="hover:text-orange-200 transition-colors duration-300" />
                    </button>
                </div>
            </div>
        </header>
    );
}
