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
                  <h4>“Dados brutos são mais valiosos do que algoritmos sofisticados quando se busca resolver problemas reais.”</h4>
                  <p>- Referência Peter Norvig & Alon Halevy (The Unreasonable Effectiveness of Data).</p>
                </div>
                <div className={s.wrapperButtons}>
                    <Button
                        type="submit"
                        text="Evolução do PIB"
                        backgroundColor="#1F4547"
                        color="#FFF"
                        isLink={true}
                    />
                    <Button
                        type="submit"
                        text="PIB por ano"
                        backgroundColor="#F58561"
                        color="#FFF"
                        isLink={true}
                    />
                </div>
            </section>
        </main>
    );
}
