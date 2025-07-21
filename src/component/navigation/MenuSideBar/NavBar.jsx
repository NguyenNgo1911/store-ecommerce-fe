import { IoIosArrowForward } from "react-icons/io";
import style from './style.module.scss'

const NavBar = ({title, children, openSubModal = false, showArrow = false}) => {
  return (
    <li className={`${style.item__navbar}`}>
        {title} {showArrow && <IoIosArrowForward />}
        {openSubModal && (
          <div className={`${style.nav__submodal}`}>
            {children}
          </div>
        )}
    </li>
  )
}

export default NavBar
