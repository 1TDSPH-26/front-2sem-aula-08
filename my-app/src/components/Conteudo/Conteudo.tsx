import Card from "../Card/Card";

export default function Conteudo(){
    return(
        
        <main><h2>Conteudo aleatorio</h2>
            
            
        
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iusto, placeat aspernatur provident eaque asperiores quia dolorum exercitationem molestiae odit, a necessitatibus nam voluptatum tempora suscipit quasi, dolorem voluptatibus corrupti.</p>

        <section>
            <h2>Produtos</h2>
            <Card nomeProduto= "Produto 1" preco = "100" img="https://placehold.co/100x100" descricao = "place holder"/>
            <Card nomeProduto= "Produto 2" preco = "50"img="https://placehold.co/100x100"descricao = "place holder"/>
            <Card nomeProduto= "Produto 3" preco = "10"img="https://placehold.co/100x100"descricao = "place holder"/>
            

            
        </section>
        
        </main>
    
    );
        


}