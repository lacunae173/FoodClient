import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userError, userLoggedIn } from "../redux/userSlice";
import { login } from "../services/authServices";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const history = useHistory();

    const dispatch = useDispatch();    
    

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        if (username && password) {
            login({username, password})
            .then(data => {
                dispatch(userLoggedIn(data))
                window.location.reload()
            }, err => {
                dispatch(userError(err))
                alert("Wrong username or password");
            })
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
                    <div className="flex justify-center">
                        <input className="my-4 p-2 rounded-lg w-full bg-yellow-300 hover:bg-yellow-200" type="submit" value="Log In"></input>
                    </div>

                </form>
            </div>
        </div>
        
    )
}

export default Login;