
//import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {

    //const [search, setSearch] = useState("");

    return (
        <div className="flex justify-center mx-4">
            <div className='w-[1220px] py-3 my-6 relative'>
                {/* <FloatingInput
                    id="search"
                    label="Search by Ticker Symbol"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                /> */}
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                </span>
                <Input 
                    type="text" 
                    placeholder="Search by Ticker Symbol"
                    className="bg-gradient-to-r from-[#f3f6fb] to-[#eef3f9] h-[56px] px-5 rounded-xl border-none shadow-md focus:outline-none transition-all text-gray-700 placeholder-gray-400 focus-visible:ring-[0px]"
                />    
            </div>
        </div>

    )
}

export default SearchBar;