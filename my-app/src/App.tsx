 import Cabecalho from "./components/cabecalho/cabecalho";
import Conteudo from "./components/cabecalho/conteudo/conteudo";
import Rodape from "./components/cabecalho/rodape/rodape";


export default function App(){

    return(
        <div>
            <Cabecalho/>
            <Conteudo/>
            <Rodape/>
        </div>
    );
}