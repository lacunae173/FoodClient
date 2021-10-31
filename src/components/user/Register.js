import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userRegister } from "../../redux/userSlice";
import FormInput from "../util/FormInput";

function Register(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errMessages, setErrMessages] = useState({})
    const [registerStatus, setRegisterStatus] = useState('idle')

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        if (registerStatus === 'success') {
            history.replace("/login");
        }
        
    }, [registerStatus])

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log(err_msg)
        setErrMessages(new Object())
        const basicMessages = validate();
        if (basicMessages.length === 0 && registerStatus === 'idle') {
            console.log('register?')
            const data = {
                username,
                password,
                password2: rPassword,
                email, 
                first_name: firstName, 
                last_name: lastName
            }
            try {
                setRegisterStatus('pending')
                await dispatch(userRegister(data)).unwrap()
                setUsername('')
                setEmail('')
                setPassword('')
                setRPassword('')
                setFirstName('')
                setLastName('')
                setRegisterStatus('success')
            } catch(err) {
                // console.error('Failed to register', err)
                setErrMessages({...errMessages, ...JSON.parse(err.message)})
            } finally {
                setRegisterStatus('idle')
            }
        }

    }

    function validate() {
        let basicMessages = []
        if (!(username && password && rPassword && email)) {
            basicMessages.push("Missing required fields");
        }
        if (password !== rPassword) {
            basicMessages.push("Passwords don't match")
        }
        setErrMessages({ ...errMessages, basic: basicMessages})
        return basicMessages
        //validate email
    }

    return (
        <div className="flex justify-center w-full">
            <div className="m-4 card w-full p-4 md:w-80 self-center">
                <h2 className="text-lg font-semibold pb-4 text-center">Register</h2>
                <form name="form" onSubmit={handleSubmit}>

                    <FormInput label="Username" name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

                    <FormInput label="Password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <FormInput label="Repeated Password" name="rpassword" type="password" value={rPassword} onChange={(e) => setRPassword(e.target.value)} required />

                    <FormInput label="Email" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <FormInput label="First Name" name="firstname" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                    <FormInput label="Last Name" name="lastname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <div className="flex flex-col space-y-1 py-2">
                        {
                            Object.values(errMessages).map((arr, indexout) => arr.map((err, indexin) => {
                                console.log(err);
                                return (
                                    <div className="card text-sm text-red-700 bg-red-200 p-1 px-2 flex align-middle " key={`err-${indexout}-${indexin}`}><div><svg className="w-6 h-6 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div>{err}</div></div>
                                )
                            }))
                        }
                    </div>
                    

                    <div className="flex justify-center">
                        <input className="my-4 p-2 rounded-lg w-full bg-yellow-300 hover:bg-yellow-200" type="submit" value="Register" ></input>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Register;