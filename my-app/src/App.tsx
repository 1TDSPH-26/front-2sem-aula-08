import { Outlet } from "react-router"
import Cabecalho from "./components/Cabecalho/Cabecalho"

export default function App(){

    return(
        <div>

            <Cabecalho/>
             <Outlet/>
            
        </div>
    );
}