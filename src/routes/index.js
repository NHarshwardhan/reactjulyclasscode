import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Menu from "../views/Menu";
import Todo from "../views/Todo";
import ViewNotFound from "../views/ViewNotFound";
import TodoDetails from "../views/TodoDetails";
import AddTodo from "../views/AddTodo";
import TodoEdit from "../views/TodoEdit";
import Articles from "../views/Articles";
import Article1 from "../views/NestedRoute/Article1";
import Article2 from "../views/NestedRoute/Article2";
// import Products from "../views/Products";
import ProductDetails from "../views/ProductDetails";
import ProductInfo from "../views/ProductInfo";
import LoginForm from "../components/LoginForm";
import ProtectedRoute from "../components/ProtectedRoute";
import React, { Suspense } from "react";
import CakeContainer from "../views/CakeContainer";
import PostsSlice from "../redux/postsSlice";
import Dashboard from "../Project/Dashboard";
import LoginPanel from "../Project/LoginPanel";
import CustomerDB from "../Project/customer-dashbaord/CustomerDB";
import AllLoans from "../Project/customer-dashbaord/AllLoans";
import AppliedLoans from "../Project/customer-dashbaord/AppliedLoans";
import ManagerDB from "../Project/manager-dashboard/ManagerDB";
import Applications from "../Project/manager-dashboard/Applications";

//Lazy load the components
const Products = React.lazy(()=>import('../views/Products'))


const AppRoutes = () => {
  return (
    <BrowserRouter>   
       <Menu/>
       <Suspense fallback={<div>loading....</div>}>
       <Routes>
          {/* <Route element={<ProtectedRoute/>}> */}
                  {/* <Route path="/" element={<Navigate to='/dashboard' />} />         */}
                  <Route path="/" element={<Dashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/todos" element={<Todo/>} />

                <Route path="/todos/details" element={<TodoDetails/>}/>
                <Route path="/todos/create" element={<AddTodo/>}/>
                
                <Route path="/todos/edit" element={<TodoEdit/>}/>
                
                <Route path="/articles" element ={<Articles/>}>
                    <Route path="article1" element={<Article1/>}/>
                    <Route path="article2" element={<Article2/>}/>

                </Route>

                <Route path="/products" element ={<Products/>}/>

                <Route path="/products/details" element ={<ProductDetails/>}>
                
                    <Route path="specification" element ={<ProductInfo name='spec'/>}/>
                    <Route path="review" element ={<ProductInfo name='review'/>}/>
                    <Route path="dimension" element ={<ProductInfo name='dimension'/>}/>

                
                </Route>
          {/* </Route> */}
        
        
        <Route path="/login" element ={<LoginPanel/>}/>
        <Route path="/redux" element ={<PostsSlice/>}/>

        {/* -----------------Project Route------------ */}
        <Route path="/customerdb" element ={<CustomerDB/>}>
             <Route path="allLoans" element ={<AllLoans/>}/>
             <Route path="appliedLoans" element ={<AppliedLoans/>}/>
        </Route>
        
        <Route path="/managerdb" element ={<ManagerDB/>}>
            <Route path="allApp" element ={<Applications name="allApp"/>}/>
            <Route path="pendingApp" element ={<Applications name="pendingApp"/>}/>
            <Route path="approvedApp" element ={<Applications name="approvedApp"/>}/>
            <Route path="rejectedApp" element ={<Applications name="rejectedApp"/>}/>
        </Route>



        <Route path='*' element ={<ViewNotFound/>}/>


      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
