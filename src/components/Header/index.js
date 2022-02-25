import "./index.css";
import { ReactComponent as Menu } from "./Menu.svg";

export const Header = () => {


    const handleToggle = () =>{
        let menu = document.getElementById("menu-toggle");
        console.log(menu.style.display);
        if(menu.style.display === "none" || menu.style.display !== "flex"){
            menu.style.display = "flex";
        }else{
            menu.style.display = "none";
        }
    }

    return (
        <header>
            <nav className="desktop-header inter-family">
                <ul className="header-group">
                    <li>
                        <h3 className="prata-family">Flávio Lima</h3>
                    </li>
                </ul>
                <ul className="header-group">
                    <li>
                        <p>Articles</p>
                    </li>
                    <li>
                        <p>Chats</p>
                    </li>
                    <li>
                        <p>Awards</p>
                    </li>
                    <li>
                        <p>About</p>
                    </li>
                </ul>
                <ul className="header-group">
                    <li>
                        <a href="#" className="prata-family">
                            Get in touch
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="mobile-header">
                <div className="header-group">
                    <h3 className="prata-family">Flávio Lima</h3>
                </div>
                <div className="header-group">
                    <nav id="menu-toggle" className="nav-mobile-header inter-family">
                        <ul className="header-group">
                            <li>
                                <p>Articles</p>
                            </li>
                            <li>
                                <p>Chats</p>
                            </li>
                            <li>
                                <p>Awards</p>
                            </li>
                            <li>
                                <p>About</p>
                            </li>
                        </ul>
                        <ul className="header-group">
                            <li>
                                <a href="#" className="prata-family">
                                    Get in touch
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Menu onClick={() => handleToggle()} />
                </div>
            </div>
        </header>
    );
};
