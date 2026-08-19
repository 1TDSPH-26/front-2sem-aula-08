type TipoProps = {
    nomeProduto: string;
    preco: string;
    img: string
}


export default function Card({nomeProduto, preco}:TipoProps){
    return(
        <div>
            <img src="img" alt="{descriçao}" />
            <h2>Card</h2>
            <p>Nome Produto: {nomeProduto}</p>
            <p>Preço: {preco}</p>
        </div>
    )
}