import { useNavigate } from 'react-router'
import ImagemHero from '../../assets/ImagemHero.png'

export default function Home() {
    const navigate = useNavigate()
    const botaoHero = () =>{
        navigate("/produtos")
    }

    return (
        <main className="font-bold min-h-screen">
            <div className="w-5xl h-60">
                <img className="absolute h-120 w-full object-cover" src={ImagemHero} alt="fundo branco com as bordas em azul claro" />
                <div className="inset-0 absolute flex flex-col items-center mt-50 text-3xl">
                    <h2>Acesse os melhores pordutos por preços acessíveis</h2>
                    <button
                    onClick={() => botaoHero()}
                     className="mt-5 border-2 border-sky-300 w-60 rounded-full hover:bg-sky-300 hover:text-white transition-colors duration-300 p-1">
                        Clique Aqui
                        </button>
                </div>
            </div>

        </main>
    )
}