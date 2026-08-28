import { Link } from "react-router";

export default function Menu(){
    const estiloNav = "text-white hover:text-sky-600 transition-color duration-300"

    return(
          <nav>
                <ul className="flex gap-2 font-bold ">
                    <li><Link className={estiloNav} to="/">Home</Link></li>
                    <li><Link className={estiloNav} to="/produtos">Produtos</Link></li>
                </ul>
            </nav>
    )

}