import { useEffect, useState } from "react";
import Cart from "./Cart";
import CartBar from "./CartBar";
import Checkout from "./Checkout";
import Header from "./Header";
import Menu from "./Menu";

function MenuPage(props) {
    const [showCart, setShowCart] = useState(false);

    

    const toggleCart = (event) => {
        event.preventDefault();
        setShowCart(!showCart)

        console.log(showCart)
    }

    const overlay = <div onClick={() => setShowCart(false)} className={`fixed h-full w-full top-0 left-0  transition-all duration-300 ${showCart ? "bg-opacity-50 bg-black" : "bg-transparent z-m1"
        } `}></div>

    return (
        <div className="menupage">
            <div className="px-3 pt-16 pb-20 md:grid md:grid-cols-3">
                <div className="p-2 md:col-span-2">
                    <Menu menu={props.menu} />

                </div>
                <div className="hidden md:block md:col-span-1 ">
                    <Cart dishes={props.menu} show />
                    <CartBar dishes={props.menu} />
                </div>

            </div>
            {/* Small screen cart */}
            <div className="md:hidden flex flex-col justify-center">
                {overlay}
                <div className={`m-4 fixed bottom-16 w-90p self-center transition-all duration-300 transform ${showCart ? "opacity-100 " : "opacity-0 translate-y-96"
                    }`}>
                    <Cart dishes={props.menu} />
                </div>
                <CartBar onToggleCart={toggleCart} dishes={props.menu} />

            </div>
        </div>
    )
}

export default MenuPage;