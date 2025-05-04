
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const navigate = useNavigate();

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => clearTimeout(handler); 
    }, [query]);


    useEffect(() => {
        const query = debouncedQuery.trim();
        if (!query) return;
      
        const encoded = encodeURIComponent(query);
      
        if (location.pathname === "/search") {
          // Already on search page: update query param
          navigate(`/search?q=${encoded}`, { replace: true });
        } else {
          // Not on search page: navigate there with query
          navigate(`/search?q=${encoded}`);
        }
      }, [debouncedQuery]);


    return (
        <div className="flex justify-center mx-4">
            <div className='w-[1220px] py-3 my-6 relative'>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                </span>
                <Input 
                    type="text" 
                    placeholder="Search by Ticker Symbol"
                    className="bg-card h-[56px] px-5 rounded-xl border shadow-none focus:outline-none transition-all text-gray-700 placeholder-gray-400 focus-visible:ring-[0px]"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />    
            </div>
        </div>
    )
}

export default SearchBar;