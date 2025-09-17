// Components
import Button from "../../components/basics/Button/Button";
import Spinner from "../../components/basics/SpinnerLoading/SpinnerLoading";
// Images
import backIcon from "../../assets/back_icon.svg"
// Imports
import { useState } from "react";
import { BaseRequest } from "../../services/BaseRequest";
import { toast } from "react-toastify";
import { MultiSelect } from "primereact/multiselect";
// Styles
import s from "./page.module.css";
import { useNavigate } from "react-router-dom";

export default function PibEvolution() {
  const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const exchangeRate = 5.4;
    const [data, setData] = useState<
        { name: string; pibTotal: number; pibPerCapita: number }[]
    >([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const years = [
        { label: "Ano 1996", value: "1996" },
        { label: "Ano 1997", value: "1997" },
        { label: "Ano 1998", value: "1998" },
        { label: "Ano 1999", value: "1999" },
        { label: "Ano 2000", value: "2000" },
        { label: "Ano 2001", value: "2001" },
        { label: "Ano 2002", value: "2002" },
        { label: "Ano 2003", value: "2003" },
        { label: "Ano 2004", value: "2004" },
        { label: "Ano 2005", value: "2005" },
        { label: "Ano 2006", value: "2006" },
        { label: "Ano 2007", value: "2007" },
        { label: "Ano 2008", value: "2008" },
        { label: "Ano 2009", value: "2009" },
        { label: "Ano 2010", value: "2010" },
        { label: "Ano 2011", value: "2011" },
        { label: "Ano 2012", value: "2012" },
        { label: "Ano 2013", value: "2013" },
        { label: "Ano 2014", value: "2014" },
        { label: "Ano 2015", value: "2015" },
        { label: "Ano 2016", value: "2016" },
        { label: "Ano 2017", value: "2017" },
        { label: "Ano 2018", value: "2018" },
        { label: "Ano 2019", value: "2019" },
        { label: "Ano 2020", value: "2020" },
        { label: "Ano 2021", value: "2021" },
        { label: "Ano 2022", value: "2022" },
    ];

    async function FetchIBGE() {
        if (selectedYears.length < 2) {
            toast.error(
                "Selecione ao menos dois anos para realizar a análise.",
                {
                    toastId: "selected-years-error",
                }
            );
            return;
        }
        const yearsString = selectedYears.join("|");
        const response = await BaseRequest({
            method: "GET",
            url: `https://servicodados.ibge.gov.br/api/v3/agregados/6784/periodos/${yearsString}/variaveis/9808|9812?localidades=N1[all]`,
            setIsLoading,
        });
        const pibTotal = response.data.find((d: { id: string; }) => d.id === "9808")
            .resultados[0].series[0].serie;
        const pibPerCapita = response.data.find((d: { id: string; }) => d.id === "9812")
            .resultados[0].series[0].serie;
        setData(
            Object.keys(pibTotal).map((year) => ({
                name: year,
                pibTotal: Number(pibTotal[year] / 1000 / exchangeRate),
                pibPerCapita: Number(pibPerCapita[year] / exchangeRate),
            }))
        );
    }

    const Table = ({label}:{label: string[]}) => {
      console.log(data)
      return(
        <section className={s.wrapperTable}>
          <div className={s.wrapperTableHeader}>
            {label.map((eachLabel: string) => (
               <p>{eachLabel}</p>
            ))}
          </div>
          <div className={s.wrapperTableData}>
            {data.map((eachYear) => (
               <div className={s.wrapperLineTableData}>
                <p>{eachYear.name}</p>
                <p>$ {eachYear.pibTotal}</p>
                <p>$ {eachYear.pibPerCapita}</p>
               </div>
            ))}
          </div>
        </section>
      )
    }
 

    return (
        <main className={s.wrapperMain}>
            <section className={s.wrapperInterLogo}>
                <div className={s.backDiv} onClick={() => navigate(-1)}>
                  <img src={backIcon} alt="voltar" />
                </div>
                <div className={s.wrapperHeaderDiv}>
                    <h1>PIB Anual</h1>
                    <form className={s.wrapperForm}>
                        <label htmlFor="years">
                            Selecione o(s) Ano(s) para análise
                        </label>
                        <MultiSelect
                            value={selectedYears}
                            onChange={(e) => setSelectedYears(e.value)}
                            options={years}
                            name="years"
                            placeholder="Anos para consulta"
                            className={`customMultiSelect`}
                        />
                        <Button
                            type="button"
                            text="Gerar tabela"
                            backgroundColor="#1BB17A"
                            color="#FFF"
                            doFunction={FetchIBGE}
                            isLoading={isLoading}
                        />
                    </form>
                </div>
                {isLoading ? (
                    <Spinner size={50} color="#1BB17A" />
                ) : (
                    <Table
                      label={["Ano de Análise", "PIB em milhões de dólares", "PIB percapita em dólares"]}
                    />
                )}
            </section>
        </main>
    );
}
