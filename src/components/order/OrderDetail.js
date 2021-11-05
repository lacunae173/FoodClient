import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { selectAllOrders, selectOrderById } from "../../redux/orderSlice";

function OrderDetail(props) {
    const {id} = useParams()
    const order = useSelector(state => {
        const orderWithId = state.order.orders.find((order) => Number(order.id) === Number(id))
        return orderWithId
    });
    const orderStatus = useSelector(state => state.order.status)

    const history = useHistory()

    useEffect(() => {
        if (orderStatus === 'idle') {
            history.replace('/my-page')
        }
    }, [])

    const OrderedDish = (props) => {
        return (
            <div className="flex justify-between">
                <div>{`${props.dish.name} * ${props.number}`}</div>
                <div>{`$${props.dish.price * props.number}`}</div>
            </div>

        )
    }

    return (
        <div className="m-3">
            <Link className="text-gray-400" to="/my-page">{'<Back'}</Link>
            <div className="my-3">Detail of order-{id}</div>
            {order && 
                <div>
                    <div className="text-sm">Time: {new Date(order.updated).toLocaleString()}</div>
                <div className="text-sm mb-3">Status: {order.complete ? 'Completed' : 'In Progress'}</div>
                    
                    <div className="card p-3 mb-3">
                    {
                    order.orderedDishes.map((dishInOrder) => {
                        const dish = props.dishes.find((d) => Number(d.id) === Number(dishInOrder.dish_id));
                        
                        return dish && <OrderedDish key={dish.id} dish={dish} number={dishInOrder.number} />
                    })}
                    </div>
                    <div className="card">
                        <div className="card-title p-2 text-sm">Contact Provided</div>                      
                        <div className="card-body">
                            <div>Phone: {order.phone}</div>    
                        <div>Address: {order.address}</div>
                        </div>  
                    </div>
                </div>
            }
        </div>
    )
}

export default OrderDetail;