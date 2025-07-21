import style from "./style.module.scss"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import SubModalDropdown from "../../common/modal";

const ItemNav = ({item}) => {
  return (
    <div className={`${style.box__item__category}`}>
      <div className={`${style.item__category}`}>
        <div className="flex gap-[5px] items-center">
          <FaArrowAltCircleRight />
          <p>{item.name}</p>
        </div>
        {item?.category?.length > 0 && (
          <FaArrowRight />
        )}
      </div>
      {item?.category?.length > 0 && (
        <div className={`${style.modal__dropdown}`}>
          <SubModalDropdown>
            {item?.category?.map((item) => (
              <div className="px-[20px] py-[10px]" key={item.id}>
                {item.name}
              </div>
            ))}
          </SubModalDropdown>
        </div>
      )}
    </div>
  )
}

export default ItemNav
