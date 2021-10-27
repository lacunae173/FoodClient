import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, selectAllOrders } from "../redux/orderSlice";
import { userLogOut, userRefresh } from "../redux/userSlice";
import Orders from "./Orders";
import { Spinner } from "./Spinner";

function MyPage(props) {

    const token = useSelector(state => state.user.token);
    const auth = useSelector(state => state.user.authenticated)
    const orders = useSelector(selectAllOrders)

    const orderStatus = useSelector(state => state.order.status)

    const dispatch = useDispatch();
    useEffect(() => {
        if (token && auth) {
            if (orderStatus === 'idle') {
                dispatch(fetchOrders(token))
            }
            if (orderStatus === 'failed') {
                dispatch(userRefresh(token))
            }
        }
    }, [orderStatus, dispatch, auth])

    

    function handleLogout(e) {
        dispatch(userLogOut(token));
        window.location.reload();
    }

    
    let content;
    if (orderStatus === 'loading') {
        content = <Spinner />
    } else if (orderStatus === 'succeeded') {
        content = orders && <Orders orders={orders} menu={props.menu} />
    }

    return (
        <div className="p-4">
            {/* {content} */}
            {orders && <Orders orders={orders} menu={props.menu} />}
            <button className="my-4 p-2 rounded-lg w-full bg-yellow-300 hover:bg-yellow-200" onClick={handleLogout}>Log out</button>
        </div>
        
    )
}

export default MyPage;