import CartItem from "./CartItem"

function Cart(props) {
    return (
        <div className={`card ${props.fullsize?'h-auto':'h-75p'}`}>
            <div className="pb-8">
                <div className="card-title">Cart</div>
                <div className="card-body flex flex-col space-y-3">
                    {props.dishes.map(dish => {
                        return <CartItem key={dish.id} dish={dish} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart;