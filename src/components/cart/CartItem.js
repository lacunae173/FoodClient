import { useDispatch } from "react-redux";
import { dishAdded, dishDeleted } from "../../redux/cartSlice";

function CartItem(props) {
    const dispatch = useDispatch()

    const onAddButtonClicked = (event) => {
        console.log("add" + props.dish.name);
        dispatch(
            dishAdded(props.dish.id)
        )
    }

    const onDeleteButtonClicked = () => {
        dispatch(
            dishDeleted(props.dish.id)
        )
    }

    return (
        <div className="flex justify-between items-center">
            {/* pic name number */}
            <div className="flex">
                <div className="h-16 w-full max-w-16" >
                    <img className=" shadow-md rounded-lg h-full object-cover" src={props.dish.image} alt={props.dish.name} />
                </div>

                <div className="flex flex-col justify-between px-2">
                    <h3>{props.dish.name}</h3>
                    <div className="flex justify-between">
                        <div className="flex space-x-1">
                            <button onClick={onDeleteButtonClicked} className="bg-yellow-200 rounded-full w-6 h-6 font-bold">-</button>
                            <span>{props.number}</span>
                            <button onClick={onAddButtonClicked} className="bg-yellow-200 rounded-full w-6 h-6 font-bold">+</button>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="align-bottom">
                <span className="font-semibold text-sm">{`$${(props.dish.price * props.number).toFixed(2)}`}</span>
            </div>
        </div>
    )
}

export default CartItem