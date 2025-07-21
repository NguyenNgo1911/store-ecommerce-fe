import NavBar from './NavBar'
import SearchBar from './SearchBar'
const MenuSideBar = () => {
  return (
    <div className='header__bar'>
        <div className='container flex items-center justify-between'>
            <ul className='flex'>
                <NavBar title={"Trang chủ"}/>
                <NavBar title={"Sản phẩm"} showArrow={true} openSubModal={true}>
                  <div>List products</div>
                </NavBar>
                <NavBar title={"Giới thiệu"}/>
                <NavBar title={"Tin tức"} showArrow={true} openSubModal={true}>
                  <div>HHHH</div>
                </NavBar>
                <NavBar title={"Liên hệ"}/>
                <NavBar title={"Chỉ đường"}/>
            </ul>
            <SearchBar />
        </div>
    </div>
  )
}

export default MenuSideBar
