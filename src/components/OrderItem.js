import { Link } from "react-router-dom";

function OrderItem(props) {
    const order = props.order;
    const orderedDishes = order.orderedDishes.map(({ dish_id, number }) => {
        const dishWithId = props.menu.find((dish) => dish.id === dish_id);
        return {
            dish: dishWithId,
            number: number
        }
    })
    // console.log("od:", orderedDishes)
    
    const priceList = orderedDishes.map((od) => {
        return od.dish.price * od.number;
    })

    const total = priceList.reduce((prev, curr) => {
        return prev + curr;
    }, 0)
    

    const updated = new Date(order.updated);
    return(
        <div className="card p-2 flex justify-between">
            <div className="text-sm flex flex-col space-y-1">
                <div className="text-xs text-gray-400">
                    id: {order.id}
                </div>
                <div>
                    {updated.toLocaleString()}
                </div>
                <div>
                    {order.complete ? "Completed" : "In Progress"}
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <div className="font-semibold">
                    ${total}
                </div>
                <div className="text-gray-400 text-sm text-right">
                    <Link className="underline" to={`/orders/${order.id}`}>Detail</Link>
                </div>
            </div>

            
        </div>
    )
}

export default OrderItem;