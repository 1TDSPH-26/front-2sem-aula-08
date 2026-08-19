import Card from "../Card/Card";

export default function Conteudo()
{
    return(
        <main>
            <h2>
                Conteudo aleatório
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga hic explicabo, perspiciatis nesciunt sint eum, reprehenderit
                , provident dolore accusantium corrupti animi aspernatur cum ipsa nihil minima aliquam accusamus! Sapiente?
            </p>
            <section>
                <h2>Produtos</h2>
                <Card nomeProduto="Produto 1" preco="R$ 100,00" img="https://placehold.co/100x100"descricao="Lorem ipsum dolor sit amet consectetur adipisicing"/>
                <Card nomeProduto="Produto 2" preco="R$ 50,00"img="https://placehold.co/100x100"descricao="Lorem ipsum dolor sit amet consectetur adipisicing"/>
                <Card nomeProduto="Produto 3" preco="R$ 10,00"img="https://placehold.co/100x100"descricao="Lorem ipsum dolor sit amet consectetur adipisicing"/>


            </section>
        </main>

    );
}