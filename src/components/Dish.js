import { useDispatch } from "react-redux";
import { dishAdded } from '../redux/cartSlice'

function Dish(props) {
    const dispatch = useDispatch()

    const onAddButtonClicked = (event) => {
        console.log("add");
        // dispatch(
        //     dishAdded(props.dish.id)
        // )
    }

    return (
        <div className="grid grid-cols-3">
            <div className=" h-24 w-full max-w-24 col-span-1" >
                <img className=" shadow-md rounded-lg h-full object-cover" src={props.dish.image} alt={props.dish.name} />
            </div>
            
            <div className="col-span-2 flex flex-col justify-between p-2">
                <h3>{props.dish.name}</h3>
                <div className="flex justify-between">
                    <span className="font-semibold text-sm">${props.dish.price}</span>
                    <button onClick={onAddButtonClicked} className="bg-yellow-200 rounded-full w-6 h-6 font-bold">+</button>
                </div>
            </div>

        </div>
    )
}

export default Dish;