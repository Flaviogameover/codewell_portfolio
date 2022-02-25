import "./index.css";
import { ReactComponent as Morgan } from "./JP Morgan.svg";
import { ReactComponent as Tinder } from "./Tinder.svg";
import { ReactComponent as Samsung } from "./Samsung.svg";
import { ReactComponent as Verizon } from "./Verizon.svg";
import { ReactComponent as Visa } from "./Visa.svg";
import { ReactComponent as Walmart } from "./Walmart.svg";

export const Logos = () => {
    return (
        <section className="logos">
            <div className="logo-single">
                <Walmart />
            </div>
            <div className="logo-single">
                <Morgan />
            </div>
            <div className="logo-single">
                <Visa />
            </div>
            <div className="logo-single">
                <Tinder />
            </div>
            <div className="logo-single">
                <Samsung />
            </div>
            <div className="logo-single">
                <Verizon />
            </div>
        </section>
    );
};
