import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function CartBar(props) {
    const cart = useSelector(state => state.cart)

    const price = cart.map((cartItem) => {
        const dish = props.dishes.find((dish) => dish.id === cartItem.dishId);
        if (dish)
            return dish.price * cartItem.number;
    })
    const total = price.reduce((prev, curr) => prev + curr)
    
    
    return (
        <div className="fixed bottom-0 p-3 w-full md:w-auto">
            <div className="bg-gray-600 rounded-full w-full overflow-hidden ">
                <div className="grid grid-cols-8" >
                    <div onClick={props.onToggleCart} className="text-yellow-400 col-span-1 p-4">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    </div>
                    <div onClick={props.onToggleCart} className="col-span-4 pl-2 text-white py-4">
                        <span className="text-xs">Total: </span><span className="text-sm font-bold">${total ? total.toFixed(2) : ''}</span>
                    </div>
                    <Link className="col-span-3 bg-yellow-400 h-full w-full p-4 text-sm  font-semibold cursor-pointer" to={{ pathname: cart.length === 0 ? "#" : "/checkout", state: { byButton: true } }}>Checkout</Link>
                </div>
                
                
            </div>
        </div>
        
    )
}

export default CartBar;