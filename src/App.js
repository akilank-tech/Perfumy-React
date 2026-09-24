import Navbar from "./components/navbar"
import Searchbar from "./components/search"
import Products from "./components/products"
import About from "./components/about"
import Footer from "./components/footer"

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </>
    )
}
export default App