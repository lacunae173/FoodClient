import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import store from "../redux/store";
import { userLoggedIn, userLoggedOut } from "../redux/userSlice";
import { logout, refresh } from "../services/authServices";
import { getAllOrders } from "../services/orderServices";
import Login from "./Login";
import Orders from "./Orders";

function MyPage(props) {
    // const [token, setToken] = useState(useSelector(state => state.user.token))
    const [orders, setOrders] = useState([]);
    // const [auth, setAuth] = useState(false);

    let token = useSelector(state => state.user.token);
    let auth = useSelector(state => state.user.authenticated)
    const dispatch = useDispatch();

    useEffect(() => {
        if (token && auth) {
            getAllOrders(token)
                .then(data => {
                    console.log(data)
                    setOrders(data);
                }, err => {
                    dispatch(userLoggedOut(token))
                    refresh(token)
                        .then(data => {
                            dispatch(userLoggedIn(data)) 
                            window.location.reload();                       
                        }, err => {
                            dispatch(userLoggedOut(err))
                        })
                });
        }
    }, [])

    function handleLogout(e) {
        dispatch(userLoggedOut());
        setOrders([]);
    }

    if (!auth) 
        return <Login />

    return (
        <div className="p-4">
            
            {orders && <Orders orders={orders} menu={props.menu} />}
            <button className="my-4 p-2 rounded-lg w-full bg-yellow-300 hover:bg-yellow-200" onClick={handleLogout}>Log out</button>
        </div>
        
    )
}

export default MyPage;