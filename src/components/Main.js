import { useEffect, useState } from "react";
import Cart from "./Cart";
import CartBar from "./CartBar";
import Header from "./Header";
import Menu from "./Menu";

function Main(props) {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/menu.json')
            .then(response => response.json())
            .then(data => {
                setMenu(data)
            });
    }, [])

    return (
        <div>
            <div className="fixed w-full">
                <Header />
            </div>
            <div className="px-3 pt-16 pb-20 md:grid md:grid-cols-3">
                <div className="p-2 md:col-span-2">
                    <Menu menu={menu} />
                </div>
                <div className="hidden p-4 md:cart-md" >
                    <Cart dishes={menu} />
                    <CartBar />
                </div>
                
            </div>
            <div className="md:hidden">
                <CartBar />

            </div>
        </div>
    )
}

export default Main;