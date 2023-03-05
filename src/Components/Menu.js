import React from "react"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

export default function StockMenu() {
    const width = window.innerWidth
    var isMobile = (width < 768);
    return (
        <>
            {
                isMobile ? <MobileMenu/> : <DesktopMenu/>
            }
    
        </>
    )
}
