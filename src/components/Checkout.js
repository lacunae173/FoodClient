import { useSelector } from "react-redux";

function Checkout(props) {
    const OrderedDish = (props) => {
        return (
            <div className="flex justify-between">
                <div>{`${props.dish.name} * ${props.number}`}</div>
                <div>{`$${props.dish.price * props.number}`}</div>
            </div>
            
        )
    }
    const cart = useSelector(state => state.cart)
    const renderedDishList = cart.map(({ dishId, number }) => {
        const dish = props.dishes.find((dish) => dish.id === dishId);
        return dish && <OrderedDish key={dish.id} dish={dish} number={number} />
    })

    return (
        <div className="flex flex-col space-y-3">
            {/* <Cart dishes={props.dishes} fullsize /> */}
            <div className="card">
                <div className="card-body flex flex-col space-y-2">
                    {renderedDishList}
                </div>
            </div>
            <div className="card">
                <div className="card-title">Contact</div>
                <div className="card-body flex flex-col space-y-2">

                    <div className="flex">
                        <span className="flex items-center p-2 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                        <input type="text" className="p-2 text-sm rounded-md  focus:outline-none focus:bg-white w-full" placeholder="Name" autoComplete="off" />
                    </div>

                    <div className="flex">
                        <span className="flex items-center p-2 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </span>
                        <input type="text" className="p-2 text-sm rounded-md  focus:outline-none focus:bg-white w-full" placeholder="Phone" autoComplete="off" />
                    </div>

                    <div className="flex">
                        <span className="flex items-center p-2 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </span>
                        <input type="text" className="p-2 text-sm rounded-md  focus:outline-none focus:bg-white w-full" placeholder="Address" autoComplete="off" />
                    </div>
                    
                    
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    Payment
                </div>
                <div className="card-body  flex flex-col space-y-2">
                    <div className="flex">
                        <span className="flex items-center p-2 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                        </span>
                        <input type="text" className="p-2 text-sm rounded-md  focus:outline-none focus:bg-white w-full" placeholder="Card No." autoComplete="off" />
                    </div>
                    <div className="flex">
                        <span className="flex items-center p-2 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </span>
                        <input type="text" className="p-2 text-sm rounded-md  focus:outline-none focus:bg-white w-full" placeholder="Expire Date" autoComplete="off" />
                    </div>
                    <div className="flex">
                        
                        <input type="text" className="p-2 text-sm rounded-md  focus:outline-none focus:bg-white w-full" placeholder="Postal Code" autoComplete="off" />
                    </div>
                    <div className="flex">

                        <input type="text" className="p-2 text-sm rounded-md  focus:outline-none focus:bg-white w-full" placeholder="CVC" autoComplete="off" />
                    </div>
                </div>
            </div>
            <button>Confirm</button>
        </div>
    )
}

export default Checkout;