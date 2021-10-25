import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { fetchOrders, ordersFetched, selectAllOrders, userLoggedOut } from "../redux/orderSlice";
import store from "../redux/store";
import { loggingOut, userLogOut, userRefresh } from "../redux/userSlice";
import { logout, refresh } from "../services/authServices";
import { getAllOrders } from "../services/orderServices";
import Login from "./Login";
import Orders from "./Orders";
import { Spinner } from "./Spinner";

function MyPage(props) {
    // const [token, setToken] = useState(useSelector(state => state.user.token))
    // const [orders, setOrders] = useState([]);
    // const [auth, setAuth] = useState(false);

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
            // getAllOrders(token)
            //     .then(data => {
            //         console.log(data)
            //         dispatch(ordersFetched(data))
            //     }, err => {
            //         dispatch(userLoggedOut(token))
            //         refresh(token)
            //             .then(data => {
            //                 dispatch(userLoggedIn(data)) 
            //                 // window.location.reload();                       
            //             }, err => {
            //                 dispatch(userLoggedOut(err))
            //             })
            //     });
        }
    }, [orderStatus, dispatch, auth])

    

    function handleLogout(e) {
        dispatch(userLogOut(token));
        window.location.reload();
        // setOrders([]);
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