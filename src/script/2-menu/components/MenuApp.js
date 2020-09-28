import React from 'react'
import MenuItem from "../../../style/3-templates/menu_item/menu_item";
import WebSiteFooter from "../../../style/3-templates/footer/WebSiteFooter";

export default function MenuApp(){

    return(
        <div className={"MenuContainer"}>
            <main>
                <nav>
                    <h3 className={"backButton"}>
                        <a href={"/"}>back</a>
                    </h3>
                    <h1>Menu</h1>
                    <div className={"ItemCounter"}>
                        <div className={"cartCounterIcon"}>
                            <h3>1</h3>
                        </div>

                        <div className={"cartName"}>
                            <h3><a href={"cart.html"}>cart</a></h3>
                        </div>
                    </div>
                </nav>
                <div className={"MenuGrid"}>
                    <MenuItem title={"Classic Blueberry"} price={"$5.99"}
                    cal={"800cal"}/>
                    <MenuItem title={"Rasberry"} price={"$6.99"}
                    cal={"600cal"}/>
                    <MenuItem title={"Banana"} price={"$5.99"}
                    cal={"800cal"}/>
                    <MenuItem title={"Coco Cinnamon Classic"} price={"$7.99"}
                    cal={"900cal"}/>
                    <MenuItem title={"Buttermilk Delight"} price={"$6.99"}
                    cal={"900cal"}/>
                    <MenuItem title={"Mini Carrot Cake"} price={"$8.99"}
                    cal={"1000cal"}/>
                    <MenuItem title={"Full Chocolate"} price={"$9.99"}
                    cal={"900cal"}/>
                    <MenuItem title={"Orange Muffins"} price={"$7.99"}
                    cal={"500cal"}/>
                    <MenuItem title={"Danish Muffins"} price={"$8.99"}
                    cal={"700cal"}/>
                </div>
            </main>
            <WebSiteFooter/>
        </div>
    )
}