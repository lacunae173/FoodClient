import Cart from "./Cart";
import CartBar from "./CartBar";

function Checkout(props) {
    return (
        <div className="flex flex-col space-y-3">
            <Cart dishes={props.dishes} fullsize />
            <div className="card">
                <div className="card-title">Contact</div>
                <div className="card-body flex flex-col space-y-2">

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                        <input type="text" className="py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white w-full" placeholder="Name" autoComplete="off" />
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </span>
                        <input type="text" className="py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white w-full" placeholder="Phone" autoComplete="off" />
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </span>
                        <input type="text" className="py-2 text-sm rounded-md pl-10 focus:outline-none focus:bg-white w-full" placeholder="Address" autoComplete="off" />
                    </div>
                    
                    
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    Payment
                </div>
                <div className="card-body">
                    <div>
                        <label htmlFor="cardno">Card No.</label>
                        <input id="cardno" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="expdate">Exp. Date</label>
                        <input id="expdate" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="postalcode">Postal Code</label>
                        <input id="cardno" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor="cvc">CVC</label>
                        <input id="cvc" type="text"></input>
                    </div>
                </div>
            </div>
            <button>Confirm</button>
        </div>
    )
}

export default Checkout;