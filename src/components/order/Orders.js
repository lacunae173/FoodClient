import OrderItem from "./OrderItem";

function Orders(props) {
    const reveredOrder = [...props.orders]
    reveredOrder.reverse()
    return (
        <div className="flex flex-col space-y-2">
            <div>Orders</div>
            {props.orders ? reveredOrder.map((order) => {
                return <OrderItem key={order.id} order={order} menu={props.menu}></OrderItem>
            }) : <div>0</div>}
        </div>
        
    )
}

export default Orders;