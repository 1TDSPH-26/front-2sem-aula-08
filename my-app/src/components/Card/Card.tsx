type TipoProps = {
    nomeProduto: string;
    preco: string | number;
    img: string;
    descricao: string;
}

export default function Card({nomeProduto, preco, img, descricao}: TipoProps) {
    return (
        <div>
            <h2>Card</h2>
            <p>Nome Produto: {nomeProduto}</p>
            <p>Preço: {preco}</p>
            <img src={img} alt={descricao} />

        </div>

    );
}