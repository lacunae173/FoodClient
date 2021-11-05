import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, selectAllOrders, userLoggedOut } from "../../redux/orderSlice";
import { loggingOut, userLogOut, userRefresh } from "../../redux/userSlice";
import Orders from "./Orders";

function MyPage(props) {

    const token = useSelector(state => state.user.token);
    const auth = useSelector(state => state.user.authenticated)
    const orders = useSelector(selectAllOrders)

    const orderStatus = useSelector(state => state.order.status)

    const dispatch = useDispatch();
    useEffect(async () => {
        if (token && auth) {
            if (orderStatus === 'idle') {
                await dispatch(fetchOrders(token))
            }
            if (orderStatus === 'failed') {
                await dispatch(userRefresh(token))
                await dispatch(fetchOrders(token))
            }
        }
    }, [orderStatus, dispatch])

    

    function handleLogout(e) {
        dispatch(userLoggedOut());
        dispatch(loggingOut());
        dispatch(userLogOut(token));
        // window.location.reload();
    }

    
    let content;
    if (orderStatus === 'loading') {
        content = <div>Loading...</div>
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