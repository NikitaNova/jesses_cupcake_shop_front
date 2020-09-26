import React from 'react'
import WebsiteFooter from "../../../style/3-templates/footer/WebSiteFooter";
import Logo from "../../../public/images/JessesCupcakesLogo.svg"
import MenuItem from "../../../style/3-templates/menu_item/menu_item";


export default function homepageApp(){

    return(
        <main>
            <div className={"slideShowContainer"}>
                <nav>
                    <a>about</a>
                    <div>
                        <img src={Logo} alt={"Logo"} unselectable={"on"}/>
                    </div>
                    <a className={"order"} href={"menu.html"}>order</a>
                </nav>
                <p>
                    Welcome to Jesse's Cupcakes!
                    The World's first 100% online cupcake
                    shop that's delivered all over the United States
                </p>
                <div className={"slideShowNav"}>
                    <div className="slideDot"></div>
                    <div className="slideDot"></div>
                    <div className="slideDot"></div>
                </div>
            </div>
            <div className={"miniOrderContainer"}>
                <div className={"content"}>
                    <div className={"heading"}>
                        <p>Most Popular:</p>
                    </div>
                    <div className={"itemContainer"}>
                        <MenuItem title={"Classic Blueberry"} cal={"800cal"} price={"$5.99"}/>
                        <MenuItem title={"Rasberie Mess"} cal={"600cal"} price={"$6.99"}/>
                        <MenuItem title={"Banana"} cal={"800cal"} price={"5.99"}/>
                        <MenuItem title={"Coco Conamon Classic"} cal={"900cal"} price={"$7.99"}/>
                        <MenuItem title={"Coco Conamon Classic"} cal={"900cal"} price={"$7.99"}/>
                    </div>
                </div>
            </div>
            <div className={"aboutContainer"}>
                 <div className={"aboutDisplayImage"}>
                     <div className="imageContainer">
                         <img unselectable={"on"} alt={"Portrait of Ceo and Founder"}/>
                         <p className={"caption"}>
                            This picture was taken on the first day
                             Jesse's Cupcakes opened. About 2 years ago now!
                         </p>
                     </div>
                 </div>
                <div className={"aboutText"}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <WebsiteFooter/>
        </main>
    )
}