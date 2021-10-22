import { useEffect, useState } from "react";
import Cart from "./Cart";
import CartBar from "./CartBar";
import Checkout from "./Checkout";
import Header from "./Header";
import Menu from "./Menu";

function Main(props) {
    const [menu, setMenu] = useState([]);
    const [showCart, setShowCart] = useState(false);

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

    const toggleCart = (event) => {
        event.preventDefault();
        setShowCart(!showCart)

        console.log(showCart)
    }

    return (
        <div>
            <div className="fixed w-full">
                <Header />
            </div>
            <div className="checkoutpage">
                <div className="p-3 pt-16">
                    <Checkout dishes={menu} />
                </div>
            </div>
            <div className="menupage">
                <div className="px-3 pt-16 pb-20 md:grid md:grid-cols-3">
                    <div className="p-2 md:col-span-2">
                        <Menu menu={menu} />

                    </div>
                    <div className="hidden md:block md:col-span-1 ">
                        <Cart dishes={menu} show />
                        <CartBar />
                    </div>

                </div>
                <div className="md:hidden flex flex-col justify-center">
                    <div onClick={() => setShowCart(false)} className={`fixed h-full w-full top-0 left-0  transition-all duration-300 ${showCart ? "bg-opacity-50 bg-black" : "bg-transparent z-m1"
                        } `}></div>
                    <div className={`m-4 fixed bottom-16 w-90p self-center transition-all duration-300 transform ${showCart ? "opacity-100 " : "opacity-0 translate-y-96"
                        }`}>
                        <Cart dishes={menu} show={showCart} />
                    </div>
                    <CartBar onToggleCart={toggleCart} />

                </div>
            </div>
            
        </div>
    )
}

export default Main;