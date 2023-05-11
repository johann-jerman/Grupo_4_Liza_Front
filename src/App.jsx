import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import Categories from "./components/Categories.jsx";
import Products from "./components/Products.jsx";
import Users from "./components/Users.jsx";
import UserDetail from "./components/UserDetail.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/users" element={< Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/user/:id" element={<UserDetail/>}/>
      </Routes>

    </div>
  );
}

export default App;
