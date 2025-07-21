import DataCategory from "../../../constants/category"
import ItemNav from "./ItemNav";

const TableMenu = () => {


    return (
        <div className='container my-[30px]'>
            <div className='w-full flex justify-between'>
                <aside className='border-[#ebebeb] border rounded-[15px] w-[25%]'>
                    <div className='rounded-[15px] py-[6px] px-[20px] bg-lime-green text-[17px] w-full text-white font-semibold'>
                        DANH MỤC
                    </div>
                    {DataCategory.map((item) => (
                        <ItemNav item={item} key={item.id} />
                    ))}
                </aside>
                <div className='w-[70%]'>
                    <div className="">
                        <img className="w-[100%] h-auto" src="./assets/images/banner.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableMenu
