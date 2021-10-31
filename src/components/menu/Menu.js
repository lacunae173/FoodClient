import Dish from "./Dish";


function Menu(props) {
    return (
        <div>
            <div className="flex flex-col space-y-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
                {props.menu.map(dish => {
                    return (
                        <Dish key={dish.id} dish={dish}/>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Menu;