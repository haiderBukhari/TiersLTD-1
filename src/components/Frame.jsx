import right from '../assets/Group 2.png'

export function Frame() {
    return (
        <div className='relative'>
            <img
                src={right}
                className='absolute right-0 top-[-56%]'
            />
            <div className="flex flex-col">
                <div className="flex z-10 flex-col self-center mt-0 w-full text-center max-w-[1257px] max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-start max-md:flex-wrap">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d34c87e765dcf651c4c11472bd1d5d42dc337c29c4003246a86072f2b0b35f0d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="shrink-0 self-end mt-72 aspect-[1.08] fill-white w-[54px] max-md:mt-10"
                        />
                        <div className="flex flex-col justify-center px-6 py-8 rounded-3xl bg-zinc-900 max-md:px-5">
                            <div className="flex flex-col">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/992faeddcddf4c3b2af91532abc6c7c71a735c1a9567ecb9ba8dcb7777c40bf0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center w-20 aspect-square"
                                />
                                <div className="mt-4 text-3xl font-extrabold leading-10 text-white">
                                    Inbetriebnahme
                                </div>
                                <div className="mt-4 text-base leading-6 text-slate-400">
                                    Hast du Interesse? Bei uns geht es nicht lange bis dein Gerät
                                    angeschlossen und betriebsbereit ist.{" "}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-6 py-8 rounded-3xl bg-zinc-900 max-md:px-5">
                            <div className="flex flex-col">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40d0351b710b5848d75d7ebe246b938a1bf6bbd48444fdb4a6cbb6d14275f37e?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center w-20 aspect-square"
                                />
                                <div className="mt-4 text-3xl font-extrabold leading-10 text-white">
                                    Support
                                </div>
                                <div className="mt-4 text-base leading-6 text-slate-400">
                                    Wir sind für Sie da und helfen bei ihrem Anliegen. Wir antworten
                                    innerhalb von 24 Stunden bei Ihnen.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-6 py-8 rounded-3xl bg-zinc-900 max-md:px-5">
                            <div className="flex flex-col">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/860ae1e8bb2dd80d1317bf9d750699c4b8d989ee585e203d98f421c87a7c29d6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="self-center w-20 aspect-square"
                                />
                                <div className="mt-4 text-3xl font-extrabold leading-10 text-white">
                                    Poolfreiheit
                                </div>
                                <div className="mt-4 text-base leading-6 text-slate-400">
                                    Wähle selbst den Pool aus auf dem du Minen willst. Wir
                                    schliessen für dich das Gerät an und warten es für dich.
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b9a0c1f4b561041136cae7aa80d5ea6fe8975d3e02bfa5c0a8336fc2551f093?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="mt-6 ml-5 aspect-[1.56] fill-white w-[74px] max-md:ml-2.5"
                    />
                </div>
            </div>
            <div>
                <h1 className="text-center font-black text-white text-3xl mb-20">Unsere Strompreise</h1>
                <div className="flex flex-col items-center px-20 pt-7 pb-11 text-sm leading-4 text-center text-white shadow-sm bg-zinc-900 max-w-[365px] rounded-[34px] mx-auto">
                    <div className="text-xl font-black">Strompreise</div>
                    <div className="justify-center items-center flex self-stretch px-6 pt-2.5 pb-2 mt-6 text-xl font-black bg-teal-600 rounded-full aspect-square">
                        0.069Fr / KWH
                    </div>
                    <div className="mt-8">24 / 7 Überwachung</div>
                    <div className="mt-6">Keine versteckten Kosten</div>
                    <div className="mt-7">Mengen Rabatt</div>
                </div>
            </div>
        </div>
    );
}

