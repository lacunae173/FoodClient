import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Register from "./user/Register";
import Checkout from "./order/Checkout";
import Header from "./util/Header";
import Login from "./user/Login";
import MenuPage from "./menu/MenuPage";
import MyPage from "./order/MyPage";
import OrderDetail from "./order/OrderDetail";
import PrivateRoute from "./util/PrivateRoute";

function Main(props) {
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/menu.json')
            .then(response => {
                if (response.ok){
                    return response.json()
                }
                throw(Error("error"));
            })
            .then(data => {
                setMenu(data)
            })
            .catch((error) => {
                console.log(error);
                alert("Fail to fetch")
            });
    }, [])

    return (
        <div>
            <div className="fixed w-full">
                <Header />
            </div>
            <div className="pt-14">
                <Switch>
                    <PrivateRoute path="/checkout">
                        <Checkout dishes={menu} />
                    </PrivateRoute>
                    <Route path="/orders/:id">
                        <OrderDetail />
                    </Route>
                    <PrivateRoute path="/my-page">
                        <MyPage menu={menu} />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <MenuPage menu={menu} />
                    </Route>

                </Switch>
            </div>
             
        </div>
    )
}

export default Main;