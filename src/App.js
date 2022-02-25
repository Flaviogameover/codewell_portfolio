import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Logos } from "./components/Logos";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <Main />
                <Logos />
                <Works />
            </div>
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
