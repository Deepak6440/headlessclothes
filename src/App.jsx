import { Footer } from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import { Routes, Route} from "react-router-dom"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Shop from "./components/Shop/Shop"
import ErrorPage from "./pages/ErrorPage"
import ProductCategory from "./components/ProductCategory/ProductCategory"
import { ApolloProvider } from "@apollo/client"
import client from "./client"



function App() {


  return (
    <>
      <Header />
      <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/product/:id" element={ <SingleProduct/> } />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category" element={<ProductCategory />} />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/checkout" element= { <Checkout /> }/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </ApolloProvider>
      <Footer />
    </>
  )
}

export default App
