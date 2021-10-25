import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Cart from "./Cart";
import CartBar from "./CartBar";
import Checkout from "./Checkout";
import Header from "./Header";
import Menu from "./Menu";
import MenuPage from "./MenuPage";
import MyPage from "./MyPage";

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
                    <Route path="/checkout">
                        <Checkout dishes={menu} />
                    </Route>
                    <Route path="/my-page">
                        <MyPage menu={menu} />
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