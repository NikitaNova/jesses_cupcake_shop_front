import React from 'react'
import "./footer.sass"

export default function WebsiteFooter(){

    return(
        <footer>
            <div className={"left"}>
                <a href="">about</a>
                <a href="">order</a>
                <a href="">jobs</a>
            </div>

            <div className={"right"}>
                <a href="">201-415-2367</a>
                <a href="">jessescupcakes@gmail.com</a>
                <a href="">Address, City, State</a>
            </div>
            <div>
            <p>©Copywright 2020</p>
            </div>
        </footer>
    )
}