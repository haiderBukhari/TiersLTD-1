import builderPic from '../assets/bg-gradient-img.png'
import mirror from '../assets/mirror.png'

export function Builder() {
    return (
        <div>
            <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0 mt-20">
                <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/521a053079c5a888726fbfed66716a48f61060001b880ef270864bbc20cd6f99?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/521a053079c5a888726fbfed66716a48f61060001b880ef270864bbc20cd6f99?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/521a053079c5a888726fbfed66716a48f61060001b880ef270864bbc20cd6f99?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/521a053079c5a888726fbfed66716a48f61060001b880ef270864bbc20cd6f99?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/521a053079c5a888726fbfed66716a48f61060001b880ef270864bbc20cd6f99?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/521a053079c5a888726fbfed66716a48f61060001b880ef270864bbc20cd6f99?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/521a053079c5a888726fbfed66716a48f61060001b880ef270864bbc20cd6f99?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/521a053079c5a888726fbfed66716a48f61060001b880ef270864bbc20cd6f99?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="grow w-full aspect-[0.86] md:w-[500px] ml-10"
                    />
                </div>
                <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-center max-w-[580px]">
                        <div className="flex flex-col px-5 w-full max-md:max-w-full">
                            <div className="w-full text-5xl font-black text-white leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                                24/7 Überwacht und in Betrieb{" "}
                            </div>
                            <div className="mt-4 w-full text-base leading-6 text-slate-400 max-md:max-w-full">
                                Unsere Partner haben ein Schutzkonzept entwickelt und einen
                                Reibungslosten Ablauf zu gewährleisten. Unsere Anlagen sind 24/7
                                Überwacht und bietet die höchste Sicherheit
                            </div>
                        </div>
                        <button className="justify-center self-start px-8 py-6 mt-8 text-base font-semibold leading-4 text-center text-white rounded-xl border border-white border-solid max-md:px-5 ml-5">
                            Jetzt Minen
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex flex-col justify-center max-w-[700px] ml-16">
                    <div className="flex flex-col px-5 w-full max-md:max-w-full">
                        <div className="w-full text-5xl font-black text-white leading-[65px] max-md:max-w-full max-md:text-2xl max-md:leading-[58px]">
                            Steigen Sie in die Welt des Kryptominings ein{" "}
                        </div>
                        <div className="mt-4 w-full text-base leading-6 text-slate-400 max-md:max-w-full">
                            Fange jetzt an in Kryptomining zu investieren und erhalte automatisch
                            Geld auf dein Wallet gutgeschrieben.{" "}
                        </div>
                    </div>
                    <div className="justify-center self-start px-7 py-6 mt-8 text-base font-semibold leading-4 text-center text-white rounded-xl border border-solid bg-[linear-gradient(225deg,#18C8FF_14.89%,#933FFE_85.85%)] border-white border-opacity-50 max-md:px-5 ml-4">
                        Jetzt Hosten
                    </div>
                </div>
                <img src={builderPic} className='max-w-[47%]' alt='' />
            </div>

            <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0 mt-5">
                <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src={mirror}
                        className="grow w-full aspect-[0.86] md:w-[480px] ml-10"
                    />
                </div>
                <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-center max-w-[580px]">
                        <div className="flex flex-col px-5 w-full max-md:max-w-full">
                            <div className="w-full text-5xl font-black text-white leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                            Nachhaltigkeit{" "}
                            </div>
                            <div className="mt-4 w-full text-base leading-6 text-slate-400 max-md:max-w-full">
                            Unsre Anlage wird mit 100% nachhaltigem Strom betrieben                             </div>
                        </div>
                        <button className="justify-center self-start px-8 py-6 mt-8 text-base font-semibold leading-4 text-center text-white rounded-xl border border-white border-solid max-md:px-5 ml-5">
                        Jetzt Minen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

