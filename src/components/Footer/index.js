import "./index.css";
import { ReactComponent as Github } from "./Github.svg";
import { ReactComponent as Linkedin } from "./LinkedIn.svg";
import { ReactComponent as Twitter } from "./Twitter.svg";
export const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <h3>Flávio Lima</h3>
                <div className="footer-logos">
                    <div className="logo-single">
                        <Github />
                    </div>
                    <div className="logo-single">
                        <Linkedin />
                    </div>
                    <div className="logo-single">
                        <Twitter />
                    </div>
                </div>
            </div>
        </div>
    );
};
