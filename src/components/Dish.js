function Dish(props) {
    return (
        <div className="grid grid-cols-3">
            <img className="col-span-1 shadow-md rounded-lg h-full object-cover" src={props.dish.image} alt={props.dish.name} />
            <div className="col-span-2 flex flex-col justify-between p-2">
                <h3>{props.dish.name}</h3>
                <div className="flex justify-between">
                    <span className="font-semibold text-sm">${props.dish.price}</span>
                    <button className="bg-yellow-200 rounded-full w-6 h-6 font-bold">+</button>
                </div>
            </div>

        </div>
    )
}

export default Dish;