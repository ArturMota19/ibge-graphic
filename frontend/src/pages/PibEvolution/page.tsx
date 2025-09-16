// Components

// Images
import { useEffect, useState } from "react";
// Imports

// Styles
import s from "./page.module.css";
import { BaseRequest } from "../../services/BaseRequest";

export default function PibEvolution() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function FetchIBGE(){
      const response = await BaseRequest({
        method: "GET",
        url: "https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?localidades=N7",
        setIsLoading
      })
    }
    FetchIBGE()
  },[])

    return (
        <main className={s.wrapperMain}>
            <section className={s.wrapperInterLogo}>
              <h1>Evolução do PIB</h1>
            </section>
        </main>
    );
}
