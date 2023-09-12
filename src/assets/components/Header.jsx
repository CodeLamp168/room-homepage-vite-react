import React, {useState} from 'react'

import HamburgerBtn from '../images/icon-hamburger.svg'
import ExitBtn from '../images/icon-close.svg'


function HeaderLogo(){
    
    return(
        <div className="header-logo"></div>
    )
}
function Hamburger({isEnabled, onClick}){
    
    return(
    <div className="hamburger-btn" onClick={onClick}>
        <img src={isEnabled ? ExitBtn : HamburgerBtn} alt="no-img" />
    </div>
    )
}

function HeadContent({isEnabled}){


    return(
        <nav className={`header-nav ${isEnabled ? 'activeNav ' : 'notActive '}`} >
            <img src="" alt="" />
            <ul className="nav-list">
                <a className="nav-item" href="#">home</a>
                <a className="nav-item" href="#">shop</a>
                <a className="nav-item" href="#">about</a>
                <a className="nav-item" href="#">contact</a>
            </ul>
        </nav>
    )
}

export default function Header() {
    const [isEnabled, setIsEnabled] = useState(false);

    function handleHamburgerClick() {
      setIsEnabled(!isEnabled);
    }

    return (
        <header className="header">
            <Hamburger isEnabled={isEnabled} onClick={handleHamburgerClick}/>
            <HeaderLogo />
            <HeadContent isEnabled={isEnabled} />
        </header>
    )
}
