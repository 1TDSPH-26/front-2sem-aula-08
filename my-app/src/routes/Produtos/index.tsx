import { useNavigate } from "react-router";
import Conteudo from "../../components/Conteudo/Conteudo";

export default function Produtos() {
    const navigate = useNavigate()
    const botaoHome = () => {
        navigate("/")
    }


    return (
        <main className="min-h-screen font-bold">
            <div className="p-3">
                <button
                    onClick={() => botaoHome()}
                    className="mt-5 border-2 border-sky-300 w-52 rounded-full hover:bg-sky-300 hover:text-white transition-colors duration-300 p-1">
                    Voltar para home
                </button>
            </div>
            <div className="flex justify-center pt-4">
                <h1 className=" text-4xl">Produtos</h1>
            </div>
            <div>
                <Conteudo />
            </div>
        </main>
    )

}