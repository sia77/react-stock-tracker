
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useSearchResult } from "@/hooks/useSearchResult";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const [query, setQuery] = useState('');
    //const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const navigate = useNavigate();

    // Update debouncedQuery after user stops typing for 300ms
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => clearTimeout(handler); // cancel timeout if user types again
    }, [query]);

    const { searchResult } = useSearchResult(debouncedQuery.trim());

    useEffect(()=> {
        console.log("searchResult: ", searchResult);
        if (debouncedQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(debouncedQuery.trim())}`);
          }
    }, [debouncedQuery, navigate]);


    return (
        <div className="flex justify-center mx-4">
            <div className='w-[1220px] py-3 my-6 relative'>
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                </span>
                <Input 
                    type="text" 
                    placeholder="Search by Ticker Symbol"
                    className="bg-gradient-to-r from-[#f3f6fb] to-[#eef3f9] h-[56px] px-5 rounded-xl border-none shadow-md focus:outline-none transition-all text-gray-700 placeholder-gray-400 focus-visible:ring-[0px]"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />    
            </div>
        </div>
    )
}

export default SearchBar;