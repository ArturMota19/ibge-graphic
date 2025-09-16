// Components

// Images
import logo from "../../assets/logo_menu.png";
import Button from "../../components/basics/Button/button";
// Imports

// Styles
import s from "./page.module.css";

export default function PibEvolution() {
    return (
        <main className={s.wrapperMain}>
            <section className={s.wrapperInterLogo}>
              <h1>Evolução do PIB</h1>
            </section>
        </main>
    );
}
