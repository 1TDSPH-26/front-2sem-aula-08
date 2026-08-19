
type TipoProps = {
    nomeProduto: string;
    preco: string;
}


export default function Card({nomeProduto, preco}:TipoProps){
    return(
        <div>
            <h2>Card</h2>
            <p>Nome Produto: {nomeProduto}</p>
            <p>Preço: {preco}</p>

        </div>

    );
}