import { Routes, Route } from 'react-router-dom';
import { Fragment } from "react"
//Library
import "./global.scss"
import "./tailwind.scss"
//Components
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  const renderWithLayout = (PageComponent) => {
    const Layout = PageComponent.layout || Fragment;
    return (
      <Layout>
        <PageComponent />
      </Layout>
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={renderWithLayout(HomePage)} />
        <Route path="/contact" element={renderWithLayout(ContactPage)}/>
        <Route path="/cart" element={renderWithLayout(CartPage)}/>
        <Route path="/login" element={renderWithLayout(LoginPage)}/>
      </Routes>
    </div>
  );
}

export default App;
