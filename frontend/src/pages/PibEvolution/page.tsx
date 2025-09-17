// Components

// Images
import { useEffect, useState } from "react";
// Imports
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
// Styles
import s from "./page.module.css";
import { BaseRequest } from "../../services/BaseRequest";

export default function PibEvolution() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([])
    // const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

    useEffect(() => {
        async function FetchIBGE() {
            // query builder: https://servicodados.ibge.gov.br/api/docs/agregados?versao=3#api-bq
            const response = await BaseRequest({
                method: "GET",
                url: "https://servicodados.ibge.gov.br/api/v3/agregados/6784/periodos/1996|1997|1998|1999|2000|2001|2002|2003|2004|2005|2006|2007|2008|2009|2010|2011|2012|2013|2014|2015|2016|2017|2018|2019|2020|2021|2022/variaveis/9808|9812?localidades=N1[all]",
                setIsLoading,
            });
            console.log(response);
        }
        FetchIBGE();
    }, []);

    const MyChart = () => (
        <LineChart width={600} height={300} data={data}>
            <CartesianGrid />
            <Line dataKey="uv" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
        </LineChart>
    );

    return (
        <main className={s.wrapperMain}>
            <section className={s.wrapperInterLogo}>
                <h1>Evolução do PIB</h1>
                <MyChart />
            </section>
        </main>
    );
}
