// Components

// Images
import logo from "../../assets/logo_menu.png";
import Button from "../../components/basics/Button/button";
// Imports

// Styles
import s from "./page.module.css";

export default function Home() {
    return (
        <main className={s.wrapperMain}>
            <section className={s.wrapperInterLogo}>
                <img src={logo} />
                <div className={s.wrapperInfos}>
                  <h3>Artur Mota</h3>
                  <h2>Teste Técnico</h2>
                </div>
                <div className={s.wrapperCitation}>
                  <h4>“The goal is to turn data into information, and information into insight.”</h4>
                  <p>- Carly Fiorina</p>
                </div>
                <div className={s.wrapperButtons}>
                    <Button
                        type="submit"
                        text="Evolução do PIB"
                        backgroundColor="#1F4547"
                        color="#FFF"
                        isLink={true}
                        url="/pib-evolution"
                    />
                    <Button
                        type="submit"
                        text="PIB por ano"
                        backgroundColor="#F58561"
                        color="#FFF"
                        isLink={true}
                        url="/yearly-pib"
                    />
                </div>
            </section>
        </main>
    );
}
