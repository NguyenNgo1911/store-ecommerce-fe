import TopBar from "../component/header/TopBar"
const Layout_Main = ({children}) => {
    return (
        <>
            <TopBar/>
            {children}
        </>
    )
}

export default Layout_Main