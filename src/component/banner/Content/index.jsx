import style from './style.module.scss'
import { FaCar } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import CartButton from '../CartButton';
import Logo from '../Logo';
const ContentStore = () => {
  return (
    <div className='container flex items-center justify-between'>
      <Logo />
      <div className='w-[60%] flex justify-between'>
        <div className='flex items-center gap-[15px] text-[#363636]'>
          <FaCar className='text-lime-green text-[40px]'/>
          <div>
            <Link to={"/"} reloadDocument className={`${style.banner__content}`}>Miễn phí vận chuyển</Link>
            <p className='text-[15px]'>Bán kính 100km</p>
          </div>
        </div>
        <div className='flex items-center gap-[15px] text-[#363636]'>
          <IoMdMail className='text-lime-green text-[40px]'/>
          <div>
            <Link to={"/"} reloadDocument className={`${style.banner__content}`}>Hỗ trợ 24/7</Link>
            <p className='text-[15px]'>Hotline : 0901.417.928</p>
          </div>
        </div>
        <div className='flex items-center gap-[15px] text-[#363636]'>
          <FaClock className='text-lime-green text-[40px]'/>
          <div>
            <Link to={"/"} reloadDocument className={`${style.banner__content}`}>Giờ làm việc</Link>
            <p className='text-[15px]'>T2 - T7 Giờ hành chính</p>
          </div>
        </div>
      </div>
      <CartButton />
    </div>
  )
}

export default ContentStore
