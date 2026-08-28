import Card from "../Card/Card";
import HeadPhone from '../../assets/headphoneIA.png'
import Perfume from '../../assets/perfumeIA.png'
import tenis from '../../assets/tenisIA.png'

export default function Conteudo(){

    return(
        <div>
            <main>
                <div className="flex flex-col items-center pt-4">
                     <h2 className="text-xl">Acesse os Principais Produtos</h2>
                <p>Aqui você tem acesso aos melhores proutos, com os melhores preços!</p>.
                </div>
                <h2 className="flex justify-center">Produtos</h2>
                <section className="flex justify-center gap-7 mt-8">
                    
                    <Card 
                    nomeProduto= 
                    "Perfume extremamente cheiroso"
                    preco="R$ 100,00"
                    url={Perfume}
                    />
                    <Card 
                    nomeProduto= 
                    "Fone de ouvido 100% confiavel"
                    preco="R$ 50,00"
                    url={HeadPhone}
                    />
                    <Card 
                    nomeProduto= 
                    "Tenis 100% original"
                    preco="R$ 10,00"
                    url={tenis}
                    />

                </section>
            </main>
        </div>
    )
}