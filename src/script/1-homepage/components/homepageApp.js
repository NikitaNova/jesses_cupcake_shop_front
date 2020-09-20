import React from 'react'
import WebsiteFooter from "../../../style/3-templates/WebSiteFooter";
import Logo from "../../../public/images/JessesCupcakesLogo.svg"


export default function homepageApp(){

    return(
        <main>
            <div className={"slideShowContainer"}>
                <nav>
                    <a>about</a>
                    <div>
                        <img src={Logo} alt={"Logo"}/>
                    </div>
                    <a className={"order"}>order</a>
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
            </div>
            <div className={"aboutContainer"}>
            </div>
            <WebsiteFooter/>
        </main>
    )
}