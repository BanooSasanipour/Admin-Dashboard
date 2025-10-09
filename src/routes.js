import Home from'./pages/home/Home'
import UserList from'./pages/Users/UserList'
import NewUser from'./pages/NewUser/NewUser'
import Products from'./pages/Products/Products'
import Product from'./pages/Product/Product'
import User from './pages/User/User'
import Analytics from "./pages/Analytics/Analytics";
import Sales from "./pages/Sales/Sales";
import Transactions from "./pages/Transactions/Transactions";
import Reports from "./pages/Reports/Reports";
import Mail from "./pages/Mail/Mail";
import Feedback from "./pages/Feedback/Feedback";
import Messages from "./pages/Messages/Messages";
import Manage from "./pages/Manage/Manage";





let routes = [
    {path: '/', element: <Home />},
    {path: '/users', element: <UserList />},
    {path: '/newUser', element: <NewUser />},
    {path: '/products', element: <Products />},
    {path: '/product/:productID', element: <Product />},
    {path: '/user/:userID', element: <User />},
    {path: "/analytics", element: <Analytics />},
    {path: "/sales", element: <Sales />},
    {path: "/transactions", element: <Transactions />},
    {path: "/reports", element: <Reports />},
    {path: "/mail", element: <Mail />},
    {path: "/feedback", element: <Feedback />},
    {path: "/messages", element: <Messages />},
    {path: "/manage", element: <Manage />},


]

export default routes