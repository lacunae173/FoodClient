import { useEffect, useState } from "react";
import Dish from "./Dish";


function Menu(props) {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/menu.json')
            .then(response => response.json())
            .then(data => {
                setMenu(data)
            });
    }, [])

    return (
        <div className="grid grid-rows-6 gap-2">
            {menu.map(dish => {
                console.log(dish);
                return (
                    <Dish key={dish.id} dish={dish} className="row-span-1"/>
                )
            })}
        </div>
    )
}

export default Menu;