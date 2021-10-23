import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Cart from "./Cart";
import CartBar from "./CartBar";
import Checkout from "./Checkout";
import Header from "./Header";
import Menu from "./Menu";
import MenuPage from "./MenuPage";

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
            <Switch>
                <Route path="/checkout">
                    <div className="checkoutpage">
                        <div className="p-3 pt-16">
                            <Checkout dishes={menu} />
                        </div>
                    </div>
                </Route>
                <Route path="/">
                    <MenuPage menu={menu} />
                </Route>                
            </Switch>            
        </div>
    )
}

export default Main;