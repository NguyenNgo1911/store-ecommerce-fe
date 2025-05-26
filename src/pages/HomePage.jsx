import LayoutMain from "../layout/main"
import TitleStore from "../component/banner/TitleStore";
const HomePage = () => {
    return (
        <div className="bg-white">
           <TitleStore />
        </div>
    )
}
HomePage.layout = LayoutMain;
export default HomePage;