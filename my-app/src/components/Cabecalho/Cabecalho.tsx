import Menu from "../Menu/menu";

export default function Cabecalho(){

    return (
        <header className="text-white bg-blue-300 font-bold w-ful h-10 flex text-lg justify-between py-2 px-15">
            <h1>Boiler Plate</h1>
            <Menu/>
        </header>
    );
}