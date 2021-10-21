import { useSelector } from "react-redux";
import CartItem from "./CartItem"

function Cart(props) {
    const cart = useSelector(state => state.cart)
    const renderedCart = cart.map(({ dishId, number }) => {        
        const dish = props.dishes.find((dish) => dish.id === dishId);
        return dish && <CartItem key={dish.id} dish={dish} number={number} />
    })
    return (
        <div className="card h-auto md:h-75p">
            <div className="pb-8">
                <div className="card-title">Cart</div>
                <div className="card-body flex flex-col space-y-3">
                    {renderedCart}
                </div>
            </div>
        </div>
    )
}

export default Cart;