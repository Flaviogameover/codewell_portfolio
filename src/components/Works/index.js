import "./index.css";
import work_1 from "./Spense.png";
import work_2 from "./YelpCamp.png";

export const Works = () => {
    return (
        <section className="works">
            <div className="work-single">
                <img src={work_1} alt="Spense" />
                <h2 className="prata-family">Spense.com -</h2>
                <p className="inter-family">
                    Rethinking the way writers get paid, an open-source platform
                    designed to help writers focus more on writing, and less on
                    when and how they'll get paid. Project in collaboration with
                    Codewell.cc
                </p>
            </div>
            <div className="work-single">
                <img src={work_2} alt="YelpCamp" />
                <h2 className="prata-family">YelpCamp.com -</h2>
                <p className="inter-family">
                    Allowing backpack travelers to perfectly plan their trip
                    through an open-source platform similar to TripAdvisor. With
                    over 1m MAU, YelpCamp has been the crowd's favorite in 2021.
                </p>
            </div>
        </section>
    );
};
