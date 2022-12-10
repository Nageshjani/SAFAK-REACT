import NewProduct from "./pages/newProduct/NewProduct";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Product_update from "./pages/product_update/Product_update";
import Home from "./pages/Home";

const App = () => {
  
  return (
    <Router>
      <Routes>
         <Route path="/newproduct"
          element= {<NewProduct />}>
         </Route>
         <Route path="/productlist"
          element= {<ProductList />}>
         </Route>
         <Route path="/product/:productId"
          element= {<Product_update />}>
         </Route>
         <Route path="/"
          element= {<Home />}>
         </Route>
         
         
        
        
      </Routes>
    </Router>
  );
};

export default App;