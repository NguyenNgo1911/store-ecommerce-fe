import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className='header__bar'>
        <div className='container'>
            <ul className='flex gap-[20px] leading-10 float-left'>
                <li className='font-semibold'>
                    Hotline: <span className='font-normal'>0901.417.826</span>
                </li>
                <li className='font-semibold'>
                    Địa chỉ: <span className='font-normal'>69 Đỗ Công Tường, p.Tân Quý, q.Tân Phú, TP.HCM</span>
                </li>
            </ul>
            <div className='float-right flex leading-10 gap-[4px] items-center'>
                <FaUser/>
                <Link className='font-semibold' to={"/login"} reloadDocument>Đăng nhập</Link>
                <span>hoặc</span>
                <Link className='font-semibold' to={"/register"} reloadDocument>Đăng ký</Link>
            </div>
            <div className='clear-both'></div>
        </div>
    </div>
  )
}
export default TopBar
