
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { X, Search } from "lucide-react";
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

    const clearSearchBar = () => {
        setQuery('');
        navigate(`/search`);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toUpperCase().trim();
        // Allow only letters and numbers (alphanumeric)
        if (/^[A-Z0-9]*$/.test(value)) {
          setQuery(value);
        }
      };


    useEffect(() => {
        const query = debouncedQuery.trim();
        if (!query) return;
      
        const encoded = encodeURIComponent(query);

        if (debouncedQuery.trim()) {
            navigate(`/search?q=${encoded}`);
        }
      
        // if (location.pathname === "/search") {
        //   // Already on search page: update query param
        //   navigate(`/search?q=${encoded}`, { replace: true });
        // } else {
          // Not on search page: navigate there with query
          //navigate(`/search?q=${encoded}`);
        //}
      }, [debouncedQuery]);

      useEffect(() => {
        if(location.pathname !== "/search"){
            setQuery('');
        }
        
      }, [location.pathname]);


    return (
        <div className="flex justify-center mx-2 md:mx-4">
            <div className='w-[1220px] py-3 my-6 relative'>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    { !query ? 
                        <Search size={20} className="cursor-pointer"/> : 
                        <X size={20} className="cursor-pointer" onClick={clearSearchBar} /> 
                    }
                </span>
                <Input 
                    type="text" 
                    placeholder="Search by Ticker Symbol"
                    className="bg-card h-[56px] px-5 rounded-xl border shadow-none focus:outline-none transition-all text-gray-700 placeholder-gray-400 focus-visible:ring-[0px]"
                    value={query}
                    maxLength={7}
                    onChange={handleInputChange}
                />    
            </div>
        </div>
    )
}

export default SearchBar;