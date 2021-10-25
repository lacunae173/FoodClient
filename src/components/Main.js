import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Cart from "./Cart";
import CartBar from "./CartBar";
import Checkout from "./Checkout";
import Header from "./Header";
import Login from "./Login";
import Menu from "./Menu";
import MenuPage from "./MenuPage";
import MyPage from "./MyPage";
import OrderDetail from "./OrderDetail";
import PrivateRoute from "./PrivateRoute";

function Main(props) {
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/menu.json')
            .then(response => response.json())
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
                    <Route path="/my-page/:id">
                        <OrderDetail />
                    </Route>
                    <PrivateRoute path="/my-page">
                        <MyPage menu={menu} />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
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