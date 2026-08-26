import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/rodape";


export default function App(){

    return(
        <div>
            <Cabecalho/>
                <Outlet/>
            <Rodape/>
        </div>
    );
}