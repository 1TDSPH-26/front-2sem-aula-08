import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/rodape/rodape";


export default function App(){

    return(
        <div>
            <Cabecalho/>
            <Conteudo/>
            <Rodape/>
        </div>
    );
}