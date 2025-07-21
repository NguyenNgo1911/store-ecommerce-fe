import style from './style.module.scss'

const SubModalDropdown = ({children}) => {
  return (
    <div className={`${style.box__modal}`}>
      {children}
    </div>
  )
}

export default SubModalDropdown
