import CartItem from "./CartItem"

function Cart(props) {
    return (
        <div >
            <h2 className="text-lg mb-3">Cart</h2>
            <div className="flex flex-col space-y-3">
                {props.dishes.map(dish => {
                    return <CartItem key={dish.id} dish={dish} />
                })}
            </div>
        </div>
        
    )
}

export default Cart;