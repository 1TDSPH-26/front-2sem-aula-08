
type TipoProps = {
    nomeProduto: string;
    preco: string;
    img: string;
    descricao: string;
}


export default function Card({nomeProduto, preco, img, descricao}:TipoProps){
    return(
        <div  className="card">
            <p>Nome Produto: {nomeProduto}</p>
            <h2>Card</h2>
            <p>Preço: {preco}</p>
            <img src={img} alt={descricao} />

        </div>

    );
}