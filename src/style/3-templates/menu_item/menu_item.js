import React from 'react'
import "./menu_item.sass"
import addToCart from "../../../public/images/addToCart.svg"


export default function MenuItem(prop){


    return(
        <div className={"menuItem"}>
            <div className={"menuItemContainer"}>
                <h1>{prop.title}</h1>
                <p className={"price"}>{prop.price}</p>
                <p className={"calories"}>{prop.cal}</p>
                <div className={"quantity"}>
                    <p>qt:</p>
                    <input className={"quantityNum"} placeholder={"01"}/>
                </div>
                <img src={addToCart} alt={"addToCart"} unselectable={"on"}/>
            </div>
        </div>
    )
}