import LayoutMain from "../layout/main"
import ContentStore from "../component/banner/Content";
import MenuSideBar from "../component/navigation/MenuSideBar";
import TableMenu from "../component/navigation/TableMenuCategory/TableMenu";
import { useEffect } from "react";
const HomePage = () => {

    useEffect(() => {
        
    },[])

    return (
        <div className="bg-white">
            <ContentStore />
            <MenuSideBar />
            <TableMenu />
        </div>
    )
}
HomePage.layout = LayoutMain;
export default HomePage;