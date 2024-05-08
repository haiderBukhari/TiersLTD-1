import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

export function Header({ show, setShow }) {
    return (
        <div className="flex flex-col md:flex-row gap-5 items-start justify-between px-10 py-3 font-semibold text-white leading-[100%] flex-wrap w-full" style={{ zIndex: 20 }}>
            <div className="flex mt-3.5 justify-between md:hidden w-full items-center">
                <Link to="/" className="text-xl text-white font-medium" style={{ fontFamily: "Krona One" }}>
                    Swiss Mining
                </Link>
                {
                    !show ? <p onClick={() => { setShow(true) }}><Menu /></p> : <p onClick={() => { setShow(false) }}><X /></p>
                }
            </div>
            <Link to="/" className="mt-3.5 text-xl text-white font-medium hidden md:block" style={{ fontFamily: "Krona One" }}>
                Swiss Mining
            </Link>
            <div className={`flex flex-col md:flex-row justify-between mt-10 md:mt-4 md:h-auto gap-5 pr-5 my-auto text-xs font-light ${show ? 'block' : 'hidden md:block'}`} style={{ fontFamily: "Krona One" }}>
                <Link to="/miner" onClick={() => { setShow(false) }} className="cursor-pointer mt-8 md:mt-0 mx-0 md:mx-4" style={{ zIndex: 20 }} >ASICS</Link>
                <Link to="/miner2" onClick={() => { setShow(false) }} className="cursor-pointer mt-8 md:mt-0 mx-0 md:mx-4" style={{ zIndex: 20 }} >Unser Angebot</Link>
                <Link to="/miner3" onClick={() => { setShow(false) }} className="cursor-pointer mt-8 md:mt-0 mx-0 md:mx-4" style={{ zIndex: 20 }} >Pakete</Link>
                <Link to="/miner4" onClick={() => { setShow(false) }} className="cursor-pointer mt-8 md:mt-0 mx-0 md:mx-4" style={{ zIndex: 20 }} >Kontakt</Link>
            </div>
            <Link to="/register" style={{ zIndex: 20 }} className={`justify-center px-3 py-3.5 text-base text-center whitespace-nowrap rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50 mt-20 md:mt-0 ${show ? 'block' : 'hidden md:block'}`}>
                Kundenportal
            </Link>
        </div>
    );
}
