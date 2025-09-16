// Components

// Images
import logo from "../../assets/logo_menu.png"
// Imports

// Styles
import s from './page.module.css'

export default function Home() {
  return (
    <main className={s.wrapperMain}>
      <section className={s.wrapperInterLogo}>
        <img src={logo}/>
      </section>
    </main>
  );
}