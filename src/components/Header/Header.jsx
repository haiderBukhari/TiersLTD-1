import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="flex gap-5 items-start justify-between px-10 py-3 font-semibold text-white leading-[100%] flex-wrap w-full" style={{zIndex: 20}}>
            <Link to="/" className="mt-3.5 text-xl text-white font-medium" style={{fontFamily: "Krona One"}}>
                Swiss Mining
            </Link>
            <div className="flex gap-5 justify-center pr-5 my-auto text-xs font-light" style={{fontFamily: "Krona One"}}>
                <Link to="/miner" className="cursor-pointer" style={{zIndex: 20}} >ASICS</Link>
                <Link to="/miner2" className="cursor-pointer" style={{zIndex: 20}} >Unser Angebot</Link>
                <Link to="/miner3" className="cursor-pointer" style={{zIndex: 20}} >Pakete</Link>
                <Link to="/miner4" className="cursor-pointer" style={{zIndex: 20}} >Kontakt</Link>
            </div>
            <Link to="/register" style={{zIndex: 20}} className="justify-center px-3 py-3.5 text-base text-center whitespace-nowrap rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50">
                Kundenportal
            </Link>
        </div>
    );
}
