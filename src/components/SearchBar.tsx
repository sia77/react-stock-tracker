
//import { useState } from "react";
import { Input } from "./ui/input";

const SearchBar = () => {

    //const [search, setSearch] = useState("");

    return (
        <div className="flex justify-center">
            <div className='w-[1220px] py-3 mb-5'>
                {/* <FloatingInput
                    id="search"
                    label="Search by Ticker Symbol"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                /> */}

                <Input 
                    type="text" 
                    placeholder="Search by Ticker Symbol"
                    className="bg-gray-100 rounded-none h-[56px] border-0 border-b-[1px] border-b-gray-300 focus-visible:ring-[0px] " />
            </div>
        </div>

    )
}

export default SearchBar;