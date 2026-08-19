import Card from "../Card/Card";


export default function Conteudo(){

    return(
        <div>
            <main>
                <h2>Conteudo aleatorio</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam dicta quo laboriosam quaerat facere doloremque quasi rem tempora saepe quae omnis beatae adipisci, labore dolore asperiores consectetur nemo sed quas ducimus impedit amet voluptatibus ea? Corporis ipsum voluptatem ratione illo dolorem quis earum quia repellendus doloremque, quas, labore officiis.</p>

                <section>
                    <h2>Produtos</h2>
                    <Card 
                    nomeProduto= 
                    "Produto 1"
                    preco="R$ 100,00"
                    />
                    <Card 
                    nomeProduto= 
                    "Produto 2"
                    preco="R$ 50,00"
                    />
                    <Card 
                    nomeProduto= 
                    "Produto 3"
                    preco="R$ 10,00"
                    />

                </section>
            </main>
        </div>
    )
}