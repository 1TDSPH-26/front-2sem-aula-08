type TipoProps = {
    nomeProduto: string
    preco: string
    url: string
}


export default function Card({ nomeProduto, preco, url }: TipoProps) {


    return (
        <div className="w-65 text-justify h-65 border-3 rounded-3xl border-sky-200 shadow-xl hover:w-72 hover:h-72 transition-all hover:shadow-2xl duration-200">
            <div className="p-4 mt-2">
                <p>Nome Produto: {nomeProduto}</p>
                <div className="flex justify-center">
                    <img className="w-35 py-2 " src={url} alt="Imagem varia de acordo com o nome do produto" />
                </div>

                <p>Preco: {preco}</p>
            </div>

        </div>

    )
}