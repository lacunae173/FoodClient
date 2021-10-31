import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userLogIn } from "../../redux/userSlice";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const history = useHistory();
    const location = useLocation();

    const authStatus = useSelector(state => state.user.loginStatus)

    const dispatch = useDispatch();    
    
    let { from } = location.state || { from: { pathname: "/" } };

    // console.log("from", from);

    useEffect(() => {
        if (authStatus === 'succeeded')
            history.replace(from);
    }, [authStatus])

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        if (username && password) {
            dispatch(userLogIn({username, password}))

        }

    }

    return (
        <div className="flex justify-center w-full">
            <div className="m-4 card w-full p-4 md:w-80 self-center">
                <h2 className="text-lg font-semibold pb-4 text-center">Login</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="block">Username</label>
                    <input className="block form-control w-full my-2" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    {submitted && !username &&
                        <div className="block text-xs text-red-500">
                            *This field is required.
                        </div>
                    }

                    <label className="block" htmlFor="password">Password</label>
                    <input className="block form-control w-full my-2" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    {submitted && !password &&
                        <div className="block text-xs text-red-500">
                            *This field is required.
                        </div>
                    }
                    <input className="my-4 p-2 rounded-lg w-full bg-yellow-300 hover:bg-yellow-200" type="submit" value="Log In"></input>
                    <div className="flex justify-center">
                        <Link className="underline" to="/register">Register</Link>
                    </div>
                   
                    
                </form>
            </div>
        </div>
        
    )
}

export default Login;