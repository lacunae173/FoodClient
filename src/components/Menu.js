import { useEffect, useState } from "react";
import Dish from "./Dish";


function Menu(props) {
    
    const handleAdd = (event) => {
        event.preventDefault();
        console.log("add")
    }
    return (
        <div>
            <div className="flex flex-col space-y-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
                {props.menu.map(dish => {
                    return (
                        <Dish key={dish.id} dish={dish} add={handleAdd} className="flex-1 md:col-span-1" />

                    )
                })}
            </div>
        </div>
        
    )
}

export default Menu;