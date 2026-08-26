import { Link } from "react-router";


export default function Menu(){

    return (
        <header>
            <h1>Meu Componente</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li> <Link to= "produtos">Produtos</Link> </li>
                    <li><Link to="conteudo">Conteudo</Link></li>
                </ul>
                
            </nav>
        </header>
    );
}