import { useState } from "react"
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
    const [searchItem, setSearchItem] = useState("");

    return (
        <div>
            <form className="w-full relative">
                <input 
                    type="text" 
                    value={searchItem} 
                    className="rounded-[15px] h-[30px] pl-[20px] pr-[25px] w-[252px]" 
                    placeholder="Tìm sản phẩm" 
                    onChange={(e) => setSearchItem(e.target.value)}
                />
                <FaSearch className="absolute top-[8px] right-[8px] text-black" />
            </form>
        </div>
    )
}

export default SearchBar
