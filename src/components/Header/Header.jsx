import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="flex gap-5 items-start justify-between px-10 py-3 font-semibold text-white leading-[100%] flex-wrap w-full" style={{zIndex: 10}}>
            <div className="mt-3.5 text-xl text-white font-medium" style={{fontFamily: "Krona One"}}>
                Swiss Mining
            </div>
            <div className="flex gap-5 justify-center pr-5 my-auto text-xs font-light" style={{fontFamily: "Krona One"}}>
                <Link to="/miner" className="cursor-pointer" >ASICS</Link>
                <Link to="/miner" className="cursor-pointer" >Unser Angebot</Link>
                <div>Pakete</div>
                <div>Kontakt</div>
            </div>
            <div className="justify-center px-3 py-3.5 text-base text-center whitespace-nowrap rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50">
                Kundenportal
            </div>
        </div>
    );
}
