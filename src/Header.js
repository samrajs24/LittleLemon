import { RxHamburgerMenu } from "react-icons/rx";
import basket_img from "./assets/images/Basket.svg";
import logo_img from "./assets/images/TastyFood.svg";

function Header() {
    return (
      <nav>
        <div className="container">
            <div className="header">
                <div className="tinymenu"><RxHamburgerMenu size={40}/></div>
                <img className="logo" src={logo_img} alt="Logo"/>
                <ul>
                <li><a href="/"><b>Home</b></a> </li>
                <li><a href="/about"><b>About</b></a></li>
                <li><a href="/construction"><b>Menu</b></a></li>
                <li><a href="/booking"><b>Reservations</b></a></li>
                <li><a href="/construction"><b>Order online</b></a></li>
                <li><a href="/construction"><b>Login</b></a></li>
                </ul>
                <img className="basket" src={basket_img} alt="Basket" />
            </div>
        </div>
      </nav>
    );
}

export default Header;