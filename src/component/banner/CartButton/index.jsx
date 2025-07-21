import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
const CartButton = ({totalProducts}) => {
  return (
    <div className="bg-[#fe9705] text-white rounded-[15px] text-white">
        <Link className="flex gap-[10px] items-center leading-[36px] px-[20px]">
            <FaShoppingCart />
            Giỏ hàng 
            ({totalProducts ? totalProducts : 0})
        </Link>
    </div>
  )
}

export default CartButton
