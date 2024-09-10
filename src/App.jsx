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
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import OrderPlaced from "./components/OrderPlaced/OrderPlaced"
import Dashboard from "./components/Dashboard/Dashboard"
import CustomerOrders from "./components/CustomerOrders/CustomerOrders"
import CustomerOrderDetails from "./components/CustomerOrders/CustomerOrderDetails"
import Wishlist from "./components/Wishlist/Wishlist"



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
        <Route path="/category/:catName" element={<ProductCategory />} />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element= { <Checkout /> }/>
        <Route path="order-placed/:orderId" element={<OrderPlaced />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/orders/" element={<CustomerOrders /> } />
        <Route path="/orders/:orderId" element={<CustomerOrderDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </ApolloProvider>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
