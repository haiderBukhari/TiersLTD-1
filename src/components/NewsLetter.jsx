export function NewsLetter() {
    return (
        <div className="flex justify-center items-center h-[40vh] mt-20 pt-20 mb-20 pb-20">
            <div className="flex flex-col max-w-[780px]">
                <div className="flex flex-col px-5 text-center text-white max-md:max-w-full">
                    <div className="w-full text-2xl md:text-5xl font-black leading-[30px] md:leading-[65px] max-md:max-w-full">
                        Newsletter anmelden
                    </div>
                    <div className="self-center mt-4 text-base leading-6 max-md:max-w-full">
                        Unsubscribe at any time.{" "}
                        <span className="text-white">Privacy policy↗</span>
                    </div>
                </div>
                <div className="flex gap-2.5 self-center px-5 py-4 mt-8 text-sm leading-5 rounded-xl border border-cyan-400 border-solid shadow-lg backdrop-blur-[20px] text-slate-600">
                    <input placeholder="Email Address" className="flex-1 my-auto bg-transparent border-none outline-none text-white"/>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9207a4d79b3ad404d834b338e5990289335f6ffddc5515b6c284d24679f14fac?apiKey=cf358c329e0d49a792d02d32277323ef&"
                        className="shrink-0 w-6 aspect-square"
                    />
                </div>
            </div>
        </div>
    );
}

